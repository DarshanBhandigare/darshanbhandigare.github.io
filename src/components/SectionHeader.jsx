export default function SectionHeader({ number, title }) {
  return (
    <div className="section-header reveal">
      <span className="section-number">{number}</span>
      <h2 className="section-title">{title}</h2>
      <div className="section-line"></div>
    </div>
  );
}
