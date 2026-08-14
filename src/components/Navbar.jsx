function Navbar(props) {
  return (
    <nav className="navbar">
      <button onClick={() => props.setCurrentPage("home")}>home</button>
      <button onClick={() => props.setCurrentPage("skills")}>my skill</button>
      <button onClick={() => props.setCurrentPage("contact")}>contact</button>
    </nav>
  );
}

export default Navbar;