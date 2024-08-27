import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-black mx-auto my-9 w-2/3 border border-purple-400 border-spacing-1 rounded-full absolute'>
            <ul className='flex justify-around align-middle font-bold text-3xl py-6'>
                <li className='list-none hover:cursor-pointer hover:text-yellow-300'>About</li>
                <li className='list-none hover:cursor-pointer hover:text-yellow-300'>Skills</li>
                <li className='list-none hover:cursor-pointer hover:text-yellow-300'>Contacts</li>
            </ul>
        </div>
    )
}

export default Navbar
