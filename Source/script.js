let $ = document;

/////////////////////////

let body = $.body;
let pressKeyAlert = $.querySelector(".pressKeyAlert");
let keyCodeInfo = $.querySelector(".keyCodeInfo");
let keyEventWhich =$.querySelector(".keyEventWhich")
let eventKeyAmount = $.querySelector(".eventKeyAmount");
let eventLocationAmount = $.querySelector(".eventLocationAmount");
let eventWhichAmount = $.querySelector(".eventWhichAmount");
let eventCodeAmount = $.querySelector(".eventCodeAmount");

body.addEventListener("keydown", function (event) {
  pressKeyAlert.style.display = "none";
  keyCodeInfo.style.display = "block";
  
  keyEventWhich.innerHTML = event.which
  eventKeyAmount.innerHTML = event.key;
  eventLocationAmount.innerHTML = event.location;
  eventWhichAmount.innerHTML = event.which;
  eventCodeAmount.innerHTML = event.code
});
