const projects = [
  {
    id: 1,
    title: "Pace — Landing Page",
    description:
      "Landing page ของแอปตารางซ้อมวิ่ง เขียนด้วย Semantic HTML และ CSS ล้วน ใช้ CSS Grid แบบ auto-fit ให้การ์ดปรับจำนวนคอลัมน์เองโดยไม่ต้องใช้ media query พร้อมฟอร์มติดต่อที่ตรวจสอบข้อมูลด้วย HTML",
    image: "/projects/landing-pace.webp",
    tags: ["HTML", "CSS", "Grid", "Responsive"],
    demoUrl: "https://puri28.github.io/pace-landing/",
    githubUrl: "https://github.com/Puri28/pace-landing",
  },
  {
    id: 2,
    title: "Kanban Board",
    description:
      "กระดานจัดการงานแบบลากวางได้ 4 คอลัมน์ การ์ดเปลี่ยนสีอัตโนมัติตามคอลัมน์ที่ถูกวาง พัฒนาด้วย JavaScript ล้วน โดยใช้ DOM API และ Drag & Drop Event",
    image: "/projects/kanban-board.webp",
    tags: ["JavaScript", "DOM", "Drag & Drop"],
    demoUrl: "https://puri28.github.io/kanban-board/",
    githubUrl: "https://github.com/Puri28/kanban-board",
  },
  {
    id: 3,
    title: "Expense Tracker",
    description:
      "แอปบันทึกรายรับ-รายจ่าย ทำ CRUD ครบวงจรด้วย React — เพิ่ม แก้ไข ลบ และกรองตามประเภท จัดการ state ด้วย useState และคำนวณยอดสรุปแบบ derived value โดยไม่เก็บเป็น state ซ้ำ",
    image: "/projects/expense-tracker.webp",
    tags: ["React", "useState", "CRUD"],
    demoUrl: "https://expense-tracker-tau-liart.vercel.app/",
    githubUrl: "https://github.com/Puri28/expense-tracker",
  },
];

export default projects;
