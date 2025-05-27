import React from 'react'
import mainData from '../../../../Mock/mainData'

const HomeMainAbout = () => {
  return (
    <div className='max-w-[1200px] mx-auto'>
      <div className='text-5xl w-[57%] text-center mx-auto text-[#d37643] font-[600] mt-30 mb-15'>
        Discover powerful features to elevate your reading.
      </div>
      <div className='flex flex-wrap justify-center max-w-[83%] lg:flex-nowrap lg:justify-center gap-14 lg:max-w-[100%] md:max-w-[83%]'>
        <div>
          {mainData.slice(0, 2).map(({ id, icon, title, text }) => (
            <div key={id} className={id === 1 ? 'mt-20' : ''}>
              <img src={icon} alt="" className='mb-8 mt-12' />
              <h2 className='text-[#d37643] text-xl mb-4'>{title}</h2>
              <p className='text-[#907a68] w-[310px]'>{text}</p>
            </div>
          ))}
        </div>

        <div>
          <img
            src={mainData.find(f => f.image)?.image}
            className='max-w-[432px] max-h-[510px]'
          />
        </div>

        <div>
          {mainData.slice(3).map(({ id, icon, title, text }) => (
            <div key={id} className={id === 1 ? 'mt-20 ' : ''}>
              <img src={icon} alt="" className='mb-8 mt-12' />
              <h2 className='text-[#d37643] text-xl mb-4'>{title}</h2>
              <p className='text-[#907a68] w-[310px]'>{text}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default HomeMainAbout