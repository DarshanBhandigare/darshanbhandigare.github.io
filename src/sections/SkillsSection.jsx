import SectionHeader from "../components/SectionHeader";
import SkillCard from "../components/SkillCard";

export default function SkillsSection({ skills }) {
  return (
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
  );
}
