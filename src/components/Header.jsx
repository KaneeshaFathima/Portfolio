import React from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <header className='flex px-5 justify-between bg-color py-3 '>
            <h3 className=' text-2xl font-bold text-gray-200 '>Kaneesha <span className='text-amber-500 '>Fathima</span></h3>
            <nav className='hidden md:block'>
                <ul className='flex text-xl text-white '>
                    <li><a href='/'>Home</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#resume'>Resume</a></li>
                    <li><a href='#project'>Projects</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
            </nav>
            {toggleMenu && <nav className=' block md:hidden '>
                <ul onClick={() => setToggleMenu(!toggleMenu)} className='flex flex-col text-white mobile-nav'>
                    <li><a href='/'>Home</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#project'>Projects</a></li>
                    <li><a href='#resume'>Resume</a></li>
                    <li><a href='#contact'>Contact</a></li>

                </ul>
            </nav>}


            <button className='block md:hidden' onClick={() => setToggleMenu(!toggleMenu)} ><Bars3Icon className='text-white h-5' /></button>
        </header>
    )
}

export default Header