const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const usernameError = document.querySelector('.username-error');
const emailError = document.querySelector('.email-error');
const passwordError = document.querySelector('.password-error');
const signUpBtn = document.querySelector('#sign-up');
const errorMessages = document.querySelectorAll('.error');
const clientName = document.querySelector('#client-name');



// username validation
username.addEventListener('focusout', () => {
  if(username.value.includes(' ')){
    usernameError.innerText = 'Username cannot include spaces'
  } else if(!username.value.match(/^[a-zA-Z_]+$/)){
    usernameError.innerText = 'Username cannot include symbols and numbers'
  } else if(username.value.length > 15){
    usernameError.innerText = 'Username must be 15 characters or less'
  }else {
    usernameError.innerText = '';
  }
});


// email validation
email.addEventListener('focusout', () => {
  if(!email.value.includes('@') || !email.value.includes('.')){
    emailError.innerText = 'Please enter a valid email address'
  } else {
    emailError.innerText = '';
  }
});

// password validation
function hasUpperCase(str) {
    return str.toLowerCase() != str;
}

function hasNumber(myString) {
  return /\d/.test(myString);
}

password.addEventListener('focusout', () => {
  if(password.value.match(/^[a-zA-Z_]+$/) || !hasNumber(password.value) || !hasUpperCase(password.value)){
    passwordError.innerText = 'Password must include at least a symbol, a number and an uppercase letter'
  } else if(password.value.length < 8){
    passwordError.innerText = 'Password must be 8 characters or more'
  }else {
    passwordError.innerText = '';
  }
});

// function to check all validations on submit
signUpBtn.addEventListener('click', () => {
  errorMessages.forEach(errorMessage => {
    if(errorMessage.innerText === ''){
      location.href = 'public/success.html'
    }
  })
});

