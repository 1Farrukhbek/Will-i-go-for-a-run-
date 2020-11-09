// Find and make variables from html elements
var elForm = document.querySelector('.js-form');
var elResult = document.querySelector('.js-result-output');
var elTemperatureInput = elForm.querySelector('.js-temperature-input');
var elRainingSwitch = elForm.querySelector('.js-raining-switch');
var elGymSwitch = elForm.querySelector('.js-gym-switch');


var run = function (evt) {
  evt.preventDefault();
  
  var inputTemperature = parseInt(elTemperatureInput.value.trim(), 10);

  // O'zgaruvchilar yasab olish
  var minTemperatureForRun = '5';
  var maxTemperatureForRun = '30';
  var normalTemperatureForRun = minTemperatureForRun <= inputTemperature && inputTemperature <= maxTemperatureForRun;
  var statusOfRain = elRainingSwitch;
  var statusOfGym = elGymSwitch;
  
  // Qolib ketgan classlarni olib tashlash
    elResult.classList.remove('alert-success', 'alert-danger', 'alert-warning');
  

  // Hozircha kerak emas bo'lib turibti 
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
 
  
  if (normalTemperatureForRun && !statusOfRain.checked) {
    elResult.classList.add('alert-success');
    elResult.textContent = 'Yes, I will.';
  } else if (normalTemperatureForRun && statusOfRain.checked && statusOfGym.checked) {
    elResult.classList.add('alert-success');
    elResult.textContent = 'Yes, I will.';
  } else {
    elResult.classList.add('alert-danger');
    elResult.textContent = "No, I won't.";
  }
  // elResult.textContent = inputTemperature;
  
};

elForm.addEventListener('submit', run);
elTemperatureInput.addEventListener('blur', run);
elRainingSwitch.addEventListener('change', run);
elGymSwitch.addEventListener('change', run);
