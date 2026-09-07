const openButton = document.getElementById("openSurprise");
const sections = document.querySelectorAll(".reveal");
const particles = document.getElementById("particles");

function createParticles() {
  const count = window.innerWidth < 600 ? 18 : 30;

  for (let i = 0; i < count; i++) {
    const p = document.createElement("span");
    p.className = "particle";
    p.style.left = `${Math.random() * 100}%`;
    p.style.animationDuration = `${8 + Math.random() * 12}s`;
    p.style.animationDelay = `${Math.random() * -15}s`;
    p.style.opacity = `${0.25 + Math.random() * 0.6}`;
    particles.appendChild(p);
  }
}

createParticles();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.12 }
);

sections.forEach((section) => observer.observe(section));

openButton.addEventListener("click", () => {
  document.body.classList.add("opened");
  const firstSection = document.querySelector(".intro");

  firstSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});
