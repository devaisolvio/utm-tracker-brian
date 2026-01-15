function getReferrer() {
  setTimeout(function() {
    console.log('UTM script running');
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);

    var utmSource = urlParams.get('utm_source');
    var ghlId     = urlParams.get('ghl_id');

    console.log('parsed utmSource:', utmSource, 'ghlId:', ghlId);

    try {
      loader.engine.document.getElementById(120174307).setValue({ value: utmSource });
      loader.engine.document.getElementById(120174308).setValue({ value: ghlId });
      console.log('values set into hidden fields');
    } catch (e) {
      console.error('Error setting values:', e);
    }
  }, 1000);
}

console.log("Added the js");
document.addEventListener('DOMContentLoaded', getReferrer);


