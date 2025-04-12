// form-validation.js
export function validateForm() {
    let isValid = true;
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');

    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';

    if (!nameInput.value.trim()) {
        nameError.textContent = 'Please enter your name.';
        isValid = false;
    }

    if (!emailInput.value.trim()) {
        emailError.textContent = 'Please enter your email address.';
        isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    if (!messageInput.value.trim()) {
        messageError.textContent = 'Please enter your message.';
        isValid = false;
    }

    return isValid;
}

function isValidEmail(email) {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(email);
}
