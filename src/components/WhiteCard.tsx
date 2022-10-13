import React from 'react'

const WhiteCard = (props) => {
  return (
    <div className="w-[163px] md:w-[282.43px] h-[79px] md:h-[138.18px] flex items-center justify-center bg-white rounded-[10px] md:rounded-[20px] shadow-[0_0_8px_0_rgba(0,0,0,0.2)]">
      {props.company}
    </div>
  )
}

export default WhiteCard
