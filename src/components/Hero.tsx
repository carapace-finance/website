import React from 'react'
import { PinkBorderButton } from './Button/PinkBorderButton'
import { PinkButton } from './Button/PinkButton'


const Hero = () => {
  return (
    <section id='home'>
      <div className="h-screen w-screen bg-[url('.././assets/heroBanner.gif')] bg-no-repeat bg-cover bg-center">
        <div className="flex flex-col justify-center items-center h-screen">
           <h1 className="tracking-tighter font-extrabold text-white text-9xl md:text-[180px] font-manrope">DeFy{" "}
            <br className='lg:hidden'/>
            <span className='tracking-[-0.02em] font-light text-7xl md:text-[150px]'>DeFi Risk</span>
           </h1>
          <p className='font-semibold text-white text-[30px] sm:text-[38px] leading-[34px] sm:leading-[44px] text-center tracking-[-0.02em] max-w-[300px] sm:max-w-[750px] font-manrope mt-16 mb-[79px] sm:mb-[59px] animate-text-focus-in'>Invest in DeFi with protection against credit default risk.</p>
          {/* Delete if uncecessary */}
          {/* <PinkButton
          fontSize="sm:text-[25.5px] text-lg"
          borderRadius="rounded-[200px]"
          text="Sign-up for Beta"
          paddingX="px-8 sm:px-8"
          paddingY="py-4 sm:py-4"
          href="https://xzpl2jauxb6.typeform.com/to/hSmuyZph"
        /> */}
        <PinkBorderButton
          fontSize="sm:text-[25.5px] text-lg"
          text="Sign-up for Beta"
          paddingX="px-8 sm:px-8"
          paddingY="py-4 sm:py-4"
          href="https://xzpl2jauxb6.typeform.com/to/hSmuyZph"
        />
        </div>
      </div>
    </section>
  )
}

export default Hero
