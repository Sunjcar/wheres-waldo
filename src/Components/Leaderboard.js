import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper
} from "@mui/material"
import { useEffect, useState } from "react"
import { Link, Route, Routes, useMatch, useNavigate } from "react-router-dom"
import { thumbnail } from "../Images/Thumbnail"
import databaseService from "../Database"
import { compareScore } from "../Utils/Utils"
import CharacterIcon from "./CharacterIcon"
import { PrimaryBtn, SecondaryBtn } from "../Utils/BtnWrapper"

const Leaderboard = ({ levels }) => {
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const match = useMatch("/leaderboard/:levelName")

  useEffect(() => {
    if (!levels || levels.length === 0) navigate("/")
  }, [])

  useEffect(() => {
    if (match) {
      const levelName = match.params.levelName
      databaseService.getLeaderboard(levelName).then(res => {
        const sorted = [...res].sort((a, b) => compareScore(a, b))
        setData(sorted)
      })
      console.log(levelName)
    } else navigate(`/leaderboard/${levels[0].name}`)
  }, [match])



  return (
    <div className="flex flex-col">
      <h1 className="pt-10 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Leaderboard
      </h1>
      <div className="mb-4">
        <SecondaryBtn link="/" leftMargin>
          Back To Home
        </SecondaryBtn>
      </div>
      <div className="grid grid-cols-3 gap-3 mb-4 lg:grid-cols-6">
        {levels.map(level => (
          <div key={level.name} className=' hover:bg-gray-100'  >
            <Link to={`/leaderboard/${level.name}`}>
              <img
                src={thumbnail[level.name]}
                alt={level.name}
                className='object-cover w-full h-40'
              >
              </img>
              <div className="p-4 align-middle">
                <h1 className="flex-shrink-0 mr-3 font-bold lg:text-lg">
                  {level.name.toUpperCase()}
                </h1>
              </div>
              <PrimaryBtn link={`/game/${level.name}`} className='flex'>Play This Level</PrimaryBtn>
            </Link>
          </div>
        ))}
      </div>
      <Routes>
        <Route
          path="/:levelName"
          element={
            <TableContainer
              component={Paper}
              sx={{ maxWidth: "100%", px: "2vw" }}
            >
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <colgroup>
                  <col style={{ width: "30%" }} />
                  <col style={{ width: "35%" }} />
                  <col style={{ width: "35%" }} />
                </colgroup>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Time (mm:ss:ms)</TableCell>
                    <TableCell align="right">Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data && data.length !== 0
                    ? data.map(row => (
                      <TableRow
                        key={row.username}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 }
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.username}
                        </TableCell>
                        <TableCell align="right">{row.time}</TableCell>
                        <TableCell align="right">{row.date}</TableCell>
                      </TableRow>
                    ))
                    : null}
                </TableBody>
              </Table>
            </TableContainer>
          }
        />
      </Routes>
    </div>
  )
}

export default Leaderboard