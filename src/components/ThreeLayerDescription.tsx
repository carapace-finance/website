import React from 'react'

const ThreeLayerDescription = (props) => {
  // change arrow
  // add href
  return (
    <div className={`flex flex-col justify-between ${props.height} ${props.width}`}>
      <p className='font-manrope font-extrabold text-5xl leading-[52px] tracking-tighter text-customDarkBlue m-0'>{props.firstLayer}</p>
      <p className='font-manrope font-normal text-3xl leading-[36px] text-customDarkBlue text-opacity-50 m-0'>{props.secondLayer}</p>
      <a className='hover:text-textPinkHover cursor-pointer font-manrope text-buttonPink font-bold text-[32px] leading-[32px] text-right'>
      <div className='flex flex-row items-center justify-end'>
      <p className='m-0 mr-6' >More about<br />{props.thirdLayer}</p>
      →
      </div>
      </a>
    </div>
  )
}

export default ThreeLayerDescription
