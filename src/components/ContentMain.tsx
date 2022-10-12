import React from 'react'
import AnimationWithTopText from './AnimationWithTopText'
import ThreeLayerDescription from './ThreeLayerDescription'

const ContentMain = () => {
  return (
    <section id='content'>
      <div className="flex flex-col justify-center items-center">
        <div className='flex flex-row'>
          <AnimationWithTopText />
          <ThreeLayerDescription />
        </div>
      </div>
    </section>
  )
}

export default ContentMain
