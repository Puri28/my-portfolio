import './App.css'
// import SkillItem from './components/SkillItem'
import skills from './data/skills'
import projects from './data/projects'
import Hero from './components/Hero'
import ProjectCard from './components/ProjectCard'

function App() {
  return (
    <>
      {/* TODO 3: <Navbar /> */}

      {<Hero />}

      {/* TODO 4: <section id="about"> — เรื่องเล่าเปลี่ยนสาย + Timeline */}

      {/* <section id="skills">
        <h2>Skills</h2>
        {skills.map((skill) => (
          <SkillItem key={skill.id} skillName={skill.name} level={skill.level} />
        ))}
      </section> */}

      <section id="projects">
        <h2>Projects</h2>
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

      {/* TODO 6: <section id="certificates"> */}

      {/* TODO 5: <section id="contact"> */}

      {/* TODO 5: <Footer /> */}
    </>
  )
}

export default App
