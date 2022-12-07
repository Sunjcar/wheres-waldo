import React from 'react'
import Header from './Components/Header'
import Main from './Components/Main'
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

import { useEffect, useState } from 'react';
import { levelData } from './Utils/LevelData';
import Card from './Components/Card';
import Home from './Pages/Home';

const App = () => {
  const [level, setLevel] = useState([])
  const [gameStart, setGameStart] = useState(false)


  const startGame = () => setGameStart(true);
  return (
    <div className='container px-2 pt-2 pb-4 mx-auto lg:px-2 lg:pt-8'>
      <Router>
        <hr className='mb-4'></hr>
        <Routes >
          <Route path='/' element={<Home gameStart={gameStart} startGame={startGame} setLevel={setLevel} levelData={levelData} />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
