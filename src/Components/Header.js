import React from 'react'
import Waldo from '../Images/Waldo.jpg'

const Header = () => {

    return (
        <div className='flex items-center justify-around gap-4 text-white'>
            <h1 class='flex items-center'>
                <img src={Waldo} alt='Waldo' class='h-[10vh]'/>
                <span class='text-blue-500'>Where's</span>
                <span class='text-red-500'>Waldo</span>
            </h1>
        </div>
    )
}

export default Header
