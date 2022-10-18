import React from 'react'
import { supporters, supportingCompanies } from '.././constants'
import CircleAvatarWithName from './CircleAvatarWithName'
import WhiteCard from './WhiteCard'

const Supporters = () => {
  return (
    <section id='supporters'>
      <div className='flex flex-col justify-center items-center'>
        <p className='font-extrabold font-manrope text-4xl sm:text-[64px] leading-[18px] text-center tracking-tighter text-customDarkBlue mt-0 mb-7'>Our Supporters</p>
        <p className='font-normal font-manrope text-[22px] sm:text-[32px] leading-[44px] text-center tracking-[0.01em] text-customDarkBlue opacity-50'>Carapace is supported by top entrepreneurs and investors</p>
        <div className='h-[54px] sm:h-[75px]'></div>
        <div className='place-items-center'>
          <div className='hidden lg:grid place-items-center grid-cols-3 gap-x-[24px]'>
            <WhiteCard key={supportingCompanies[0].id} link={supportingCompanies[0].link} img={supportingCompanies[0].logo} title={supportingCompanies[0].title} />
            <WhiteCard key={supportingCompanies[1].id} link={supportingCompanies[1].link} img={supportingCompanies[1].logo} title={supportingCompanies[1].title} />
            <WhiteCard key={supportingCompanies[2].id} link={supportingCompanies[2].link} img={supportingCompanies[2].logo} title={supportingCompanies[2].title} />
          </div>
          <div className='hidden lg:grid place-items-center grid-cols-3 gap-x-[24px] mt-8'>
            <WhiteCard key={supportingCompanies[3].id} link={supportingCompanies[3].link} img={supportingCompanies[3].logo} title={supportingCompanies[3].title} />
            <WhiteCard key={supportingCompanies[4].id} link={supportingCompanies[4].link} img={supportingCompanies[4].logo} title={supportingCompanies[4].title} />
            <WhiteCard key={supportingCompanies[5].id} link={supportingCompanies[5].link} img={supportingCompanies[5].logo} title={supportingCompanies[5].title} />
          </div>
          <div className='lg:hidden grid place-items-center grid-cols-2 gap-x-[24px]'>
            <WhiteCard key={supportingCompanies[0].id} link={supportingCompanies[0].link} img={supportingCompanies[0].logo} title={supportingCompanies[0].title} />
            <WhiteCard key={supportingCompanies[1].id} link={supportingCompanies[1].link} img={supportingCompanies[1].logo} title={supportingCompanies[1].title} />
          </div>
          <div className='lg:hidden grid place-items-center grid-cols-2 gap-x-[24px] mt-8'>
            <WhiteCard key={supportingCompanies[2].id} link={supportingCompanies[2].link} img={supportingCompanies[2].logo} title={supportingCompanies[2].title} />
            <WhiteCard key={supportingCompanies[3].id} link={supportingCompanies[3].link} img={supportingCompanies[3].logo} title={supportingCompanies[3].title} />
          </div>
          <div className='lg:hidden grid place-items-center grid-cols-2 gap-x-[24px] mt-8'>
            <WhiteCard key={supportingCompanies[4].id} link={supportingCompanies[4].link} img={supportingCompanies[4].logo} title={supportingCompanies[4].title} />
            <WhiteCard key={supportingCompanies[5].id} link={supportingCompanies[5].link} img={supportingCompanies[5].logo} title={supportingCompanies[5].title} />
          </div>
          <div className='h-[20px]'></div>
        <div className='hidden lg:grid place-items-center grid-cols-3 gap-x-[24px]'>
          {supporters.map((supporter, _) => (
            <CircleAvatarWithName link={supporter.link} id={supporter.id} profile={supporter.profile} title={supporter.title} />
          ))}
        </div>
        <div className='grid lg:hidden grid-cols-2 gap-x-[24px]'>
            <CircleAvatarWithName link={supporters[0].link} id={supporters[0].id} profile={supporters[0].profile} title={supporters[0].title} />
            <CircleAvatarWithName link={supporters[1].link} id={supporters[1].id} profile={supporters[1].profile} title={supporters[1].title} />
        </div>
        <div className='grid lg:hidden grid-cols-1 gap-x-[24px]'>
            <CircleAvatarWithName link={supporters[2].link} id={supporters[2].id} profile={supporters[2].profile} title={supporters[2].title} />
        </div>
        <div className='grid place-items-center grid-cols-1 gap-x-[24px] mt-16 text-customDarkBlue opacity-50 font-normal font-manrope text-[22px] sm:text-[26px]'>
            and many more...
        </div>
        </div>
      </div>
    </section>
  )
}

export default Supporters
