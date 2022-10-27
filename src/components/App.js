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

function App() {
  const [lists, setLists] = useState([])

  useEffect(()=> {
    fetch('http://localhost:3001/lists')
    .then(r => r.json())
    .then(data  => {
      setLists(data)
    })
  }, [])

  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route 
          path='/' 
          element={<ListContainer lists={lists}/>} 
        />
        <Route 
          path='add-list' 
          element={<ListForm/>}
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