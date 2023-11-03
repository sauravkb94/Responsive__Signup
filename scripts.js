let signupform = document.querySelector(".my-form");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password");

signupform.addEventListener("submit", (e) => {
    e.preventDefault();
  
    console.log("Email:", email.value);
    console.log("Password:", password.value);
});

function oncharge() {
    if (confirmPassword.value === password.value){
        confirmPassword.setCustomvalidity("");
        } else {
            confirmPassword.setCustomvalidity("Passwords is not valid!");
        }
}

password.addEventListener("change", oncharge);
confirmPassword.addEventListener("change", oncharge);