let $ = document;

/////////////////////////

let body = $.body;
let pressKeyAlert = $.querySelector(".pressKeyAlert");
let keyCodeInfo = $.querySelector(".keyCodeInfo");
let eventkeyWhich =$.querySelector(".eventKeyWhich")
let eventKey = $.querySelector(".eventKey");
let eventLocation = $.querySelector(".eventLocation");
let eventWhich = $.querySelector(".eventWhich");
let eventCode = $.querySelector(".eventCode");

body.addEventListener("keydown", function (event) {
  event.preventDefault()
  
  pressKeyAlert.style.display = "none";
  keyCodeInfo.style.display = "block";
  
  eventkeyWhich.innerHTML = event.which
  eventKey.innerHTML = event.key;
  eventLocation.innerHTML = event.location;
  eventWhich.innerHTML = event.which;
  eventCode.innerHTML = event.code
});
