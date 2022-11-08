import React from 'react'
import Header from './Components/Header'
import Main from './Components/Main'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className='flex flex-col'>
      <Router>
        <Header/>
        <hr></hr>
        <Routes>
          <Route path='/game' element={<Main/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
