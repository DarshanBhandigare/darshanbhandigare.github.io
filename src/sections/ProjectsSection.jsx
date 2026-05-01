import SectionHeader from "../components/SectionHeader";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsSection({ projects }) {
  return (
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
  );
}
