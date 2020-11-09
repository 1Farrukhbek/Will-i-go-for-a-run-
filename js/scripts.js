// Find and make variables from html elements
var elForm = document.querySelector('.js-form');
var elResult = document.querySelector('.js-result-output');
var elTemperatureInput = elForm.querySelector('.js-temperature-input');
var elRainingSwitch = elForm.querySelector('.js-raining-switch');
var elGymSwitch = elForm.querySelector('.js-gym-switch');


elForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  
  var inputTemperature = parseInt(elTemperatureInput.value.trim(), 10);

  // Qolib ketgan classlarni olib tashlash
  
  elResult.classList.remove('alert-success', 'alert-danger', 'alert-warning');
  
  // Hozircha kerakmas bo'lib turibti 
  // if (elTemperatureInput.length === 0) {
  //   elResult.classList.add('alert-warning');
  //   return;
  // } 

  // Bo'shligini yoki son kiritilmaganini tekshirish
  
  if (isNaN(inputTemperature)) {
    elResult.classList.add('alert-warning');
    elResult.textContent = 'Please input numbers';
    return;
  } 

  if (elRainingSwitch.checked) {
    console.log('Hello');
  }

  
  if (5 <= inputTemperature && inputTemperature <= 30) {
    elResult.classList.add('alert-success');
  } else {
    elResult.classList.add('alert-danger');
  }
  elResult.textContent = inputTemperature;
  
});
