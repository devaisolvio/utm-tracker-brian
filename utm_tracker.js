function getReferrer() {
  setTimeout(function() {
    console.log('UTM script running');
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);

    var formSource = urlParams.get('form_source');
    var utmSource = urlParams.get('utm_source');
    var ghlId     = urlParams.get('ghl_id');
    
    let data = {
      "logan":{"utm_source_form_id":120215528,"ghl_form_id":120215529},
      "luke":{"utm_source_form_id":120215709,"ghl_form_id":120215711},
      "joe":{"utm_source_form_id":120215730,"ghl_form_id":120215731},
      "johnny":{"utm_source_form_id":120215750,"ghl_form_id":120215751},
      }
      

    try {
    let formGhlId = data[formSource].ghl_form_id;
    let utmFormId = data[formSource].utm_source_form_id;
      loader.engine.document.getElementById(utmFormId).setValue({ value: utmSource });
      loader.engine.document.getElementById(formGhlId).setValue({ value: ghlId });
      console.log('values set into hidden fields');
    } catch (e) {
      console.error('Error setting values:', e);
    }
  }, 1000);
}

console.log("Added the js");
document.addEventListener('DOMContentLoaded', getReferrer);




