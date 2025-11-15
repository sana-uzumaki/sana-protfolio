// Scroll to top on refresh
window.addEventListener('load', function() {
  setTimeout(function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
      var id = this.getAttribute("href").substring(1);
      var el = document.getElementById(id);

      window.scrollTo({
        top: el.offsetTop - header.offsetHeight,
        behavior: "smooth"
      });

      if (window.innerWidth <= 768) menu.className = "";
    };
  }

  // Typing animation
  var textElement = document.getElementById("typedName");
  var nameText = "Sanantheshwaran";
  var index = 0;

  function typeName() {
    if (index < nameText.length) {
      textElement.textContent += nameText.charAt(index);
      index++;
      setTimeout(typeName, 140);
    } else {
      // stop blinking slowly
      document.querySelector(".cursor").style.animation = "none";
      document.querySelector(".cursor").style.opacity = "0.5";
    }
  }

  typeName();

  // EmailJS
  emailjs.init('ffrUFX5iYhWpk6xcr');
  const btn = document.getElementById('button');

  document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    btn.value = 'Sending...';

    emailjs.sendForm('default_service', '__ejs-test-mail-service', this)
      .then(() => {
        btn.value = 'Send Email';
        alert('Sent!');
        this.reset();
      }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
      });
  });

});
