import React from 'react'

const CircleAvatarWithName = (props) => {
  return (
    <div className='flex flex-col items-center justify-center' key={props.id} >
      <img className='grayscale rounded-full h-[60px] sm:h-[68px] w-[60px] sm:w-[68px] object-cover object-center opacity-50' src={props.profile} alt="supporter" />
      <div className='sm:h-[33px] h-4'></div>
      <p className='font-manrope font-medium text-customDarkBlue text-opacity-30 text-[16px] sm:text-3xl leading-[18px] tracking-[0.01em] text-center m-0'>{props.title}</p>
    </div>
  )
}

export default CircleAvatarWithName