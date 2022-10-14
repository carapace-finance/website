import React from 'react'
import assets from '../assets'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <section id='footer'>
      <div className="h-[61px] lg:h-[100px]"></div>
      <div className='flex flex-row justify-center'>

        <div className='flex-col w-[278px] mr-[152px]'>
          <img src={assets.footerLogo} alt="carapace" className='w-[180px]'/>
          <p className='font-manrope font-normal text-xl leading-[27px] text-left tracking-[0.01em] text-black opacity-40 mb-0 mt-12'>Accelerate the world's transition to decentralized finance by re-imagining how we manage credit.</p>
        </div>
        <div className='flex flex-row justify-between w-[750px] '>
          {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col my-4`}>
            <h4 className="font-semibold text-[20px] text-black mt-14">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-14">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`list-none font-manrope font-normal text-[22px] text-black opacity-30 leading-[30px] text-left hover:text-buttonPinkHover cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  <a href={link.link} target="_blank">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        </div>
      </div>
      <div className='h-[339px]'></div>
      <div className="bg-[url('.././assets/footer.png')] bg-no-repeat bg-cover bg-center w-full h-[107px] flex flex-row items-center">
        <div className='flex-1'>
          <img src={assets.footerCarapace} alt="carapace" className='ml-[66px] h-[41px] w-[240px]'/>
        </div>
          <p className='font-manrope font-medium text-white text-[22px] leading-[30px] mr-[60px]'>Copyright © {new Date().getFullYear()}</p>
      </div>
    </section>
  )
}

export default Footer
/*
const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="hoobank"
          className="w-[266px] h-[72.14px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2022 HooBank. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);
*/
