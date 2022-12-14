import { IconButton, Tooltip } from "@mui/material"
import InfoIcon from "@mui/icons-material/Info"
import HomeIcon from "@mui/icons-material/Home"
import GitHubIcon from "@mui/icons-material/GitHub"
import Waldo_Logo from "../assets/logo/waldo-logo.svg"
import { Link } from "react-router-dom"

const Header = ({ icon, timer, button }) => {
    return (
        <header className="z-50 w-full bg-white shadow-sm ">
            <div className="flex items-center justify-around">
                <div className="flex justify-center">
                    <Link to="/" className="flex items-center justify-center ">
                        <img className="h-10 px-4 lg:h-16" src={Waldo_Logo} alt="waldo" />
                        <h1 className="text-xl font-extrabold leading-none tracking-tight lg:text-4xl">
                            <span className="text-blue-500">Where&apos;s </span>
                            <span className="text-red-500">Waldo?</span>
                        </h1>
                    </Link>
                </div>
                <div className="flex items-center justify-around">
                    {icon}
                    {timer}
                    {button}
                </div>
                <div>
                    <Tooltip title="Home">
                        <IconButton color="info" component={Link} to="/">
                            <HomeIcon sx={{ fontSize: 32 }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="About">
                        <IconButton
                            component="a"
                            target="_blank"
                            href="https://en.wikipedia.org/wiki/Where's_Wally%3F"
                            color="info"
                        >
                            <InfoIcon sx={{ fontSize: 32 }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Github">
                        <IconButton
                            component="a"
                            target="_blank"
                            href="https://github.com/sunjcar/"
                            color="info"
                        >
                            <GitHubIcon sx={{ fontSize: 32 }} />
                        </IconButton>
                    </Tooltip>
                </div>
            </div>
            <hr></hr>
        </header>
    )
}
export default Header
