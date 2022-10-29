import '../stylesheets/NavBar.css'

function NavBar() {
  return (
      <nav className="nav">
      <h1 className="logo">⚡️Bulletor</h1>
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
      </nav>
  )
}

export default NavBar