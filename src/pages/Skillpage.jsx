import skills from "../data/skills";
import certificates from "../data/certificates";

function Skillpage() {
  return (
    <>
      <section>
        <h2>Tech Stack</h2>

        <div className="stack-group">
          <h3>Frontend</h3>
          {skills
            .filter((s) => s.category === "Frontend")
            .map((s) => (
              <span key={s.id}>{s.name}</span>
            ))}
        </div>

        <div className="stack-group">
          <h3>Tools</h3>
          {skills
            .filter((s) => s.category === "Tools")
            .map((s) => (
              <span key={s.id}>{s.name}</span>
            ))}
        </div>

        <div className="stack-group">
          <h3>Design</h3>
          {skills
            .filter((s) => s.category === "Design")
            .map((s) => (
              <span key={s.id}>{s.name}</span>
            ))}
        </div>
      </section>
      <section id="certificates">
        <h2>Certificates</h2>
        <div className="cert-grid">
          {certificates.map((cert) => (
            <div
              className={`cert-card ${cert.status === "soon" ? "soon" : ""}`}
              key={cert.id}
            >
              {cert.image ? (
                <img src={cert.image} alt={cert.title} />
              ) : (
                <div className="cert-placeholder">SOON</div>
              )}

              <h3>{cert.title}</h3>
              <p>{cert.status === "soon" ? "รอใบ certificed 1-2 week" : cert.issuer}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
export default Skillpage;
