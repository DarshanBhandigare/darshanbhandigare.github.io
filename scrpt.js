// Particle canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let W,
  H,
  particles = [];

function resize() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

class Particle {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * W;
    this.y = Math.random() * H;
    this.r = Math.random() * 1.2 + 0.3;
    this.vx = (Math.random() - 0.5) * 0.3;
    this.vy = (Math.random() - 0.5) * 0.3;
    this.alpha = Math.random() * 0.5 + 0.1;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(124,111,247,${this.alpha})`;
    ctx.fill();
  }
}

for (let i = 0; i < 120; i++) particles.push(new Particle());

function animParticles() {
  ctx.clearRect(0, 0, W, H);
  particles.forEach((p) => {
    p.update();
    p.draw();
  });
  // Connect nearby
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d < 100) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(124,111,247,${0.06 * (1 - d / 100)})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(animParticles);
}
animParticles();

// Custom cursor
const cur = document.getElementById("cursor");
const ring = document.getElementById("cursor-ring");
let mx = 0,
  my = 0,
  rx = 0,
  ry = 0;
document.addEventListener("mousemove", (e) => {
  mx = e.clientX;
  my = e.clientY;
});
function animCursor() {
  cur.style.left = mx + "px";
  cur.style.top = my + "px";
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + "px";
  ring.style.top = ry + "px";
  requestAnimationFrame(animCursor);
}
animCursor();
document.querySelectorAll("a, button").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cur.style.width = "20px";
    cur.style.height = "20px";
    ring.style.width = "50px";
    ring.style.height = "50px";
  });
  el.addEventListener("mouseleave", () => {
    cur.style.width = "12px";
    cur.style.height = "12px";
    ring.style.width = "36px";
    ring.style.height = "36px";
  });
});

// Scroll reveal
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Skill bars
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.querySelectorAll(".skill-bar-fill").forEach((bar) => {
          bar.style.width = bar.dataset.width + "%";
        });
      }
    });
  },
  { threshold: 0.2 }
);
document.querySelectorAll("#skills").forEach((el) => skillObserver.observe(el));

// Mobile menu toggle
const hamburger = document.querySelector(".nav-hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Close menu when clicking a link
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
  }
});
