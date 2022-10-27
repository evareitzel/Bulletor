import '../stylesheets/NavBar.css'

function NavBar() {
  return (
    <div>
      <nav className="nav">
      <h1>⚡️Bulletary</h1>
        <ul>
          <li>
            <a href="/" >Bullets</a>
          </li>
          <li>
            <a href="/add-list" >Add List</a>
          </li>
          <li>
            <a href="/resources">Resources</a>
          </li>
        </ul>
        <button>Dark Mode 🌙</button> {/* ☀️ Light Mode */}
      </nav>
    </div>
  )
}

export default NavBar