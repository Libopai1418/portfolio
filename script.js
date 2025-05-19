// Scroll-activated nav link highlighting
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (pageYOffset >= top) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// Smooth scroll (for browsers not supporting CSS scroll-behavior)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Handle contact form submission
document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for reaching out! I’ll get back to you soon.");
  this.reset();
});


  const menuToggle = document.querySelector('.menu-toggle');
  const navbar = document.querySelector('.navbar');

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navbar.classList.toggle('active');
  });


  //form validation

  
document.getElementById('contactForm').addEventListener('submit', function (e) {
  let valid = true;

  const name = document.getElementById('username');
  const email = document.getElementById('email');
  const contact = document.getElementById('contact');
  const message = document.getElementById('message');

  const errorName = document.getElementById('error-username');
  const errorEmail = document.getElementById('error-email');
  const errorContact = document.getElementById('error-contact');
  const errorMessage = document.getElementById('error-message');

  // Reset messages
  errorName.textContent = '';
  errorEmail.textContent = '';
  errorContact.textContent = '';
  errorMessage.textContent = '';

  // Name
  if (name.value.trim() === '') {
    errorName.textContent = 'Name is required.';
    valid = false;
  }

  // Email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    errorEmail.textContent = 'Enter a valid email address.';
    valid = false;
  }

  // Contact (optional but must be digits if filled)
  const phonePattern = /^[0-9]{7,15}$/;
  if (contact.value && !phonePattern.test(contact.value)) {
    errorContact.textContent = 'Enter a valid contact number (7–15 digits).';
    valid = false;
  }

  // Message
  if (message.value.trim().length < 10) {
    errorMessage.textContent = 'Message should be at least 10 characters.';
    valid = false;
  }

  if (!valid) {
    e.preventDefault();
  }
});


