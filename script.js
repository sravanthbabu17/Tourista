let currentSlide = 0;

const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slidesContainer = document.querySelector('.slides');

function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

function showNextSlide() {
    showSlide(currentSlide + 1);
}

  function redirectToLogin() {
    window.location.href = 'login.html';
  }
  function redirectToSignup() {
    window.location.href = 'signup.html';
  }
  function validateForm(event) {
    event.preventDefault();

    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(fullName)) {
        alert("Full Name should not contain symbols or numbers.");
        return false;
    }

    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{10,}$/;
    if (!passwordRegex.test(password)) {
        alert("Password must be at least 10 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one symbol.");
        return false;
    }

    alert("Signup successful!");
    return true;
}
function validateLoginForm(event) {
    event.preventDefault();

    var email = document.getElementById('loginEmail').value;
    var password = document.getElementById('loginPassword').value;
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    if (password === "") {
        alert("Password cannot be empty.");
        return false;
    }

    alert("Login successful!");
    return true;
}

  