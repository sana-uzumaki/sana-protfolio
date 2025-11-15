// 🌟 Smooth scroll to top on page refresh
window.addEventListener('load', function() {
  setTimeout(function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, 50);
});

document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  var menuToggle = document.getElementById("menu-toggle");
  var menu = document.getElementById("menu");

  menuToggle.onclick = function() {
    menu.className = menu.className === "active" ? "" : "active";
  };

  // Smooth scroll for menu links
  var links = menu.getElementsByTagName("a");
  var header = document.querySelector('header');

  for (var i = 0; i < links.length; i++) {
    links[i].onclick = function(e) {
      e.preventDefault();
      var targetId = this.getAttribute("href").substring(1);
      var targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - header.offsetHeight,
          behavior: "smooth"
        });
      }
      // Close mobile menu after click
      if (window.innerWidth <= 768) menu.className = "";
    };
  }

  // Initialize EmailJS
  emailjs.init('ffrUFX5iYhWpk6xcr');
  const btn = document.getElementById('button');

  document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = ' __ejs-test-mail-service'; // make sure this matches your EmailJS template

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Send Email';
        alert('Sent!');
        this.reset(); // reset form after submission
      }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
      });
  });

  // ----------------------------------------------------
  // ✅ NEW: NAME TYPING ANIMATION + BLINKING BAR
  // ----------------------------------------------------

  const textElement = document.getElementById("typed-name");
  const nameText = "Sanantheshwaran";
  let index = 0;

  function typeName() {
    if (index < nameText.length) {
      textElement.textContent += nameText.charAt(index);
      index++;
      setTimeout(typeName, 150);  // slow typing speed (C)
    }
  }

  typeName(); // start animation

});
