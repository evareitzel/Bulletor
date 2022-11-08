import '../stylesheets/NavBar.css'
import {Link} from 'react-router-dom'

function NavBar({onDarkModeClick, isDarkMode}) {
  return (
      <nav className="nav">
        <h1 className="logo">⚡️Bulletor</h1>
        <ul className="navList">
          <li>
            <Link to="/"  className="item">Bullets</Link>
          </li>
          <li>
            <Link to="/add-list" className="item">Add List</Link>
          </li>
          <li>
            <Link to="/resources" className="item">Resources</Link>
          </li>
        </ul>
        <button onClick={onDarkModeClick} className="darkModeBtn">{isDarkMode? "🌙 Dark Mode" : "☀️ Light Mode "}</button>
      </nav>
  )
}

export default NavBar