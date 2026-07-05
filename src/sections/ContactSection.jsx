import SectionHeader from "../components/SectionHeader";

export default function ContactSection() {
  return (
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
        <a href="mailto:bhandigaredarshan@gmail.com" className="contact-email">
          bhandigaredarshan@gmail.com
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
              <span className="t-purple"> C/C++</span> .
              <span className="t-purple"> Python</span> 
            </div>
            <div>
              <span className="t-purple"> HTML/CSS/JS</span> . 
              <span className="t-purple"> React JS</span> . 
              <span className="t-purple"> DSA</span> .
              <span className="t-purple"> Gen AI</span> .
              <span className="t-purple"> Git</span>
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
  );
}
