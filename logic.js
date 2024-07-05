"use strict"

const nodeForm = document.querySelector("#sign_up");
const nodePassword = document.querySelector("#user_password");
const nodePasswordConfirm = document.querySelector("#user_password_confirm");
const nodePasswordLabel = document.querySelector(`form label[for="user_password"]`);

nodePassword.addEventListener("input", (event) => {
    if (nodePassword.validity.patternMismatch) {
        nodePasswordLabel.style.setProperty(
            "--content",`"*Password is too weak."`
        );
        nodePassword.setCustomValidity(
            "Password must have 1 digit from 0-9, 1 lowercase & 1 uppercase letter, 1 special character, no spaces, & be 8-16 characters long."
        );
    } else {
        nodePasswordLabel.style.setProperty("--content",`""`);
        nodePassword.setCustomValidity("");
    }
});

nodePasswordConfirm.addEventListener("input", (event) => {
    if (nodePasswordConfirm.value !== nodePassword.value) {
        nodePasswordLabel.style.setProperty(
            "--content", `"*Passwords do not match."`
        );
        nodePasswordConfirm.setCustomValidity("Passwords do not match.");
    } else {
        nodePasswordLabel.style.setProperty("--content",`""`);
        nodePasswordConfirm.setCustomValidity("");
    }
});

nodeForm.addEventListener("submit", (event) => {
    if (!nodePasswordConfirm.checkValidity()) {
        event.preventDefault();
        nodePasswordConfirm.reportValidity();
    }
});