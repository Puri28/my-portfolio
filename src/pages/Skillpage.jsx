import { useState } from "react";
import skills from "../data/skills";
import certificates from "../data/certificates";

function Skillpage() {
  const [openCert, setOpenCert] = useState(null);

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
            <button
              className={`cert-card ${cert.status === "soon" ? "soon" : ""}`}
              key={cert.id}
              onClick={() => setOpenCert(cert)}
              disabled={!cert.image}
            >
              {cert.image ? (
                <img src={cert.image} alt={cert.title} />
              ) : (
                <div className="cert-placeholder">SOON</div>
              )}

              <h3>{cert.title}</h3>
              <p>
                {cert.status === "soon"
                  ? "รอใบ certificate 1-2 สัปดาห์"
                  : cert.issuer}
              </p>
            </button>
          ))}
        </div>
      </section>

      {openCert && (
        <div className="lightbox" onClick={() => setOpenCert(null)}>
          <button className="lightbox-close" aria-label="ปิด">
            ✕
          </button>
          <img src={openCert.image} alt={openCert.title} />
          <p className="lightbox-caption">{openCert.title}</p>
        </div>
      )}
    </>
  );
}

export default Skillpage;
