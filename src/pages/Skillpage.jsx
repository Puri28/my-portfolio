import skills from '../data/skills'

function Skillpage() {
  return (
    <section>
      <h2>Tech Stack</h2>

      <div className="stack-group">
        <h3>Frontend</h3>
        {skills.filter((s) => s.category === "Frontend").map((s) => (
          <span key={s.id}>{s.name}</span>
        ))}
      </div>

      <div className="stack-group">
        <h3>Tools</h3>
        {skills.filter((s) => s.category === "Tools").map((s) => (
          <span key={s.id}>{s.name}</span>
        ))}
      </div>

      <div className="stack-group">
        <h3>Design</h3>
        {skills.filter((s) => s.category === "Design").map((s) => (
          <span key={s.id}>{s.name}</span>
        ))}
      </div>
    </section>
  );
}
export default Skillpage;