import React, {useState, useEffect} from 'react'
import {
  Routes, // instead of "Switch"  
  Route
} from 'react-router-dom'
import '../stylesheets/App.css'

import NavBar from './NavBar'
import ListContainer from './ListContainer'
import ListForm from './ListForm'
import Resources from "./Resources"
// import ClickMe from "./ClickMe"

function App() {
  const [lists, setLists] = useState([])
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(()=> {
    fetch('http://localhost:3001/lists')
    .then(r => r.json())
    .then(data  => setLists(data))
  }, [])

  function handleDarkModeClick(){
    setIsDarkMode(isDarkMode => !isDarkMode)
  }
  return (
    <div className={"App "+ (isDarkMode ? "dark" : "light")}>
      <NavBar onDarkModeClick={handleDarkModeClick} isDarkMode={isDarkMode}/>
      {/* <ClickMe /> */}
      <Routes>
        <Route 
          path='/' 
          element={<ListContainer lists={lists}/>} 
        />
        <Route 
          path='add-list' 
          element={<ListForm setLists={setLists} lists={lists}/>}
        />
        <Route 
          path='resources' 
          element={<Resources/>}
        />
      </Routes>
    </div> 
  );
}

export default App;