// Password validation
document.querySelector(".login-form button").addEventListener("click", function() {
    const passwordInput = document.querySelector(".password-input");
    const password = passwordInput.value;
    const correctPassword = "secure123"; // Replace with your desired password

    if (password === correctPassword) {
        alert("Access Granted");
    } else {
        alert("Incorrect Password");
        passwordInput.value = ""; // Clear the input
    }
});

