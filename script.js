document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    document.querySelectorAll('.error-message').forEach(element => {
        element.style.display = 'none';
    });

    
    const name = document.getElementById('name').value.trim();
    if (name === '') {
        isValid = false;
        document.getElementById('nameError').textContent = 'Name is required.';
        document.getElementById('nameError').style.display = 'block';
    }

    
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        isValid = false;
        document.getElementById('emailError').textContent = 'Email is required.';
        document.getElementById('emailError').style.display = 'block';
    } else if (!emailPattern.test(email)) {
        isValid = false;
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        document.getElementById('emailError').style.display = 'block';
    }

    // Validate message
    const message = document.getElementById('message').value.trim();
    if (message === '') {
        isValid = false;
        document.getElementById('messageError').textContent = 'Message is required.';
        document.getElementById('messageError').style.display = 'block';
    }

    if (isValid) {
        document.getElementById('successMessage').textContent = 'Thank you for contacting us!';
        document.getElementById('successMessage').style.display = 'block';
        document.getElementById('contactForm').reset();
    }
});
