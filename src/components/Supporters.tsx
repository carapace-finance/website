import React from 'react'
import { supporters, supportingCompanies } from '.././constants'
import WhiteCard from './WhiteCard'

const Supporters = () => {
  return (
    <section id='supporters'>
      <div className='flex flex-col justify-center items-center'>
        <p className='font-extrabold font-manrope text-4xl sm:text-[64px] leading-[18px] text-center tracking-tighter text-customDarkBlue opacity-30 mt-0 mb-7'>Our Supporters</p>
        <p className='font-normal font-manrope text-[22px] sm:text-[32px] leading-[44px] text-center tracking-[0.01em] text-customDarkBlue opacity-30'>Carapace is supported by top entrepreneurs and investors</p>
        <div className='h-[54px] sm:h-[75px]'></div>
        <div className='grid grid-cols-2 lg:grid-cols-3 grid-rows-3 lg:grid-rows-2 gap-x-[24px] lg:gap-x-[29.57px] gap-y-[23px] lg:gap-y-[37.2px]'>
          {supportingCompanies.map((company, _) => (
            <div key={company.id}>
              <WhiteCard company={company.title} />
            </div>
          ))}
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-3 grid-rows-3 lg:grid-rows-2 gap-x-[24px] lg:gap-x-[29.57px] gap-y-[23px] lg:gap-y-[37.2px]'>
          {supporters.map((supporter, _) => (
            <div key={supporter.id}>
              <h1>{supporter.title}</h1>
              <img src={supporter.profile} alt="a" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Supporters
