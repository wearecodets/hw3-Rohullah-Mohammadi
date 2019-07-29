const form = document.querySelector('.form');
const modal = document.querySelector('.modal');
const checkout = document.querySelector('.checkout');
const submit = document.querySelector('.form__pay');
const textMessage = document.querySelector('.checkout__result-title');
const descriptionText = document.querySelector('.checkout__result-description');
const closeButton = document.querySelector('.checkout__result-close');
const isSuccess = true;
const isfailed = false;
// console.log(closeButton);

const modalFull = 'modal--full';
const checkSuccess = 'checkout--success';
const checkFailed = 'checkout--failed';
const checkFinished = 'checkout--finsished';

// console.log(submit);

function doSubmit(e) {
  e.preventDefault();
  const userName = form.name.value;
  const emailValue = form.email.value;
  modal.classList.add('modal--full');
  setTimeout(function() {
    checkout.classList.toggle('checkout--finished');
    if (isSuccess === true) {
      checkout.classList.add('checkout--success');
      textMessage.textContent = `Thanks ${userName}`;
      descriptionText.textContent =
        'We have received your payment. Please check your inbox for a receipt.';
    } else {
      checkout.classList.add('checkout--failed');
      textMessage.textContent = 'Payment Rejected.';
      descriptionText.textContent = `Your transaction could not be processed.We have sent you an email at ${emailValue}with the details.`;
    }
  }, 3000);
}

submit.addEventListener('click', doSubmit);
closeButton.addEventListener('click', function() {
  modal.classList.remove(modalFull);
});
