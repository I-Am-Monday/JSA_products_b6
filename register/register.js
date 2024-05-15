document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Get user input
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Save user data to localStorage
        const userData = {
            email: email,
            password: password
        };

        localStorage.setItem('userData', JSON.stringify(userData));

        // Optionally, you can redirect the user to another page after registration
        // window.location.href = 'login.html'; // Redirect to login page
    });
});