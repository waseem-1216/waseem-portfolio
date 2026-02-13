document.addEventListener("DOMContentLoaded", function () {

  // Typing Effect
  const roles = [
    "DevOps Engineer",
    "Implementation Specialist",
    "CI/CD Automation Enthusiast",
    "Linux & Docker Practitioner"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  const typingElement = document.getElementById("typing");

  function typeEffect() {
    if (charIndex < roles[roleIndex].length) {
      typingElement.textContent += roles[roleIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeEffect, 80);
    } else {
      setTimeout(eraseEffect, 1500);
    }
  }

  function eraseEffect() {
    if (charIndex > 0) {
      typingElement.textContent =
        roles[roleIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseEffect, 40);
    } else {
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeEffect, 500);
    }
  }

  typeEffect();

  // Scroll Reveal
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  });

  reveals.forEach(r => observer.observe(r));

});
