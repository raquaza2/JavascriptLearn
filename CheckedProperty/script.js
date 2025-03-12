const myCheckBox = document.getElementById('myCheckBox');
const visaBtn = document.getElementById('visaBtn');
const masterCardBtn = document.getElementById('masterCardBtn');
const payPalBtn = document.getElementById('payPalBtn');
const mySubmit = document.getElementById('mySubmit');
const subResult = document.getElementById('subResult');
const paymentResult = document.getElementById('paymentResult');

mySubmit.onclick = function() {
  if (myCheckBox.checked) {
    subResult.textContent = 'You have agreed to the terms and conditions';
  } else {
    subResult.textContent = 'You have not agreed to the terms and conditions';
  }

  if (visaBtn.checked) {
    paymentResult.textContent = 'You have chosen Visa';
  } else if (masterCardBtn.checked) {
    paymentResult.textContent = 'You have chosen MasterCard';
  } else if (payPalBtn.checked) {
    paymentResult.textContent = 'You have chosen PayPal';
  } else {
    paymentResult.textContent = 'You have not chosen a payment method';
  }
   
}