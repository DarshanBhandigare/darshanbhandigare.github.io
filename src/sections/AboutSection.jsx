import SectionHeader from "../components/SectionHeader";

export default function AboutSection() {
  return (
    <section id="about">
      <div>
        <SectionHeader number="01" title="About" />
        <div className="about-text">
          <p>
            I&apos;m a <strong>BSc IT student at</strong> D.G. Ruparel College with hands-on experience building and deploying full-stack web applications using <b>React.js, HTML, CSS, JavaScript, and SQL.</b>
          </p>
          <p>
            My focus is on <strong>full-stack developmet and DSA in C++</strong>: hands-on projects in
            web development. I believe in learning by building - every project is a
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
            4
          </div>
          <div className="stat-label">Live Projects</div>
        </div>
        <div className="stat-box">
          <div className="stat-num" style={{ color: "var(--green)" }}>
            ∞
          </div>
          <div className="stat-label">Learning Mode</div>
        </div>
      </div>
    </section>
  );
}
