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
