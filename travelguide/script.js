// Toggle Navigation Menu on Small Screens
const menuBtn = document.getElementById('menu-btn');
const navList = document.querySelector('nav ul');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        navList.classList.toggle('active');
    });
}

// Search Functionality
const searchForm = document.getElementById('search-form');
if (searchForm) {
    searchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const query = document.getElementById('search-input').value;
        // Implement search functionality or redirect to search results page
        alert(`Searching for: ${query}`);
        // Example: window.location.href = `search.html?q=${encodeURIComponent(query)}`;
    });
}

// Login Button Navigation
const loginBtn = document.getElementById('login-btn');
if (loginBtn) {
    loginBtn.addEventListener('click', function () {
        window.location.href = 'login.html';
    });
}

// Register Button Navigation
const registerBtn = document.getElementById('register-btn');
if (registerBtn) {
    registerBtn.addEventListener('click', function () {
        window.location.href = 'register.html';
    });
}

// Book Now Buttons Navigation
const bookNowButtons = document.querySelectorAll('.book-now-btn');
bookNowButtons.forEach((button) => {
    button.addEventListener('click', function () {
        const destination = this.parentElement.querySelector('h3').innerText;
        // Pass destination information to booking page via URL parameters
        window.location.href = `booking.html?destination=${encodeURIComponent(destination)}`;
    });
});

// Handle Login Form Submission
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        // Implement authentication logic here
        alert(`Welcome back, ${email.split('@')[0]}!`);
        window.location.href = 'index.html';
    });
}

// Handle Registration Form Submission
const registerForm = document.getElementById('register-form');
if (registerForm) {
    registerForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('reg-email').value;
        const password = document.getElementById('reg-password').value;
        // Implement registration logic here
        alert(`Account created for ${name}! Please log in.`);
        window.location.href = 'login.html';
    });
}

// Handle Booking Form Submission
const bookingForm = document.getElementById('booking-form');
if (bookingForm) {
    bookingForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const destination = document.getElementById('destination').value;
        const travelDate = document.getElementById('travel-date').value;
        const passengers = document.getElementById('passengers').value;
        // Implement booking logic here
        alert(`Booking confirmed for ${passengers} passenger(s) to ${destination} on ${travelDate}!`);
        window.location.href = 'index.html';
    });
}

// Handle Contact Form Submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const message = document.getElementById('contact-message').value;
        // Implement contact form submission logic here
        alert(`Thank you, ${name}! Your message has been received.`);
        window.location.href = 'index.html';
    });
}
