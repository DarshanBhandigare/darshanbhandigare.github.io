export default function HeroSection() {
  return (
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
          // Software Developer
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
        <strong style={{ marginTop: "1rem" }}>4</strong>
        <span>Live Projects</span>
      </div>
    </section>
  );
}
