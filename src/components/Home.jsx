import React from 'react';
import home from '../assets/home1.gif';
import { AiOutlineLinkedin } from "react-icons/ai"
import { BsGithub } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";


const Home = () => {
  return (
    <section className='flex flex-col md:flex-row px-5 py-32 bg-home justify-center '>
      <div className='md:w-1/2 flex flex-col'>
        <h1 className=' text-bold text-white text-6xl px-2 font-home-font'>Hi, <br /> I'm a<span className="text-pink-500"> Kaneesha </span>Fathima
          <p className='text-2xl text-gray-200'>I'm a Java FullStack Developer</p>
        </h1>
        <div className='flex py-10  '>
          <a href="https://www.linkedin.com/in/kaneeshafathima01/" className='pr-5 hover:text-amber-600'> <AiOutlineLinkedin size={40} /> </a>
          <a href="https://github.com/KaneeshaFathima" className='hover:text-amber-600 pr-5'> <BsGithub size={40} /> </a>
          <a href="mailto:kaneeshafathima2003@gmail.com" className='hover:text-amber-600'> <MdOutlineMailOutline size={40} /> </a>
        </div>
      </div>
      <img className=" md:w-1/3" src={home} />

    </section>
  )
}

export default Home
