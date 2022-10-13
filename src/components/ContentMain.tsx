import React from 'react'
import AnimationWithTopText from './AnimationWithTopText'
import ThreeLayerDescription from './ThreeLayerDescription'


const ContentMain = () => {
  return (
    <section id='content'>
      <div className="flex flex-col justify-center items-center">
        <div className='flex flex-row flex-wrap justify-center'>
          <AnimationWithTopText text="protect" bgImage="bg-[url('.././assets/animation1.png')]" />
          <div className='lg:w-[54px]'></div>
          <ThreeLayerDescription height="sm:h-[410px] h-[366px]" width="w-[529px]" firstLayer="Earn risk-adjusted yields with protected loans." secondLayer="To earn risk-adjusted yields, you can lend money in under- collateralized loans protocols with protection." thirdLayer="Protected Loans"/>
        </div>
      <div className='lg:h-[52px] h-[97px]'></div>
      <div className='flex flex-row flex-wrap-reverse lg:flex-wrap justify-center'>
          <ThreeLayerDescription height="sm:h-[430px] h-[364px]" width="w-[526px]" firstLayer="Earn yields by providing capital for credit default risks." secondLayer="You can earn yields by providing capital for default risks in under-collateralized loans." thirdLayer="Providing Capital for Sellers"/>
          <div className='lg:w-[54px]'></div>
          <AnimationWithTopText text="earn" bgImage="bg-[url('.././assets/animation2.png')]" />
        </div>
      </div>
    </section>
  )
}

export default ContentMain
