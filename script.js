var form = document.getElementById("form");
var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var password2 = document.getElementById("password2");
//Show input error message
function showError(input, message) {
    var formControl = input.parentElement;
    formControl.className = "form-control error";
    var small = formControl.querySelector("small");
    small.innerText = message;
}
// Show success outline
function showSuccess(input) {
    var formControl = input.parentElement;
    formControl.className = "form-control success";
}
//Check email is valid
function checkEmail(input) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    }
    else {
        showError(input, "Email is not vaild");
    }
}
//check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === "") {
            showError(input, "".concat(getFieldName(input), " is required"));
        }
        else {
            showSuccess(input);
        }
    });
}
//check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, "".concat(getFieldName(input), " must be at least ").concat(min, " characters"));
    }
    else if (input.value.length > max) {
        showError(input, "".concat(getFieldName(input), " must be less than ").concat(max, " characters"));
    }
    else {
        showSuccess(input);
    }
}
//check passowrds match
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "Passwords do not match ");
    }
}
//Get fieldname
function getFieldName(input) {
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
