function Hero(props) {
  return (
    <section id="hero">
      <h1>
        <span className="name-first">PHURIPHAT</span>
        <span className="name-last">CHOOMPUNGAM</span>
      </h1>

      <div className="hero-lead">
        <p className="lead-role">Frontend Developer</p>

        <p className="lead-sub">
          สวัสดีครับ ผมภูริพัส ชุมภูงาม กำลังสนใจในตำแหน่ง Frontend Developer
          เป็นคนที่ชอบเรียนรู้และพัฒนาครับ
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
            href="/Phuriphat-Choompungam-Frontend-Developer.pdf"
            className="btn btn-ghost" download
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
