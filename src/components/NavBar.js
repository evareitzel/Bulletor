import '../stylesheets/NavBar.css'

function NavBar() {
  return (
    <div>
      <nav className="nav">
      <h1>⚡️Bulletary</h1>
        <ul className="navList">
          <li>
            <a href="/"  className="item">Bullets</a>
          </li>
          <li>
            <a href="/add-list" className="item">Add List</a>
          </li>
          <li>
            <a href="/resources" className="item">Resources</a>
          </li>
        </ul>
        <button>Dark Mode 🌙</button> {/* ☀️ Light Mode */}
      </nav>
    </div>
  )
}

export default NavBar