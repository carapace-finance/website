import React from 'react'
import AnimationWithTopText from './AnimationWithTopText'
import ThreeLayerDescription from './ThreeLayerDescription'


const ContentMain = () => {
  return (
    <section id='content'>
      <div className="flex flex-col justify-center items-center">
        <div className='flex flex-row'>
          <AnimationWithTopText text="protect" bgImage="bg-[url('.././assets/animation1.png')]" />
          <ThreeLayerDescription firstLayer="Earn risk-adjusted yields with protected loans." secondLayer="To earn risk-adjusted yields, you can lend money in under- collateralized loans protocols with protection." thirdLayer="Protected Loans"/>
        </div>
                <div className='flex flex-row'>
          <ThreeLayerDescription />
          <AnimationWithTopText text="earn" bgImage="bg-[url('.././assets/animation2.png')]" />
        </div>
      </div>
    </section>
  )
}

export default ContentMain
