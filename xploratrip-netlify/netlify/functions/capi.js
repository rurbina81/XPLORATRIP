const PIXEL_ID = '251873825469297';
const API_URL = `https://graph.facebook.com/v21.0/${PIXEL_ID}/events`;

exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
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

  const ip = (event.headers['x-forwarded-for'] || event.headers['client-ip'] || '').split(',')[0].trim();

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

  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const result = await res.json();
    if (!res.ok) {
      console.error('Meta CAPI error:', JSON.stringify(result));
      return { statusCode: 502, body: 'CAPI error' };
    }
    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (err) {
    console.error('CAPI fetch failed:', err.message);
    return { statusCode: 502, body: 'Fetch failed' };
  }
};
