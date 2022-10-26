import React from 'react'
import {
  Routes, // instead of "Switch"  
  Route
} from 'react-router-dom'

// import json.db 
import lists from "../data/db.json"

import NavBar from './NavBar'
import ListContainer from './ListContainer'
import ListForm from './ListForm'
import Resources from "./Resources"

function App() {

  console.log(lists)
  return (
    <div>
      <NavBar />
      <Routes>
        <Route 
          path='/' 
          element={<ListContainer />} 
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