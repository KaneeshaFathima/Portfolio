import React from 'react';
import weather from '../assets/wetherapi.jpg';
import ecommerce from '../assets/ecommerce.jpg';
import { Link } from 'react-router-dom';
import Workinprogress from './Workinprogress';


const Project = () => {
  return (
    <section id="project" className='flex flex-col px-5 py-20 justify-center  bg-home text-white'>
      <div className='w-full '>
        <div className='flex flex-col px-10 py-5'>
          <h1 className='text-4xl  border-b-4 mb-5 w-[150px]  font-bold border-[#220f46]'>Projects</h1>
          <p className='text-[20px]'>I’ve built full-stack applications, including a weather app and an e-commerce platform, using ReactJS, Spring Boot, and MySQL. These projects highlight my skills in front-end development, API integration, and backend management.</p>
        </div>
      </div>
      <div className='w-full'>
        <div className=' flex flex-col md:flex-row px-10  gap-12'>
          <div className='relative'>
            <Link to="https://weather-api-rosy-five.vercel.app/">
              <img className='   md:w-[550px]' src={weather} />
              <div className='  projectdesc'>
                <p className=' hidden md:block text-center  md: px-5 py-5 md:text-xl '>
                  An interactive weather API project built with React.js that allows users to check real-time weather updates by searching for any city.</p>

              </div>
            </Link>
          </div>

          <div className='relative'>
            <Link to="/workinprogress">
              <img className='md:w-[520px]' src={ecommerce} />
              <div className='projectdesc'>
                <p className=' hidden md:block text-center md:px-5 py-5  md:text-xl'> Full-stack e-commerce site (in progress) built with ReactJS, Spring Boot, and MySQL, featuring a responsive UI, secure authentication and product management. Check back soon for updates.</p>
              </div>
            </Link>
          </div>


        </div>
      </div>
    </section>






  )
}

export default Project