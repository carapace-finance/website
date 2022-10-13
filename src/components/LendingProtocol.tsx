import React from 'react'
import assets from '../assets'

const LendingProtocol = () => {
  return (
    <section id='lendingProtocol'>
      <div className="h-screen w-screen bg-customDarkBlue flex flex-col items-center justify-center">
        <img className='w-[189px] sm:w-[215px] h-[85px] sm:h-[107px]' src={assets.eyeOpen} alt="open eye" />
        <div className='h-[55px] sm:h-[65px]'></div>
        <p className='font-manrope font-extrabold text-[42px] sm:text-[120px] leading-[50px] sm:leading-[125px] text-center tracking-tighter text-white m-0'>Lending Protocol?</p>
        <div className='h-[28px] sm:h-[36px]'></div>
        <p className='sm:max-w-full max-w-[348px] font-manrope font-medium text-[22px] sm:text-[32px] leading-[30px] sm:leading-[44px] text-center tracking-[0.01em] text-white m-0'>You are running a credit protocol and you want to work with us ? </p>
        <div className='h-[47px] sm:h-[67px]'></div>

      </div>
    </section>
  )
}

export default LendingProtocol
