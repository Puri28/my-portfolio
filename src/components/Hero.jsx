function Hero(props) {
  return (
    <section id="hero">
      <h1>
        <span className="name-first">PHURIPHAT</span>
        <span className="name-last">CHOMPOONGAM</span>
      </h1>

      <div className="hero-lead">
        <p className="lead-role">UX/UI Designer &amp; Front-End Developer</p>

        <p className="lead-sub">
          สวัสดีครับ ผมภูริพัส ชุมภูงาม สนใจตำแหน่ง UX/UI Designer และ Front-End
          Developer มีความสนใจในการออกแบบและพัฒนาเว็บไซต์ด้วยเทคโนโลยีใหม่ ๆ
          และมีประสบการณ์ในการทำงานกับ React, JavaScript, HTML, CSS
          และเครื่องมือออกแบบ UI/UX
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            ดูผลงาน
          </a>
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => props.setPage("contact")}
          >
            ติดต่อผม
          </button>
          <a
            href="/Phuriphat-Chompoongam-UXUI-Frontend.pdf"
            className="btn btn-ghost"
            download
          >
            Download CV
          </a>
        </div>
      </div>

      <div className="hero-photo">
        <img src="/profile.webp" alt="Phuriphat Choompungam" />
      </div>
    </section>
  );
}

export default Hero;
