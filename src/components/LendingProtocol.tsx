import React from 'react'
import assets from '../assets'
import { PinkBorderButton } from './Button/PinkBorderButton'

const LendingProtocol = () => {
  return (
    <section id='lendingProtocol'>
      <div className="h-full w-screen bg-customDarkBlue flex flex-col items-center justify-center">
        <div className='h-[73px] sm:h-[121px]'></div>
        <img className='w-[189px] sm:w-[215px] h-[85px] sm:h-[107px]' src={assets.eye} alt="lending protocol" />
        <div className='h-[55px] sm:h-[65px]'></div>
        <p className='font-manrope font-extrabold text-[42px] sm:text-[120px] leading-[50px] sm:leading-[125px] text-center tracking-tighter text-white m-0'>Lending Protocol?</p>
        <div className='h-[28px] sm:h-[36px]'></div>
        <p className='sm:max-w-full max-w-[348px] font-manrope font-medium text-[22px] sm:text-[32px] leading-[30px] sm:leading-[44px] text-center tracking-[0.01em] text-white m-0'>Are you running a credit protocol and looking to work with us ?</p>
        <div className='h-[65px] sm:h-[67px]'></div>
        <PinkBorderButton
          text="Let's chat"
          href="https://discord.gg/f34GS9uheN"
          paddingX="px-[65px] sm:px-[55px]"
          paddingY="py-[10px] sm:py-[27px]"
          fontSize="text-lg sm:text-3xl"
        />
        <div className='h-[91px] sm:h-[151px]'></div>
      </div>
    </section>
  )
}

export default LendingProtocol
