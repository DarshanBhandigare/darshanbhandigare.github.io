import { useEffect, useRef, useState } from "react";

const skills = [
  { icon: "⚙️", name: "C / C++", level: "Core Language", width: 80 },
  { icon: "🐍", name: "Python", level: "Scripting & AI", width: 65 },
  { icon: "🌐", name: "HTML CSS & JS", level: "Web Development", width: 75 },
  { icon: "🧠", name: "Data Structures", level: "Algorithms & Problem Solving", width: 70 },
  { icon: "🤖", name: "Generative AI", level: "Oracle Certified", width: 60 },
  { icon: "🔧", name: "Git & GitHub", level: "Version Control", width: 72 },
  { icon: "☕", name: "Java", level: "Object-Oriented Programming", width: 55 },
];

const projects = [
  {
    type: "Fix My Itch by Razorpay",
    title: "InvoVault",
    description:
      "A secure AI invoice management platform designed for freelancers and micro-SMEs. Features dynamic dashboards, client management, and automated PDF generation.",
    tags: ["Next.js 15", "Supabase", "Tailwind v4", "TypeScript"],
    live: "https://invovault.vercel.app/",
    github: "https://github.com/DarshanBhandigare/InvoVault",
  },
  {
    type: "Web App",
    title: "Paletto",
    description:
      "A responsive web application that generates clean, useful color palettes for design inspiration and frontend projects. Built for designers and developers alike.",
    tags: ["HTML", "CSS", "JavaScript", "Vercel"],
    live: "https://paletto-color-generator.vercel.app/",
    github: "https://github.com/darshanbhandigare/paletto-color-generator",
  },
  {
    type: "Portfolio",
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase skills, projects, and certifications. Designed and built from scratch with HTML, CSS and JS, deployed on GitHub Pages.",
    tags: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    live: "https://darshanbhandigare.github.io/",
    github: "https://github.com/DarshanBhandigare/darshanbhandigare.github.io",
  },
];

const certifications = [
  {
    color: "var(--accent2)",
    name: "Oracle Cloud Infrastructure 2025 - Generative AI Professional",
    issuer: "Oracle",
    year: "2025",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=E271C625D729BC583FD445257FB25C0DD47CED1CDB3B73675C885EDD4680DE49",
    label: "View Credential ->",
  },
  {
    color: "var(--accent3)",
    name: "Artificial Intelligence Fundamentals",
    issuer: "IBM / Credly",
    year: "2025",
    link: "https://www.credly.com/badges/e5dfd0f6-cb8b-4b20-8dab-dc0ea95a2f70/linked_in_profile",
    label: "View Credential ->",
  },
  {
    color: "var(--green)",
    name: "Web Development Fundamentals",
    issuer: "IBM / Credly",
    year: "2025",
    link: "https://www.credly.com/badges/7d8f1ef0-1ac2-401e-83af-e566c59e7a8b",
    label: "View Credential ->",
  },
  {
    color: "var(--accent)",
    name: "Deloitte Job Simulation - Technology Virtual Internship",
    issuer: "Deloitte / The Forage",
    year: "2025",
    link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_68f110ef8e645218889eb542_1760631026251_completion_certificate.pdf",
    label: "View Certificate ->",
  },
];

function SectionHeader({ number, title }) {
  return (
    <div className="section-header reveal">
      <span className="section-number">{number}</span>
      <h2 className="section-title">{title}</h2>
      <div className="section-line"></div>
    </div>
  );
}

function SkillCard({ icon, name, level, width }) {
  return (
    <div className="skill-card reveal">
      <div className="skill-icon">{icon}</div>
      <div className="skill-name">{name}</div>
      <div className="skill-level">{level}</div>
      <div className="skill-bar">
        <div className="skill-bar-fill" data-width={width}></div>
      </div>
    </div>
  );
}

function ProjectCard({ type, title, description, tags, live, github }) {
  return (
    <div className="project-card reveal">
      <div className="project-card-top">
        <span className="project-type">{type}</span>
        <div className="project-links">
          <a href={live} target="_blank" rel="noreferrer">
            Live {"->"}
          </a>
          <a href={github} target="_blank" rel="noreferrer">
            GitHub {"->"}
          </a>
        </div>
      </div>
      <div className="project-body">
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-tags">
          {tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function CertificationItem({ color, name, issuer, year, link, label }) {
  return (
    <div className="cert-item">
      <div className="cert-left">
        <div className="cert-dot" style={{ background: color }}></div>
        <div>
          <div className="cert-name">{name}</div>
          <div className="cert-issuer">{issuer}</div>
        </div>
      </div>
      <div className="cert-right">
        <span className="cert-year">{year}</span>
        <a href={link} target="_blank" rel="noreferrer" className="cert-link">
          {label}
        </a>
      </div>
    </div>
  );
}

export default function App() {
  const canvasRef = useRef(null);
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext("2d");
    let width = 0;
    let height = 0;
    let animationFrame = 0;
    let particles = [];

    const setSize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.r = Math.random() * 1.2 + 0.3;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.alpha = Math.random() * 0.5 + 0.1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
          this.reset();
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(124,111,247,${this.alpha})`;
        ctx.fill();
      }
    }

    const buildParticles = () => {
      particles = Array.from({ length: 120 }, () => new Particle());
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      for (const particle of particles) {
        particle.update();
        particle.draw();
      }

      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(124,111,247,${0.06 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrame = window.requestAnimationFrame(animate);
    };

    setSize();
    buildParticles();
    animate();

    window.addEventListener("resize", setSize);

    return () => {
      window.removeEventListener("resize", setSize);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return undefined;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let frame = 0;

    const moveCursor = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const animateCursor = () => {
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      frame = window.requestAnimationFrame(animateCursor);
    };

    const handlePointer = (event) => {
      const interactive = event.target.closest("a, button");
      if (!interactive) return;
      cursor.style.width = "20px";
      cursor.style.height = "20px";
      ring.style.width = "50px";
      ring.style.height = "50px";
    };

    const resetPointer = (event) => {
      const interactive = event.target.closest("a, button");
      if (!interactive) return;
      cursor.style.width = "12px";
      cursor.style.height = "12px";
      ring.style.width = "36px";
      ring.style.height = "36px";
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("pointerover", handlePointer);
    window.addEventListener("pointerout", resetPointer);
    animateCursor();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("pointerover", handlePointer);
      window.removeEventListener("pointerout", resetPointer);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal");
    const skillCards = document.querySelectorAll(".skill-card");

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    const skillObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const bars = entry.target.querySelectorAll(".skill-bar-fill");
          bars.forEach((bar) => {
            bar.style.width = `${bar.dataset.width}%`;
          });
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2 },
    );

    revealItems.forEach((item) => revealObserver.observe(item));
    skillCards.forEach((item) => skillObserver.observe(item));

    return () => {
      revealObserver.disconnect();
      skillObserver.disconnect();
    };
  }, []);

  return (
    <>
      <canvas id="canvas" ref={canvasRef}></canvas>
      <div id="cursor" ref={cursorRef}></div>
      <div id="cursor-ring" ref={ringRef}></div>

      <nav>
        <div className="nav-logo">DB.portfolio</div>
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => setMenuOpen(false)}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#certifications" onClick={() => setMenuOpen(false)}>
              Certs
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
        <button
          className={`nav-hamburger ${menuOpen ? "active" : ""}`}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((value) => !value)}
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <section id="hero">
        <div className="hero-left">
          <div className="hero-tag">Available for Opportunities</div>
          <div className="hero-terminal">
            <span className="prompt">~/darshan</span> <span className="cmd">$ </span>
            <span className="typewriter">cout&lt;&lt;"Hello! My name is Darshan Bhandigare"&lt;&lt;endl;</span>
          </div>
          <h1 className="hero-name">
            Darshan
            <br />
            <span>Bhandigare</span>
          </h1>
          <p className="hero-sub">
            // Aspiring Software Developer
            <br />
            // Building with C/C++, DSA & Web Dev
            <br />
            // B.Sc. IT @ D.G. Ruparel College, Mumbai
          </p>
          <div className="hero-ctas">
            <a href="#projects" className="btn btn-primary">
              View Projects {"->"}
            </a>
            <a
              href="https://www.linkedin.com/in/darshan-bhandigare/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              Connect on LinkedIn
            </a>
            <a href="mailto:darshanbhandigare9@gmail.com" className="btn btn-outline">
              Get In Touch
            </a>
          </div>
        </div>

        <div className="hero-photo">
          <div className="hero-photo-ring"></div>
          <img src="https://i.ibb.co/JFKF11zd/1000034369.jpg" alt="Darshan Bhandigare" />
          <div className="hero-photo-tag">Darshan.jpg</div>
        </div>

        <div className="hero-scroll">Scroll to explore</div>
        <div className="hero-counter">
          <strong>4</strong>
          <span>Certifications</span>
          <strong style={{ marginTop: "1rem" }}>3</strong>
          <span>Live Projects</span>
        </div>
      </section>

      <section id="about">
        <div>
          <SectionHeader number="01" title="About" />
          <div className="about-text">
            <p>
              I&apos;m a <strong>first-year B.Sc. Information Technology student</strong> at D.G. Ruparel College of Arts,
              Science and Commerce in Mumbai - building my foundation one commit at a time.
            </p>
            <p>
              My focus is on <strong>core technical proficiency</strong>: hands-on projects in <strong>C/C++</strong>,
              data structures, algorithms, and web development. I believe in learning by building - every project is a
              step forward.
            </p>
            <p>
              I&apos;m passionate about <strong>continuous learning</strong> and actively explore emerging fields like
              <strong> Generative AI</strong>, having already earned industry certifications from Oracle and IBM.
            </p>
          </div>
        </div>
        <div className="about-stats reveal">
          <div className="stat-box">
            <div className="stat-num">2025</div>
            <div className="stat-label">Year Started</div>
          </div>
          <div className="stat-box">
            <div className="stat-num" style={{ color: "var(--accent3)" }}>
              4+
            </div>
            <div className="stat-label">Certifications</div>
          </div>
          <div className="stat-box">
            <div className="stat-num" style={{ color: "var(--accent2)" }}>
              3
            </div>
            <div className="stat-label">Live Projects</div>
          </div>
          <div className="stat-box">
            <div className="stat-num" style={{ color: "var(--green)" }}>
              inf
            </div>
            <div className="stat-label">Learning Mode</div>
          </div>
        </div>
      </section>

      <section id="skills">
        <div style={{ padding: 0 }}>
          <SectionHeader number="02" title="Skills" />
          <div className="skills-grid">
            {skills.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      </section>

      <section id="projects">
        <SectionHeader number="03" title="Projects" />
        <div className="projects-layout">
          <div className="projects-featured">
            <ProjectCard {...projects[0]} />
            <ProjectCard {...projects[1]} />
          </div>
          <div className="projects-rail">
            <ProjectCard {...projects[2]} />
          </div>
        </div>
      </section>

      <section id="certifications">
        <SectionHeader number="04" title="Certifications" />
        <div className="cert-list reveal">
          {certifications.map((cert) => (
            <CertificationItem key={cert.name} {...cert} />
          ))}
        </div>
      </section>

      <section id="contact">
        <div>
          <SectionHeader number="05" title="Contact" />
          <h3 className="contact-heading">
            Let&apos;s <em>build</em>
            <br />
            something.
          </h3>
          <p className="contact-sub">
            I&apos;m always open to new opportunities, collaborations, and conversations. Feel free to reach out - I&apos;ll
            reply as soon as I can.
          </p>
          <a href="mailto:darshanbhandigare9@gmail.com" className="contact-email">
            darshanbhandigare9@gmail.com
          </a>
          <div className="hero-ctas">
            <a
              href="https://www.linkedin.com/in/darshan-bhandigare/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              LinkedIn {"->"}
            </a>
            <a href="https://github.com/DarshanBhandigare" target="_blank" rel="noreferrer" className="btn btn-outline">
              GitHub {"->"}
            </a>
          </div>
        </div>
        <div className="contact-right reveal">
          <div className="terminal-box">
            <div className="terminal-bar">
              <div className="dot dot-r"></div>
              <div className="dot dot-y"></div>
              <div className="dot dot-g"></div>
              <span
                style={{
                  fontSize: "0.7rem",
                  color: "var(--muted)",
                  marginLeft: "0.5rem",
                }}
              >
                bash - darshan@portfolio
              </span>
            </div>
            <div className="terminal-body">
              <div>
                <span className="t-green">darshan</span>
                <span className="t-muted">@portfolio</span>
                <span className="t-blue">~</span>
                <span className="t-muted">$</span> whoami
              </div>
              <div className="t-muted">Aspiring Software Developer</div>
              <br />
              <div>
                <span className="t-green">darshan</span>
                <span className="t-muted">@portfolio</span>
                <span className="t-blue">~</span> <span className="t-muted">$</span> cat skills.txt
              </div>
              <div>
                <span className="t-purple">C/C++</span> .
                <span className="t-purple">Python</span> .
                <span className="t-purple">Java</span>
              </div>
              <div>
                <span className="t-purple">HTML/CSS/JS</span> .
                <span className="t-purple">DSA</span> .
                <span className="t-purple">Gen AI</span> .
                <span className="t-purple">Git</span>
              </div>
              <br />
              <div>
                <span className="t-green">darshan</span>
                <span className="t-muted">@portfolio</span>
                <span className="t-blue">~</span> <span className="t-muted">$</span> echo $STATUS
              </div>
              <div style={{ color: "var(--green)" }}>Open to opportunities - yes</div>
              <br />
              <div>
                <span className="t-green">darshan</span>
                <span className="t-muted">@portfolio</span>
                <span className="t-blue">~</span> <span className="t-muted">$</span>
                <span className="t-cursor"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <span>Copyright 2025 Darshan Bhandigare. All Rights Reserved.</span>
        <span>Built with React - Vite</span>
      </footer>
    </>
  );
}
