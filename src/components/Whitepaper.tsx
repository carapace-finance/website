import React from 'react'
import PageContent from './PageContent'
import PageSidebar from './PageSidebar'

const WhitePaper = () => {
  return (
    <section id='whitepaper'>
      <div className='grid grid-cols-10'>
        <PageSidebar />
        <PageContent />
      </div>
    </section>
  )
}

export default WhitePaper
