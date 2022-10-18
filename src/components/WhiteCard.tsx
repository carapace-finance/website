import React from 'react'

const WhiteCard = (props) => {
  return (
  <a href={props.link} target="_blank">
    <div className="w-[163px] md:w-[282.43px] h-[79px] md:h-[138.18px] flex items-center justify-center bg-white rounded-[10px] md:rounded-[20px] shadow-[0_0_8px_0_rgba(0,0,0,0.2)] cursor-pointer">
      <div className='w-[163px] md:w-[282.43px] h-[79px] md:h-[138.18px] flex items-center justify-center grayscale hover:brightness-0'>
        <img src={props.img} alt={props.title} className="max-w-[120px] md:max-w-[220px] max-h-[25px] md:max-h-[40px]" />
      </div>
    </div>
  </a>
  )
}

export default WhiteCard
