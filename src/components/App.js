import React from 'react'
import {
  // BrowserRouter as Router, 
  Routes, // instead of "Switch"  
  Route, 
  // Link
} from 'react-router-dom'
import Header from './Header'
import NavBar from './NavBar'
import ListContainer from './ListContainer'
import ListForm from './ListForm'

import Home from "./Home"

function App() {
  return (
    <div>
      <p>Hi from App!</p>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />}  />
          {/* <Home /> */}
          {/* <ListContainer /> */}
        {/* </Route> */}
        {/* <Route path="/add-list"> */}
          {/* <ListForm /> */}
        {/* </Route> */}
      </Routes>
    </div>
    //   <Header />
    //   <NavBar />

  );
}

export default App;
