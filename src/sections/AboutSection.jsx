import SectionHeader from "../components/SectionHeader";

export default function AboutSection() {
  return (
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
  );
}
