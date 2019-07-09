// -------- PSEUDOCODE --------
//
// 1. Apply button is clicked
// 2. Change its label
// 3. Validate the coupon
//      a. Upper case the code
//      b. Define what's valid/invalid
//      c. Check code against those
//      d. Write the toast message
// 4. Fake a 1.5s delay
// 5. Add success/failed class to toast
// 6. Add success/failed class to voucher box
// 7. Change button label back
// 8. Start a 5s delay
// 9. Remove all classes on toast
// 10. Remove all classes on voucher box

const form = document.querySelector('.form');
const toast = document.querySelector('.toast');
const close = document.querySelector('.toast__close');
const message = document.querySelector('.toast__message');
const voucher = document.querySelector('.form__voucher');

const voucherSuccess = 'form__voucher--success';
const voucherFailed = 'form__voucher--failed';
const toastSuccess = 'toast--success';
const toastFailed = 'toast--failed';

let isValid = true;

function validateCode(codeRaw) {
  const code = codeRaw.toUpperCase();
  const validCode = ['CTW20OFF', 'ROSHANRUSH'];
  const invalidCode = ['CTW123', 'MAMPANGMADNESS'];

  if (validCode.includes(code)) {
    isValid = true;
    message.textContent = 'Voucher successfully applied';
  } else if (invalidCode.includes(code)) {
    isValid = false;
    message.textContent = 'Voucher code is expired. Please try again.';
  } else {
    isValid = false;
    message.textContent = "That voucher doesn't exist.";
  }
}

function closeToast() {
  toast.classList.remove(toastSuccess, toastFailed);
  voucher.classList.remove(voucherSuccess, voucherFailed);
}

close.addEventListener('click', closeToast);

form.voucherButton.addEventListener('click', function(e) {
  e.preventDefault();
  this.textContent = 'Applying...';
  validateCode(form.voucher.value);
  setTimeout(() => {
    this.textContent = 'Apply Code';
    toast.classList.add(isValid ? toastSuccess : toastFailed);
    voucher.classList.add(isValid ? voucherSuccess : voucherFailed);
  }, 1500);
  setTimeout(closeToast, 5000);
});
