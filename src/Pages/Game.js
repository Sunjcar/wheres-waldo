import {
    Box,
    Dialog,
    DialogActions,
    DialogContent,
    Button,
    DialogTitle,
    DialogContentText,
    TextField
  } from "@mui/material"
  import React, { useCallback, useEffect, useState } from "react"
  import { Link, useNavigate } from "react-router-dom"
  import { GameImg } from "../Images/Levels"
  import { convertTime, getDate } from "../Utils/Utils"
  import Filter from "bad-words"
  import databaseService from "../services/database"
  
  const Game = ({ level, gameStart, handleGuess, found, finishTime }) => {
    const [username, setUsername] = useState("")
    const [errMsg, setErrMsg] = useState("")
    const nameFilter = new Filter()
    const navigate = useNavigate()
    const [windowChange, setWindowChange] = useState(false)
    const [gameXY, setgameXY] = useState({ X: 0, Y: 0 })
    const [gameSize, setgameSize] = useState({
      width: 0,
      height: 0
    })
    const GameRef = useCallback(
      node => {
        if (node !== null) {
          const { x, y, height, width } = node.getBoundingClientRect()
          setgameXY({ X: x, Y: y })
          setgameSize({
            height,
            width
          })
        }
      },
      [windowChange, gameStart]
    )
  
    //Submit updates doc and returns if it contains profanity
    const handleSubmit = () => {
      if (nameFilter.isProfane(username))
        return setErrMsg("Name contains bad words")
      if (username.length < 1) return setErrMsg("Name cannot be empty")
      if (!level) return setErrMsg("Network Error, please try again later")
  
      const newScore = {
        username: username,
        time: convertTime(finishTime),
        date: getDate()
      }
  
      databaseService.addScore(level.name, newScore)
      navigate(`/leaderboard/${level.name}`)
    }
  
    useEffect(() => {
      window.addEventListener("resize", () => {
        setWindowChange(prev => !prev)
      })
      window.addEventListener("scroll", () => {
        setWindowChange(prev => !prev)
      })
    }, [])
  
    if (!level) return <div>404 Level Not Found</div>
  
    //Tracks location of mouse relative to the img displayed
    const handleClick = e => {
      if (!gameStart) return
      const guess = {
        X: (e.clientX - gameXY.X) / gameSize.width,
        Y: (e.clientY - gameXY.Y) / gameSize.height
      }
      handleGuess(guess)
      console.log(guess)
    }
  
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          pt: "5vh",
          filter: gameStart ? "" : "blur(3px)"
        }}
      >
        <Dialog
          open={finishTime !== 0 && !gameStart}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {`You finished in ${convertTime(finishTime)} !`}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Submit your name here to save your score on the leaderboard.
            </DialogContentText>
            <TextField
              margin="dense"
              id="name"
              label="Your Name"
              value={username}
              onChange={e => {
                setUsername(e.currentTarget.value)
                setErrMsg("")
              }}
              type="text"
              fullWidth
              variant="standard"
              error={errMsg !== ""}
              helperText={errMsg !== "" ? errMsg : ""}
            />
          </DialogContent>
          <DialogActions sx={{ columnGap: "8px" }}>
            <Button color="secondary" variant="contained" to="/" component={Link}>
              Return Home
            </Button>
            <Button
              color="info"
              variant="contained"
              onClick={handleSubmit}
              autoFocus
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>
        <Box
          ref={GameRef}
          component="img"
          src={GameImg[level.name]}
          sx={{
            width: "90%",
            boxShadow: 10,
            cursor: "crosshair",
            position: "relative"
          }}
          onClick={handleClick}
        />
        {found.length === 0
          ? null
          : found.map(location => (
              <Box
                key={location.name}
                sx={{
                  border: "3px solid #ef3e37",
                  width: `${gameSize.height * 0.02}px`,
                  height: `${gameSize.height * 0.02}px`,
                  position: "absolute",
                  top: `${gameXY.Y +
                    window.scrollY +
                    location.coordinates.Y * gameSize.height -
                    (gameSize.height * 0.02) / 2}px`,
                  left: `${gameXY.X +
                    window.scrollX +
                    location.coordinates.X * gameSize.width -
                    (gameSize.height * 0.02) / 2}px`
                }}
              />
            ))}
      </Box>
    )
  }
  
  export default Game
  