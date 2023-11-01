import React from 'react'
import arrow from "../assets/arrow.svg"
import bg from "../assets/bg.svg"
const Hero = () => {
  return (
    <div className='mx-4 flex flex-col items-center gap-10'>
      <img className='absolute top-0 right-0 z-0' src={bg} />
      {/* <div className='md:w-[39px] md:h-[40px] w-[0px] h-[0px] bg-[#D9D9D9] absolute right-9 z-10'></div>
      <div className='md:w-[112px] md:h-[40px] w-[0px] h-[0px] bg-[#D9D9D9] absolute left-56 top-64 z-10'></div> */}
      <div className='text-center md:text-7xl text-5xl font-bold leading-tight head pt-12 z-10'>Simple.<br/> World Class.<br/> Affordable.</div>
      <div className='md:w-7/12 md:text-4xl text-3xl spacefont text-center leading-tight z-10'>
        Your Trusted Tech Partner for 
        Growing and Optimizing your business 
        through curated IT solutions. 
      </div>
      <div className='z-10'><a href="#contact"  className='flex z-10 md:text-2xl text-xl gap-4 items-center border-2 px-6 py-4 rounded-2xl'>Let's Connect <img src={arrow} className='z-10 md:w-[100px] w-[50px]' alt=".." /></a></div> 
    </div>
  )
}

export default Hero
