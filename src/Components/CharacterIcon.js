import { Icon } from "@mui/material"
import { characterImg } from "../Images/characterImg"
const CharacterIcon = ({ level, found }) => {
  return (
    <div className="flex flex-wrap justify-end item-center">
      {level.character.map(name => (
        <Icon
          key={name}
          sx={{
            fontSize: "48px",
            mx: "4px",
            opacity: found?.some(location => location.name === name) ? 0.4 : 1
          }}
        >
          <img src={characterImg[name]}></img>
        </Icon>
      ))}
    </div>
  )
}

export default CharacterIcon

