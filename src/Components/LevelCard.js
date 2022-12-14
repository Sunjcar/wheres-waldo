
import { Link } from "react-router-dom"
import { thumbnail } from "../Images/Levels"
import CharacterIcon from "./CharacterIcon"

const LevelCard = ({ level }) => {
  return (
    <div className="hover:bg-gray-300">
      <Link to={`/playground/${level.name}`}>
        <div className="transition-shadow bg-white rounded cursor-pointer hover:shadow">
          <img
            className="object-cover w-full h-56"
            src={thumbnail[level.name]}
            alt={level.name}></img>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex justify-between p-4 align-middle">
            <h1 className="flex-shrink-0 mr-3 font-medium lg:text-lg">
              {level.name.toUpperCase()}
            </h1>
          </div>
          <CharacterIcon className='flex flex-wrap' level={level} />
        </div>
      </Link>
    </div>
  )
}

export default LevelCard
