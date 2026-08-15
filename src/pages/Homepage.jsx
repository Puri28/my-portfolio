import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects'

function Homepage() {
  return (
    <>
      <Hero />

      <section id="projects">
        <h2>MY PROJECT</h2>
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