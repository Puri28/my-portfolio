import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

function Homepage(props) {
  return (
    <>
      <Hero setPage={props.setPage} />

      <section id="projects">
        <h2>MY PROJECTS</h2>
        <p className="section-lead">
          ผลงานที่พัฒนาและ deploy ขึ้นใช้งานจริง กดดูได้ทุกชิ้น
        </p>

        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            tags={project.tags}
            demoUrl={project.demoUrl}
            githubUrl={project.githubUrl}
          />
        ))}
      </section>
    </>
  );
}

export default Homepage;
