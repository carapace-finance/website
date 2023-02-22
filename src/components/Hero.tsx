import Link from '@docusaurus/Link'
import React from 'react'

const Hero = () => {
  return (
    <section id='home'>
      <div className="h-screen w-screen bg-[url('.././assets/heroBanner.gif')] bg-no-repeat bg-cover bg-center">
        <div className="flex flex-col justify-center items-center h-screen">
           <h1 className="tracking-tighter font-extrabold text-white text-9xl md:text-[180px] font-manrope animate-slide-in-bottom text-center">Earn{" "}
            <br className='lg:hidden'/>
            <span className='tracking-[-0.02em] font-light text-7xl md:text-[150px] animate-slide-in-bottom'>to Protect</span>
           </h1>
          <p className='font-semibold text-white text-[30px] sm:text-[38px] leading-[34px] sm:leading-[44px] text-center tracking-[-0.02em] max-w-[300px] sm:max-w-[750px] font-manrope mt-16 mb-[79px] sm:mb-[59px] animate-text-focus-in'>Experience the future of credit investing with on-chain protection markets.</p>
        <Link href='/join-the-waitlist'>
          <button className={`border-4 border-buttonPink rounded-[200px] text-white tracking-[0.02em] text-transform: uppercase font-normal leading-[50px] text-center hover:bg-buttonPink hover:border-buttonPink ease-in-out duration-300 transition-all px-8 sm:px-8 py-4 sm:py-4 sm:text-[25.5px] text-lg`}>{'Sign-up for Early Access'}</button>
        </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
