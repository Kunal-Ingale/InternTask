document.getElementById('loginForm').addEventListener('submit',function(e) {
    e.preventDefault();

    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let isValid = true;

    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailReg.test(email)){
        document.getElementById('emailError').textContent = "Enter a valid email address";
        isValid = false;
    }
    if (password.length < 8) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long.';
        isValid = false;
    }
    if (isValid) {
        alert('Form submitted successfully!');
        // You can add backend integration here
    }
})