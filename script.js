document.addEventListener("DOMContentLoaded", function() {

  // Cursor Glow
  const glow = document.querySelector(".cursor-glow");
  if (glow) {
    document.addEventListener("mousemove", function(e) {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    });
  }

  // Scroll Reveal
  const reveals = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    });

    reveals.forEach(r => observer.observe(r));
  }

  // Contact Form
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Message Sent Successfully 🚀");
      form.reset();
    });
  }

});
