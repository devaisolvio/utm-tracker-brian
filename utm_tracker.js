document.addEventListener('DOMContentLoaded', function () {
  var params = new URLSearchParams(window.location.search);

  var utmSource = params.get('utm_source') || '';
  var ghlId     = params.get('ghl_id') || '';

  // replace IDs with your real field IDs from Field Details
  if (utmSource) {
    loader.engine.document
      .getElementById(120174083)
      .setValue({ value: utmSource });
  }
  if (ghlId) {
    loader.engine.document
      .getElementById(120174084)
      .setValue({ value: ghlId });
  }
});
