let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

document.querySelector('.clkbtn').addEventListener('click', function() {
    const email = document.querySelector('.login-box .email').value;
    const password = document.querySelector('.login-box .password').value;

   
    if (email === '' || password === '') {
        alert('Please fill in both email and password');
    } else {
        alert(`Login successful with email: ${email}`);
        window.location.href = 'fishfish.html';
    }
});

signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
    
});

login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});

document.querySelector('.signup-box .clkbtn').addEventListener('click', function() {
    const name = document.querySelector('.signup-box .name').value;
    const email = document.querySelector('.signup-box .email').value;
    const password = document.querySelector('.signup-box .password').value;
    const confirmPassword = document.querySelectorAll('.signup-box .password')[1].value;

   
    if (name === '' || email === '' || password === '' || confirmPassword === '') {
        alert('Please fill in all the fields');
    } else if (password !== confirmPassword) {
        alert('Passwords do not match');
    } else {
        alert(`Registration successful for ${name} with email: ${email}`);
        window.location.href = 'register.html';
    }
});