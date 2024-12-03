import React from 'react'




const Contact = () => {
  return (
    <section id='contact' className='flex flex-col  px-5  text-white py-32 bg-home '>

      <div className=' flex flex-col items-center  '>

        <h1 className='text-4xl  border-b-4 mb-5 w-[135px] font-bold border-[#2e1247] '>Contact</h1>
        <p className='text-xl pb-5'>If you want to discuss more in detail , kindly please contact me.</p>
        <p className='py-2   md:text-[20px]'><span className=' font-bold'>Email </span>:<a href='mailto:kaneeshafathima2003@gmail.com'> kaneeshafathima2003@gmail.com</a></p>
        <p className='py-2 md:text-[20px]'><span className='font-bold'>Phone :</span><a href='tel:"+918925715330"'> +918925715330</a></p>



      </div>
    </section>
  )
}

export default Contact;