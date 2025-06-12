import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import footerLinks from '../../Mock/footerlink'

const Footer = () => {
  return (
    <div className='bg-[#d37643] mt-30'>
      <div className='max-w-[1200px] mx-auto px-4 py-16'>
        <div className='flex flex-col lg:flex-row flex-wrap gap-10 justify-between'>
          <div className='w-full lg:w-[250px]'>
            <Link to='/'><img src="/whitelogo.svg" alt="Logo" className='pb-5 w-[150px]' /></Link>
            <p className='text-[#f2eadc] max-w-[380px] pb-5'>
              Velit venenatis mauris commodo malesuada pulvinar nunc. Purus facilisis dolor viverra magna elementum proin ornare semper.
            </p>
            <div className='flex items-center gap-4 mt-5 text-2xl text-[#ffffff]'>
              <FaFacebookSquare />
              <FaLinkedin />
              <FaInstagramSquare />
              <FaSquareXTwitter />
            </div>
          </div>
          {footerLinks.map((section, index) => (
            <div key={index} className='flex flex-col gap-3 min-w-[140px]'>
              <h3 className='text-white font-semibold mb-2'>{section.title}</h3>
              {section.links.map((link, i) => (
                <Link key={i} to="/" className='text-[#f2eadc] hover:underline'>
                  {link}
                </Link>
              ))}
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Footer
