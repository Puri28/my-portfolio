function Hero() {
  return (
    <section id="hero">
      <h1>
        <span className="name-first">PHURIPHAT</span>
        <span className="name-last">CHOOMPUNGAM</span>
      </h1>

      <p className="hero-lead">
        กราฟิกดีไซเนอร์ที่เปลี่ยนสายมาเป็น Frontend Developer
        ออกแบบเสื้อกีฬาให้ลูกค้าองค์กรมา 1 ปี
        และผันตัวมาเขียนโค้ดเพราะอยากทำให้สิ่งที่ออกแบบใช้งานได้จริงบนเว็บ
      </p>

      <div className="hero-photo">
        <img src="/profile.webp" alt="Phuriphat Choompungam" />
      </div>
    </section>
  );
}

export default Hero;
