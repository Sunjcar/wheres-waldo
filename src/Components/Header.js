import React from 'react'
import Waldo from '../Images/Waldo.jpg'
import { Link } from 'react-router-dom'
import { Box, AppBar, Toolbar, IconButton, Tooltip } from "@mui/material";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import GitHubIcon from "@mui/icons-material/GitHub";

const Header = ({ icon, timer, button }) => {
    return (
        <div class='flex items-center justify-around gap-4 text-white'>
            <h1 class='flex items-center gap-8'>
                <div class='flex items-center'>
                    <img src={Waldo} alt='Waldo' class='h-[10vh]' />
                    <span class='text-blue-500 text-3xl'>Where's</span>
                    <span class='text-red-500 text-3xl'>Waldo</span>
                </div>
                <AppBar class='sticky'>
                    <Toolbar
                        sx={{
                            height: 80,
                            display: "flex",
                            mx: 8,
                            justifyContent: "space-between",
                        }}
                    >
                        <Box
                            sx={{ display: "flex", alignItems: "center" }}
                            component={Link}
                            to="/"
                        >
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                columnGap: "16px",
                            }}
                        >
                            {icon}
                            {timer}
                            {button}
                        </Box>
                        <Box>
                            <Tooltip title="Home">
                                <IconButton color="info" component={Link} to="/">
                                    <HomeIcon sx={{ fontSize: 40 }} />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Leaderboard">
                                <IconButton color="info" component={Link} to="/leaderboard">
                                    <LeaderboardIcon sx={{ fontSize: 40 }} />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="About">
                                <IconButton
                                    component="a"
                                    target="_blank"
                                    href="https://en.wikipedia.org/wiki/Where's_Wally%3F"
                                    color="info"
                                >
                                    <InfoIcon sx={{ fontSize: 40 }} />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Github">
                                <IconButton
                                    component="a"
                                    target="_blank"
                                    href="https://github.com/sunjcar"
                                    color="info"
                                >
                                    <GitHubIcon sx={{ fontSize: 40 }} />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Toolbar>
                </AppBar>
            </h1>
        </div>
    )
}

export default Header
