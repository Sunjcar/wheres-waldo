import React, { useEffect, useState } from "react"
import { CssBaseline } from "@mui/material"
import LevelList from "./Components/LevelList"
import { Routes, Route, useMatch, useNavigate } from "react-router-dom"
import databaseService from "./Database"
import { validateGuess } from "./Utils/Utils"
import CharacterIcon from "./Components/CharacterIcon"
import Timer from "./Components/Timer"
import Leaderboard from "./Components/Leaderboard"
import { PrimaryBtn} from "./Utils/BtnWrapper"
import Game from "./Pages/Game"
import Header from "./Components/Header"

function App() {
  const navigate = useNavigate()
  const [gameStart, setGameStart] = useState(false)
  const [gameTime, setGameTime] = useState(0)
  const [currentLevel, setCurrentLevel] = useState(null)
  const [locationStrike, setLocationStrike] = useState([])
  const [levels, setLevels] = useState([])
  const match = useMatch("/game/:name")

  const startGame = () => setGameStart(true)

  const handleStrike = location => {
    if (locationStrike.some(loco => loco.name === location.name)) return
    const found = locationStrike.concat(location)
    if (found) setLocationStrike(found)
    if (found && found.length === currentLevel?.character.length) {
      setGameStart(false)
    }
  }

  const handleGuess = async guess => {
    if (!currentLevel) return

    const locations = await databaseService.getCharacterLocations(
      currentLevel.name
    )

    if (!locations) return

    locations.forEach(location => {
      if (locationStrike.some(x => x.name === location.name)) return
      if (validateGuess(guess, location.coordinates)) handleStrike(location)
    })
  }

  useEffect(() => {
    databaseService.getlevelsData().then(data => setLevels(data))
  }, [])

  useEffect(() => {
    if (match) {
      const level = levels.find(entry => entry.name === match.params.name)
      if (level) {
        setCurrentLevel(level)
      } else {
        navigate("/")
      }
    } else {
      setLocationStrike([])
      setCurrentLevel(null)
      setGameTime(0)
      setGameStart(false)
    }
  }, [match])

  return (
    <div className="container px-2 pt-2 pb-4 mx-auto lg:px-2 lg:pt-8">
      <div>
        <CssBaseline />
        <Header
          icon={
            currentLevel ? (
              <CharacterIcon level={currentLevel} found={locationStrike} />
            ) : null
          }
          timer={
            currentLevel ? (
              <Timer gameStart={gameStart} setGameTime={setGameTime} />
            ) : null
          }
          button={
            currentLevel ? (
              <PrimaryBtn
                color={gameStart ? "info" : "secondary"}
                variant="contained"
                onClick={startGame}
              >
                {gameStart ? "Started!" : "Start!"}
              </PrimaryBtn>
            ) : null
          }
        />
        <Routes>
          <Route
            path="/game/:name"
            element={
              <Game
                level={currentLevel}
                gameStart={gameStart}
                found={locationStrike}
                handleGuess={handleGuess}
                finishTime={gameTime}
              />
            }
          />
          <Route
            path="/leaderboard/*"
            element={<Leaderboard levels={levels} />}
          />
          <Route path="/" element={<LevelList levels={levels} />} />
        </Routes>
      </div>
    </div>
  )
}
export default App