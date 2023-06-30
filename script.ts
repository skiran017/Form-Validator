const form = document.getElementById("form");
const username = document.getElementById("username") as HTMLInputElement | null;
const email = document.getElementById("email") as HTMLInputElement | null;
const password = document.getElementById("password") as HTMLInputElement | null;
const password2 = document.getElementById("password2") as HTMLInputElement | null;

//Show input error message
function showError(input: Element, message: string) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Show success outline
function showSuccess(input: Element) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
//Check email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not vaild");
  }
}

//check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

//check input length
function checkLength(input: HTMLInputElement, min: number, max: number) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

//check passowrds match
function checkPasswordsMatch(input1: HTMLInputElement, input2: HTMLInputElement) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match ");
  }
}

//Get fieldname
function getFieldName(input: HTMLInputElement) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event Listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, password2);

  // if (username.value == "") {
  //   showError(username, "Username is required");
  // } else {
  //   showSuccess(username);
  // }

  // if (email.value == "") {
  //   showError(email, "Email is required");
  // } else if (!isVaildEmail(email.value)) {
  //   showError(email, "Email is not vaild");
  // } else {
  //   showSuccess(email);
  // }
  // if (password.value == "") {
  //   showError(password, "Password is required");
  // } else {
  //   showSuccess(password);
  // }
  // if (password2.value == "") {
  //   showError(password2, "Password 2 is required");
  // } else {
  //   showSuccess(password2);
  // }
});
