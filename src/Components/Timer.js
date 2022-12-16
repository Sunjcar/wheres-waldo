import React, { useEffect, useState } from "react"
import { convertTime } from "../utils"

const Timer = ({ gameStart, setGameTime }) => {
  const [time, setTime] = useState(0)

  useEffect(() => {
    let interval
    if (gameStart) {
      interval = setInterval(() => {
        setTime(prev => prev + 10)
      }, 10)
    } else {
      setGameTime(time)
    }
    return () => clearInterval(interval)
  }, [gameStart])

  return (
    <div className="min-w-[100px]">
      <h6>{convertTime(time)}</h6>
    </div>
  )
}

export default Timer
