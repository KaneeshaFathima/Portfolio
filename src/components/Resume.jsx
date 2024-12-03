import React from 'react'
import resume from '../assets/resume3.png'

const Resume = () => {
  return (
    <section id="resume" className='flex flex-col md:flex-row px-5 bg-resume '>
      <div className=' py-5 md:w-1/2 flex justify-end'>
        < img className='w-[580px]' src={resume} />
      </div>
      <div className='md:w-1/2 flex justify-center  '>
        <div className='flex flex-col justify-center  text-white '>
          <h1 className='text-4xl  border-b-4 mb-5 w-[135px]  font-bold border-[#472a6d] '>Resume</h1>
          <p className='text-xl pb-5'>
            I’m excited to start my professional journey! You can view and download my resume to learn more about my skills and projects.<br /></p>
          <a className='btn' href='#'>Download</a>

        </div>
      </div>
    </section>
  )
}






export default Resume