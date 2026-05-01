export default function SkillCard({ icon, name, level, width }) {
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
