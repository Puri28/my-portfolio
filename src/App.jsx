import AboutMe from './AboutMe'
import SkillItem from './SkillItem'
import './App.css'
import projects from './data/projects'

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
        {/* 🔧 การบ้าน: เปลี่ยน 3 บรรทัดนี้ให้มาจาก src/data/skills.js ด้วย .map() */}
        <SkillItem skillName="JavaScript" level="ปานกลาง" />
        <SkillItem skillName="React" level="ปานกลาง" />
        <SkillItem skillName="HTML/CSS" level="ปานกลาง" />
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
