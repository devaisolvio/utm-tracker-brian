document.addEventListener('DOMContentLoaded', function () {
  console.log('UTM script running');
  var params = new URLSearchParams(window.location.search);

  var utmSource = params.get('utm_source') || '';
  var ghlId     = params.get('ghl_id') || '';

  console.log('parsed utmSource', utmSource, 'ghlId', ghlId);

  if (utmSource) {
    loader.engine.document
      .getElementById(123456789)
      .setValue({ value: utmSource });
  }
  if (ghlId) {
    loader.engine.document
      .getElementById(987654321)
      .setValue({ value: ghlId });
  }
});
