export default function ProjectCard({ type, title, description, tags, live, github }) {
  return (
    <div className="project-card reveal">
      <div className="project-card-top">
        <span className="project-type">{type}</span>
        <div className="project-links">
          <a href={live} target="_blank" rel="noreferrer">
            Live {"->"}
          </a>
          <a href={github} target="_blank" rel="noreferrer">
            GitHub {"->"}
          </a>
        </div>
      </div>
      <div className="project-body">
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-tags">
          {tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
