import {
  FaFacebook,
  FaLine,
} from "react-icons/fa";

function Contactpage() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p className="section-lead">
        สนใจร่วมงานหรือมีคำถาม ทักมาได้เลยครับ ยินดีคุยทุกช่องทาง
      </p>

      <div className="contact-grid">
        <a className="contact-btn" href="mailto:forgameo804@gmail.com">
          <span className="contact-icon">📧</span>
          <span className="contact-info">
            <strong>Email</strong>
            <small>forgameo804@gmail.com</small>
          </span>
        </a>
        <a className="contact-btn" href="tel:0610975094">
          <span className="contact-icon">📞</span>
          <span className="contact-info">
            <strong>โทรศัพท์</strong>
            <small>061-097-5094</small>
          </span>
        </a>

        <a
          className="contact-btn"
          href="https://github.com/Puri28"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="contact-icon">💻</span>
          <span className="contact-info">
            <strong>GitHub</strong>
            <small>github.com/Puri28</small>
          </span>
        </a>

        <a
          className="contact-btn"
          href="https://www.facebook.com/puripat.ch/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="contact-icon" />
          <span className="contact-info">
            <strong>Facebook</strong>
            <small>Puripat Ch</small>
          </span>
        </a>

        <a
          className="contact-btn"
          href="https://line.me/ti/p/~puripatch55"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLine className="contact-icon" />
          <span className="contact-info">
            <strong>LINE</strong>
          </span>
        </a>
      </div>
    </section>
  );
}

export default Contactpage;
