// script.js

function addToCart(productName, price) {
    // Implement your add to cart logic here
    console.log(`Added ${productName} to cart. Price: $${price}`);
}

function toggleLogin() {
    var loginSection = document.getElementById('login');
    loginSection.style.display = (loginSection.style.display === 'none' || loginSection.style.display === '') ? 'block' : 'none';
}

function validateLogin() {
    // Implement your login validation logic here
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Example: Basic validation
    if (username === 'user' && password === 'pass') {
        alert('Login successful!');
        toggleLogin(); // Hide login section on successful login
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

// Function to add product to cart
function addToCart(productName, price) {
    // Your add to cart logic here
    alert('Added ' + productName + ' to cart. Price: $' + price);
}