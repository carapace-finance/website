import React from 'react'


const AnimationWithTopText = (props) => {
  return (
    <div className={`${props.bgImage} bg-no-repeat bg-contain bg-center w-[290px] sm:w-[570px] h-[413px] sm:h-[615px]`}>
      <p className='font-semibold text-[54px] sm:text-[70px] leading-[50px] text-center tracking-[-0.01em] m-0'>
        {props.text}
      </p>
    </div>
  )
}

export default AnimationWithTopText
