//Getting dynamic date on footer
let yearElement = null;
let videoIframe = null;
const year = new Date();
const videoApspectRatio = 600/440;

//

window.addEventListener('load', () => {
    yearElement = document.getElementById("currentYear");
    yearElement.innerText = year.getFullYear();
    
    document.getElementById('MenuButton').addEventListener('click', function () {
        document.getElementById('NavMenu').classList.toggle('active');
    });

    // Contact Form Validation
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const errorElement = document.getElementById('form-error');

      // Reset previous errors
      errorElement.textContent = '';

      // Validation
      if (!name || !email || !message) {
        errorElement.textContent = 'All fields are required';
        return;
      }

      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        errorElement.textContent = 'Please enter a valid email address';
        return;
      }

      // If validation passes (in a real project, you would submit to a server here)
      alert('Thank you for your message! We will get back to you soon.');
      this.reset();
    });
  }
})


