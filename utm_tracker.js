function sendUtmToWebhook(webhookUrl) {
  const params = new URLSearchParams(window.location.search);

  const utmSource = params.get('utm_source') || '';
  const ghl_id    = params.get('ghl_id') || '';

  if (!utmSource && !ghl_id) return;

  const payload = {
    utm_source: utmSource,
    ghl_id: ghl_id,
    page_url: window.location.href,
    timestamp: new Date().toISOString()
  };

  fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  }).catch(() => {});
}

document.addEventListener('DOMContentLoaded', function () {
  sendUtmToWebhook('https://aisolv2.app.n8n.cloud/webhook/6de29cad-2f3c-4cbb-9e5f-4d06dd8a9eab');
});
