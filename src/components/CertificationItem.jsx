export default function CertificationItem({ color, name, issuer, year, link, label }) {
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
