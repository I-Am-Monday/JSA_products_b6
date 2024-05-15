
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Get user input
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Retrieve user data from localStorage
        const userData = JSON.parse(localStorage.getItem('userData'));

        // Check if user exists and credentials match
        if (userData && userData.email === email && userData.password === password) {
          
            window.location.href = '../index.html';
            
        } else {
            // Failed login
            alert('Invalid email or password. Please try again.');
        }
    });
});