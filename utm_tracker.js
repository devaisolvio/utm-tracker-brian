
function getReferrer() {
setTimeout(function() {
var queryString = window.location.search;

var urlParams = new URLSearchParams(queryString);
var utmSource = urlParams.get('utm_source');
var ghlId = urlParams.get('ghl_id');


loader.engine.document.getElementById(123456789).setValue({ value: utmSource });
loader.engine.document.getElementById(987654321).setValue({ value: ghlId });

}, 1000);}
window.onclick = getReferrer;

