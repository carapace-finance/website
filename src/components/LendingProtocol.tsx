import React from 'react'
import assets from '../assets'

const LendingProtocol = () => {
  return (
    <section id='lendingProtocol'>
      <div className="h-screen w-screen bg-customDarkBlue flex flex-col items-center justify-center">
        <img className='w-[189px] sm:w-[215px] h-[85px] sm:h-[107px]' src={assets.eyeOpen} alt="open eye" />
        <div className='h-[65px]'></div>
        <p className='font-manrope font-extrabold text-[42px] sm:text-[120px] leading-[125px] text-center tracking-tighter text-white m-0'>Lending Protocol?</p>
        <p className='font-manrope font-extrabold text-[42px] sm:text-[120px] leading-[125px] text-center tracking-tighter text-white m-0'>You are running a credit protocol and you want to work with us ? </p>


      </div>
    </section>
  )
}

export default LendingProtocol
