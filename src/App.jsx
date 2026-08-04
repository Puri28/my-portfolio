import AboutMe from './AboutMe'
import SkillItem from './SkillItem'
import './App.css'
import projects from './data/projects'
import skills from './data/skills'

function App() {
  return (
    <>
      {/* TODO: <Navbar />  — เมนูบนสุด กดแล้วเลื่อนไปหา section ข้างล่าง */}
      {/* TODO: <Hero />    — ชื่อ + ตำแหน่ง + ปุ่ม + รูปโปรไฟล์ */}

      <section id="about">
        <AboutMe />
      </section>

      <section id="skills">
        <h2>Skills</h2>
        {skills.map((skill) => (
          <SkillItem key={skill.id} skillName={skill.name} level={skill.level} />
        ))}
      </section>

      {<section id="projects">
  <h2>Projects</h2>
  <ul>
    {projects.map((project) => (
      <li key={project.id}>{project.title}</li>
    ))}
  </ul>
</section>}
      {/* TODO: <section id="contact">   — ช่องทางติดต่อ */}
      {/* TODO: <Footer /> */}
    </>
  )
}

export default App
