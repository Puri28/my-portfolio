function ProjectCard(props) {
  return (
    <div className="project-card">

      {props.image && <img src={props.image} alt={props.title} />}

      <h3>{props.title}</h3>
      <p>{props.description}</p>

      <div className="tags">
        {props.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <div className="links">
        <a href={props.demoUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
        <a href={props.githubUrl} target="_blank" rel="noopener noreferrer">Source Code</a>
      </div>

    </div>
  );
}

export default ProjectCard;