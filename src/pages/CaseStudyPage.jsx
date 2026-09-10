import { useState } from "react";

function CaseStudyPage() {
  const [zoom, setZoom] = useState(null);

  return (
    <>
      <section id="case-study">
        <header className="case-head">
          <p className="case-status">
            กำลังพัฒนา — สัปดาห์ที่ 1: Research &amp; User Flow
          </p>
          <h1>ระบบสั่งทำเสื้อทีม</h1>
          <p className="case-sub">Team Shirt Order System</p>
          <div className="case-tools">
            <span>Figma</span>
            <span>FigJam</span>
            <span>React</span>
            <span>Vite</span>
            <span>Vercel</span>
          </div>
        </header>

        {/* ---------- 1. ที่มา ---------- */}
        <div className="case-block">
          <h2>ที่มา</h2>
          <p>
            ผมออกแบบเสื้อกีฬาระบบซับลิเมชันมา 1 ปี ให้ลูกค้าองค์กร ชมรมวิ่ง
            และยิมมวย รับบรีฟจากลูกค้าโดยตรง ทำไฟล์ artwork ส่งโรงงาน
            และตามงานจนถึงมือลูกค้า
          </p>
          <p>
            โปรเจกต์นี้เกิดจากปัญหาที่ผมเจอซ้ำ ๆ ทุกออร์เดอร์
            จนอยากลองแก้ด้วยการออกแบบ
          </p>
        </div>

        {/* ---------- 2. ปัญหา ---------- */}
        <div className="case-block">
          <h2>ปัญหา — และสิ่งที่ผมเข้าใจผิดตอนแรก</h2>
          <p>
            <strong>ตอนแรกผมคิดว่าคอขวดคือความเร็วในการออกแบบ</strong>{" "}
            แต่พอไล่ดูจริง ๆ ผมปิดงานออกแบบได้ภายใน 1 วัน หลายรายจบในวันเดียว
            งานที่ช้าไม่ได้ช้าที่ผม
          </p>
          <p>
            <strong>คอขวดจริงอยู่ที่ฝั่งลูกค้า</strong>
          </p>
          <ul className="case-list">
            <li>หัวหน้าทีมต้องไล่เก็บไซซ์เสื้อจากสมาชิก 25 คน ในกลุ่มไลน์</li>
            <li>เฉลี่ยใช้เวลา 3 วัน</li>
            <li>ต้องทวงซ้ำประมาณ 8 ครั้ง</li>
            <li>ยังไม่รู้ว่าใครตอบแล้ว ใครยังไม่ตอบ จนกว่าจะไล่นับเอง</li>
          </ul>
        </div>

        {/* ---------- 3. ผู้ใช้จริง ---------- */}
        <div className="case-block">
          <h2>ผู้ใช้จริง ไม่ใช่คนที่จ่ายเงิน</h2>
          <div className="case-compare">
            <div>
              <h4>คนที่สั่งซื้อ</h4>
              <p>หัวหน้าทีม / ฝ่ายบุคคล / ประธานชมรม</p>
            </div>
            <div>
              <h4>คนที่เจ็บปวด</h4>
              <p>หัวหน้าทีมคนเดียวกัน แต่ในบทบาท &quot;คนไล่เก็บข้อมูล&quot;</p>
            </div>
          </div>
          <p>
            ผมตัดสินใจออกแบบให้{" "}
            <strong>หัวหน้าทีมในฐานะผู้จัดการข้อมูล</strong> ไม่ใช่ในฐานะผู้ซื้อ
            เพราะขั้นตอนการซื้อไม่ได้มีปัญหาอะไร
            ขั้นตอนการรวบรวมข้อมูลต่างหากที่พัง
          </p>
        </div>

        {/* ---------- 4. User Flow ---------- */}
        <div className="case-block">
          <h2>User Flow</h2>
          <p>แยกเป็น 2 เส้นทาง เพราะผู้ใช้ 2 กลุ่มเห็นคนละหน้าจอ</p>

          <div className="flow-grid">
            <figure>
              <img
                src="/user-flow-member.webp"
                alt="User Flow เส้นสมาชิกในทีม กดลิงก์ เลือกชื่อตัวเอง เลือกไซซ์ แล้วยืนยัน"
                onClick={() =>
                  setZoom({
                    src: "/user-flow-member-full.webp",
                    caption: "User Flow — เส้นสมาชิกในทีม",
                  })
                }
              />
              <figcaption>
                เส้นสมาชิกในทีม · 10 ขั้นตอน · 3 หน้า · 5 เฟรม
              </figcaption>
            </figure>

            <figure>
              <img
                src="/user-flow-leader.webp"
                alt="User Flow เส้นหัวหน้าทีม สร้างงาน เก็บไซซ์ ตรวจสอบ แล้วยืนยันการผลิต"
                onClick={() =>
                  setZoom({
                    src: "/user-flow-leader-full.webp",
                    caption: "User Flow — เส้นหัวหน้าทีม",
                  })
                }
              />
              <figcaption>
                เส้นหัวหน้าทีม · 20 ขั้นตอน · 3 หน้า · 9 เฟรม
              </figcaption>
            </figure>
          </div>
          <p className="case-hint">กดที่ภาพเพื่อขยาย</p>
        </div>

        {/* ---------- 5. การตัดสินใจ ---------- */}
        <div className="case-block">
          <h2>การตัดสินใจ 3 ข้อ และเหตุผล</h2>

          <div className="decision">
            <h3>1. ไม่บังคับให้ผู้ใช้ทุกคนเดินทางเดียวกัน</h3>
            <p>
              จากการถามลูกค้าจริงที่เคยรับงาน —{" "}
              <strong>หัวหน้าทีมมีรายชื่อสมาชิกใน Excel อยู่แล้วประมาณครึ่งเดียว</strong>{" "}
              อีกครึ่งใช้แค่กลุ่มไลน์
            </p>
            <p>
              ถ้าออกแบบให้ต้องวางรายชื่อก่อนเสมอ
              อีกครึ่งจะติดตั้งแต่ขั้นตอนแรกแล้วเลิกใช้
            </p>
            <ul className="case-list">
              <li>
                <strong>มี Excel</strong> → วางรายชื่อ → ระบบบอกได้ว่าขาด
                &quot;ใคร&quot;
              </li>
              <li>
                <strong>ไม่มี Excel</strong> → ใส่แค่จำนวน → ระบบบอกได้แค่
                &quot;18 / 25&quot;
              </li>
            </ul>
            <p>
              ยอมให้ผลลัพธ์หยาบลงสำหรับคนกลุ่มที่สอง
              ดีกว่าทำให้เขาใช้ไม่ได้เลย
            </p>
          </div>

          <div className="decision">
            <h3>2. ให้สมาชิกกดเลือกชื่อ ไม่ใช่พิมพ์ชื่อ</h3>
            <p>ถ้าให้พิมพ์เอง จะเจอปัญหาชื่อไม่ตรงกัน</p>
            <ul className="case-list">
              <li>หัวหน้าทีมพิมพ์ไว้ &quot;ภูริพัส ชุมภูงาม&quot;</li>
              <li>เจ้าตัวกรอกเข้ามา &quot;ปุริ&quot;</li>
              <li>
                ระบบมองเป็นคนละคน → 26 รายชื่อ ขาด 1 คน ทั้งที่ครบแล้ว
              </li>
            </ul>
            <p>
              คนไทยเรียกกันด้วยชื่อเล่น บังคับให้พิมพ์เหมือนกันเป๊ะไม่ได้
              จึงเปลี่ยนเป็นให้เลือกจากรายชื่อที่มีอยู่แล้ว —
              ปัญหาหายไปทั้งหมด
            </p>
          </div>

          <div className="decision">
            <h3>3. ปุ่มที่กดไม่ได้ ดีกว่าข้อความ error ที่สวย</h3>
            <p>ร้านมีขั้นต่ำการผลิต 10 ตัว</p>
            <ul className="case-list">
              <li>
                <strong>แบบที่ไม่เลือก</strong> — ให้กดยืนยันได้ แล้วขึ้น error
                &quot;ไม่ถึงขั้นต่ำ&quot; ผู้ใช้เสียเวลาไปแล้วถึงจะรู้
              </li>
              <li>
                <strong>แบบที่เลือก</strong> — ปุ่มเป็นสีเทากดไม่ได้ พร้อมบอกว่า
                &quot;ต้องมีอย่างน้อย 10 ตัว ตอนนี้มี 8&quot; รู้ตั้งแต่ก่อนกด
              </li>
            </ul>
          </div>
        </div>

        {/* ---------- 6. จงใจไม่ทำเป็นระบบ ---------- */}
        <div className="case-block case-highlight">
          <h2>ขั้นตอนที่ผมจงใจไม่ทำให้เป็นระบบ</h2>
          <p>
            จอคอมแต่ละเครื่องแสดงสีไม่เหมือนกัน
            และสีบนจอกับสีที่พิมพ์ลงผ้าจริงต่างกันเสมอ ต่อให้ทำ color picker
            ดีแค่ไหน ลูกค้าก็ยังเซอร์ไพรส์ตอนได้ของจริง
          </p>
          <p>
            <strong>วิธีที่ใช้จริงที่ร้านและได้ผล</strong>
          </p>
          <ul className="case-list">
            <li>สั่งพิมพ์สีทดสอบลงผ้าจริง → ถ่ายรูป → ส่งให้ลูกค้าดู</li>
            <li>ลูกค้าโอเค = จบ เข้าสู่การผลิต</li>
            <li>ลูกค้าไม่โอเค = ปรับสี แล้วเทสใหม่</li>
          </ul>
          <p>
            ผมออกแบบให้ขั้นตอนนี้อยู่ในระบบ{" "}
            <strong>ในฐานะการรอที่มองเห็นได้</strong>{" "}
            ไม่ใช่พยายามแทนที่มันด้วยซอฟต์แวร์ เพราะปัญหานี้แก้ด้วยหน้าจอไม่ได้
            มันต้องแก้ด้วยผ้าจริง
          </p>
        </div>

        {/* ---------- 7. เป้าหมาย ---------- */}
        <div className="case-block">
          <h2>เป้าหมายที่ตั้งไว้</h2>
          <div className="case-metric">
            <div>
              <h4>ก่อน</h4>
              <p>3 วัน</p>
              <small>ทวงในไลน์ 8 ครั้ง</small>
            </div>
            <div>
              <h4>หลัง</h4>
              <p>1 วัน</p>
              <small>ทวง 2 ครั้ง</small>
            </div>
          </div>
          <p className="case-hint">
            ตัวเลขประมาณจากประสบการณ์รับงานจริงที่ร้าน ยังไม่ได้วัดจากระบบจริง
          </p>
        </div>

        {/* ---------- 8. ขั้นต่อไป ---------- */}
        <div className="case-block">
          <h2>ขั้นต่อไป</h2>
          <ul className="case-todo">
            <li>Wireframe 14 เฟรม รวมสถานะ empty / error / success</li>
            <li>UI + Design System — เช็ค contrast ทุกคู่สีให้ผ่าน 4.5:1</li>
            <li>ทดสอบกับผู้ใช้จริง 5 คน</li>
            <li>พัฒนาเป็นเว็บจริงด้วย React แล้ว deploy</li>
          </ul>
        </div>
      </section>

      {zoom && (
        <div className="lightbox" onClick={() => setZoom(null)}>
          <button className="lightbox-close" aria-label="ปิด">
            ✕
          </button>
          <img src={zoom.src} alt={zoom.caption} />
          <p className="lightbox-caption">{zoom.caption}</p>
        </div>
      )}
    </>
  );
}

export default CaseStudyPage;
