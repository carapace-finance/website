import React from 'react'

const CircleAvatarWithName = (props) => {
  return (
    <a href={props.link} target="_blank" className='hover:no-underline mt-[20px] lg:mt-[50px]'>
    <div className='flex flex-col items-center justify-center text-opacity-30 opacity-50 hover:opacity-100' key={props.id} >
      <img className='grayscale rounded-full h-[60px] sm:h-[68px] w-[60px] sm:w-[68px] object-cover object-center' src={props.profile} alt="supporter" />
      <div className='sm:h-[33px] h-4'></div>
      <p className='font-manrope font-medium text-customDarkBlue text-[16px] sm:text-3xl leading-[18px] tracking-[0.01em] text-center m-0'>{props.title}</p>
    </div>
    </a>
  )
}

export default CircleAvatarWithName
