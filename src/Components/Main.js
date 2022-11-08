import React from 'react'
import Game from '../Images/Game.jpg'
const Main = () => {
    return (
        <div class='container px-2 lg:px-4 mx-auto pt-16 pb-8'>
            <main class='relative'>
                <img alt='waldo game' src={Game} class='flex items-center w-full h-full' />
            </main>
        </div>
    )
}

export default Main
