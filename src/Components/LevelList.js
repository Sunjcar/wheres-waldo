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
            <div className="mt-8 bg-gray-50">
                <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        <span className="block">Are you a Waldo expert?</span>
                        <span className="block text-red-500">View the leaderboard</span>
                    </h2>
                    <div className="mt-8 lex lg:mt-0 lg:flex-shrink-0">
                        <div className="inline-flex rounded-md shadow">
                            <PrimaryBtn link="/leaderboard">View Leaderboard</PrimaryBtn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LevelList
