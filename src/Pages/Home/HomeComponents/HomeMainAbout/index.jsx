import React from 'react'

const HomeMainAbout = () => {
  return (
    <div className='max-w-[1200px] mx-auto'>
      <div className='text-5xl w-[57%] text-center mx-auto text-[#d37643] font-[600] mt-30 mb-15'>
        Discover powerful features to elevate your reading.
      </div>
      <div className=' flex flex-wrap justify-center max-w-[83%] lg:flex-nowrap lg:justify-center gap-14 lg:max-w-[100%] md:max-w-[83%] '>
        <div>
          <div>
            <img src="/tick.svg" alt="" className='mb-8' />
            <h2 className='text-[#d37643] text-xl mb-4'>
              Best quality
            </h2>
            <p className='text-[#907a68] w-[310px] '>
              Interdum est tortor sodales facilisis nulla. Turpis sapien neque id ac tortor. Nunc nunc et ut neque.
            </p>
          </div>
          <div className='mt-20'>
            <img src="/mastericon.svg" alt="" className='mb-8' />
            <h2 className='text-[#d37643] text-xl mb-4'>
              Simple to Master
            </h2>
            <p className='text-[#907a68] w-[310px] '>
              Quam tincidunt erat phasellus faucibus. Ipsum congue fermentum nulla urna sed. Pretium leo diam eu lectus.
            </p>
          </div>
        </div>
        <div>
          <img src="/books.webp" alt="" className='max-w-[432px] max-h-[510px]' />
        </div>
        <div>
          <div>
            <img src="/papericon.svg" alt="" className='mb-8' />
            <h2 className='text-[#d37643] text-xl mb-4'>
              Manuscript Style
            </h2>
            <p className='text-[#907a68] w-[310px] '>
              Morbi et ultrices aliquam at. Purus enim arcu vitae mauris donec aliquam a sed. Urna nunc gravida nunc eget in.
            </p>
          </div>
          <div className='mt-20'>
            <img src="/heartbookicon.svg" alt="" className='mb-8' />
            <h2 className='text-[#d37643] text-xl mb-4'>
              Fast and Welcoming
            </h2>
            <p className='text-[#907a68] w-[310px] '>
              Odio morbi semper mauris vel id ipsum imperdiet. Duis habitant lorem volutpat fringilla sagittis purus amet dui pharetra.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeMainAbout