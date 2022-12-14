import LevelCard from "./LevelCard"
import { PrimaryBtn } from "../Utils/BtnWrapper"

const LevelList = ({ levels }) => {
  return (
    <div>
      <div className="grid gap-4 pt-10 md:grid-cols-3">
        {[...levels]
          .sort((a, b) => a.character.length - b.character.length)
          .map(level => (
            <LevelCard level={level} key={level.name} />
          ))}
      </div>
    </div>
  )
}

export default LevelList
