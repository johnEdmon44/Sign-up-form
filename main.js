const password = document.querySelector('#password');
const cPassword = document.querySelector('#confirmPassword');
const submit = document.querySelector('#submit');
const errorMessage = document.querySelector('.errorMessage');
const test = document.querySelector('#test');
const error = document.querySelector('.error')

submit.addEventListener('click', function(e) {
  if(password.value !== cPassword.value) {
   errorMessage.textContent = '*Password do not match';
   password.classList.toggle('error');
   cPassword.classList.toggle('error');
   e.preventDefault();
  }
});
