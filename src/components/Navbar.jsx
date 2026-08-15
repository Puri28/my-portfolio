import { useState } from "react";

function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);
  
  const goto = (page) => {
    props.setCurrentPage(page);
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <button className="nav-logo" onClick={() => setIsOpen(!isOpen)}>P</button> 

      <div className={`nav-links ${isOpen ? "open":""}`}>
        <button onClick={() => goto("home")}>Home</button>
        <button onClick={() => goto("skills")}>MY SKILL</button>
        <button onClick={() => goto("contact")}>CONTACT</button>
      </div>

      <div className="nav-name">Phuriphat</div>

    </nav>
  );
}

export default Navbar;