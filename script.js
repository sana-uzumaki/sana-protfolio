// Menu toggle
var menuToggle = document.getElementById("menu-toggle");
var menu = document.getElementById("menu");

menuToggle.onclick = function() {
  if (menu.className === "active") {
    menu.className = "";
  } else {
    menu.className = "active";
  }
};

// Smooth scroll (simple version)
var links = menu.getElementsByTagName("a");

for (var i = 0; i < links.length; i++) {
  links[i].onclick = function(e) {
    e.preventDefault();
    var targetId = this.getAttribute("href").substring(1);
    var targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 50,
        behavior: "smooth"
      });
    }

    // close menu in mobile
    if (window.innerWidth <= 768) {
      menu.className = "";
    }
  };
}

emailjs.init('ffrUFX5iYhWpk6xcr');
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = '__ejs-test-mail-service';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
