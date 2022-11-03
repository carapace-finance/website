import React from 'react'

const ThreeLayerDescription = (props) => {
  // change arrow
  // add href
  return (
    <div className={`flex flex-col justify-between ${props.height} ${props.width} text-center sm:text-left sm:max-w-max max-w-[350px] lg:mt-0 -mt-20`}>
      <p className='font-manrope font-extrabold text-4xl sm:text-5xl leading-[40px] sm:leading-[52px] tracking-tighter text-customDarkBlue m-0 '>{props.firstLayer}</p>
      <p className='font-manrope font-normal text-[22px] sm:text-3xl leading-[30px] sm:leading-[36px] text-customDarkBlue text-opacity-50 m-0'>{props.secondLayer}</p>
      <a className='hover:text-textPinkHover transition-all cursor-pointer font-manrope text-buttonPink font-bold text-2xl sm:text-[32px] leading-6 sm:leading-[32px] text-right'>
       <div className='flex flex-row items-center justify-end'>
       {/* <p className='m-0 mr-6' >More about<br />{props.thirdLayer}</p> */}
       {/* <p className='text-buttonPink hover:animate-slide'>→</p> */}
       </div>
      </a>
    </div>
  )
}

export default ThreeLayerDescription
