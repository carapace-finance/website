import React from 'react'
import { PinkButton } from './Button/PinkButton'


const Hero = () => {
  return (
    <section id='home'>
      <div className="h-screen w-screen bg-[url('.././assets/hero.png')] bg-no-repeat bg-cover bg-center">
        <div className="flex flex-col justify-center items-center h-screen">
           <h1 className="tracking-tighter font-extrabold text-white text-9xl md:text-[180px] font-manrope">DeFy{" "}
            <br className='lg:hidden'/>
            <span className='tracking-[-0.02em] font-light text-7xl md:text-[150px]'>Defi Risk</span>
           </h1>
          <p className='font-semibold text-white text-[38px] leading-[44px] text-center tracking-[-0.02em] max-w-[750px] font-manrope mt-0 mb-[59px]'>Invest in DeFi with protection against credit default risks.</p>
          <PinkButton
          fontSize="text-3xl"
          borderRadius="rounded-[200px]"
          text="Sign-up for our Beta App"
          paddingX="px-12"
          paddingY="py-7"
        />
        </div>
      </div>
    </section>
  )
}

export default Hero
