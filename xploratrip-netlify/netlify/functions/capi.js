const PIXEL_ID = '251873825469297';
const API_URL = `https://graph.facebook.com/v21.0/${PIXEL_ID}/events`;

const ALLOWED_ORIGINS = new Set(['https://www.xploratrip.com', 'https://xploratrip.com']);
const ALLOWED_EVENTS = new Set(['Lead', 'PageView', 'ViewContent', 'Contact', 'InitiateCheckout']);

exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const origin = (event.headers.origin || '').replace(/\/$/, '');
  const referer = event.headers.referer || event.headers.referrer || '';
  const fromAllowedOrigin = ALLOWED_ORIGINS.has(origin) || [...ALLOWED_ORIGINS].some(o => referer.startsWith(o));
  if (!fromAllowedOrigin) {
    return { statusCode: 403, body: 'Forbidden' };
  }

  const token = process.env.META_CAPI_TOKEN;
  if (!token) {
    return { statusCode: 500, body: 'Token not configured' };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: 'Invalid JSON' };
  }

  const { event_name, event_id, event_source_url, custom_data } = body;
  if (!event_name || !event_id) {
    return { statusCode: 400, body: 'Missing event_name or event_id' };
  }
  if (!ALLOWED_EVENTS.has(event_name)) {
    return { statusCode: 400, body: 'Invalid event_name' };
  }

  // x-nf-client-connection-ip is set by Netlify's own edge and can't be spoofed by the client;
  // x-forwarded-for is client-influenceable and kept only as a fallback.
  const ip = event.headers['x-nf-client-connection-ip'] || (event.headers['x-forwarded-for'] || '').split(',')[0].trim();

  const payload = {
    data: [{
      event_name,
      event_time: Math.floor(Date.now() / 1000),
      event_id,
      event_source_url: event_source_url || 'https://xploratrip.com/',
      action_source: 'website',
      user_data: {
        client_ip_address: ip,
        client_user_agent: event.headers['user-agent'] || ''
      },
      custom_data: custom_data || {}
    }],
    access_token: token
  };

  // Only set when diagnosing Pixel/CAPI dedup in Meta's Test Events tool.
  // Must stay unset in normal production use, or real events get flagged as test traffic.
  if (process.env.META_TEST_EVENT_CODE) {
    payload.test_event_code = process.env.META_TEST_EVENT_CODE;
  }

  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const result = await res.json();
    if (!res.ok) {
      const err = result.error || {};
      console.error('Meta CAPI error:', err.message, err.code, err.fbtrace_id);
      return { statusCode: 502, body: 'CAPI error' };
    }
    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (err) {
    console.error('CAPI fetch failed:', err.message);
    return { statusCode: 502, body: 'Fetch failed' };
  }
};
