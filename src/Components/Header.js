import React from 'react'
import Waldo from '../Images/Waldo.jpg'
import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <div class='flex items-center justify-around gap-4 text-white'>
            <h1 class='flex items-center gap-8'>
                <div class='flex items-center'>
                    <img src={Waldo} alt='Waldo' class='h-[10vh]' />
                    <span class='text-blue-500'>Where's</span>
                    <span class='text-red-500'>Waldo</span>
                </div>
                <Link to='/game'>
                    <button class='text-black bg-[#1da1f2] w-20 rounded-xl
          hover:-translate-y-1 hover:scale-110  hover:text-red-400'> Start Game </button>
                </Link>
            </h1>
        </div>
    )
}

export default Header
