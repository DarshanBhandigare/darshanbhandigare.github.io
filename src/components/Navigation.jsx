import { useState } from "react";

export default function Navigation({ links }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="nav-logo">DB.portfolio</div>
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              download={link.download}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          </li>
        ))}
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
  );
}
