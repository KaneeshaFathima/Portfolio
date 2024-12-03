import React from 'react'
import about from '../assets/stand.webp'

const About = () => {
  return (
    <section id="about" className='flex flex-col md:flex-row px-5 bg-about  '>
      <div className=' py-5 md:w-1/2 px-4 '>
        < img src={about} className='opacity-150 md:h-[550px]' />
      </div>
      <div className='md:w-1/2 flex justify-center  '>
        <div className='flex flex-col justify-center  text-white '>
          <h1 className='text-4xl  border-b-4 mb-5 w-[170px]  font-bold border-[#220f46] '>About Me</h1>
          <p className='text-xl pb-5'>Hi, I’m Kaneesha Fathima, a Full Stack Developer with a B.Sc. in Mathematics. I’m passionate about both frontend and backend development.</p>
          <p className='text-xl pb-5'>In Frontend, I work with HTML, CSS, JavaScript, and ReactJS to build clean and responsive user interfaces.</p>
          <p className='text-xl pb-5'>In Backend ,I use Java, Spring Boot, and MySQL for building backend services, and I’m familiar with Servlet and JSP for server-side development.</p>
          <p className='text-xl pb-5'>I’m eager to apply my skills, learn new technologies, and grow as a developer.</p>

        </div>


      </div>
    </section>



  )
}

export default About;

