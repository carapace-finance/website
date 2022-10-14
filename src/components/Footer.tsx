import React from 'react'
import assets from '../assets'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <section id='footer'>
      <div className="h-[61px] lg:h-[100px]"></div>
      <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start'>

        <div className='flex flex-col w-[338px] lg:w-[278px] mr-0 lg:mr-[152px] items-center lg:items-start'>
          <img src={assets.footerLogo} alt="carapace" className='w-[180px]'/>
          <p className='font-manrope font-normal text-[22px] sm:text-xl leading-[27px] text-center lg:text-left tracking-[0.01em] text-black opacity-40 mb-0 mt-12'>Accelerate the world's transition to decentralized finance by re-imagining how we manage credit.</p>
        </div>

        <div className='flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between w-[260px] md:w-[797px]'>
          {footerLinks.map((footerlink, index) => (
          <div key={footerlink.title} className={`flex flex-col my-4 sm:first:my-4 first:mt-[30px] items-center lg:items-start`}>
            <hr className={`w-[260px] lg:hidden ${
                    index !== 0 ? "opacity-30" : "opacity-0"
                  }`}/>
            <h4 className="font-semibold text-[22px] sm:text-[20px] text-black mt-8 md:mt-14">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-6 md:mt-14">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`list-none font-manrope font-normal text-[20px] sm:text-[22px] leading-[30px] text-center lg:text-left cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  <a href={link.link} target="_blank" className='transition-all hover:text-black hover:no-underline hover:opacity-100 opacity-30'>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        </div>
      </div>
      <div className='h-[60px] lg:h-[339px]'></div>
      <div className="bg-[url('.././assets/footer.png')] bg-no-repeat bg-cover bg-center w-full h-[173px] xl:h-[107px] flex flex-col lg:flex-row items-center justify-center">
        <div className='flex lg:flex-1'>
          <img src={assets.footerCarapace} alt="carapace" className='ml-0 lg:ml-[66px] h-[41px] w-[240px]'/>
        </div>
          <p className='font-manrope font-medium text-white text-[18px] sm:text-[22px] leading-[30px] mr-0 lg:mr-[60px] my-2'>Copyright © {new Date().getFullYear()}</p>
      </div>
    </section>
  )
}

export default Footer
