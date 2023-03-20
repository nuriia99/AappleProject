import React from 'react'
import Image from 'next/image'
import Button from './Button'

function Landing() {
  return (
    <section className='sticky top-0 h-screen max-w-[1350px] flex flex-row lg:justify-center items-center px-7 bg-[#E7ECEE]'>
      <div className='flex flex-col gap-2 py-64'>
        <span className='text-4xl lg:text-6xl tracking-wide font-semibold text-transparent bg-gradient-to-r bg-clip-text from-pink-500 to-violet-500'>Powered</span>
        <span className='text-4xl lg:text-6xl tracking-wide font-semibold'>By Intellect</span>
        <span className='text-4xl lg:text-6xl tracking-wide font-semibold'>Driven By Values</span>
        <div className='flex gap-5 py-5 items-center'>
          <Button title='Buy Now'/>
          <a className='text-lg link'>Learn more</a>
        </div>
      </div>
      <div className='relative w-[450px] h-[450px] overflow-hidden hidden transition-all duration-300 md:inline lg:h-[650px] lg:w-[650px]'>
        <Image src={'/iphone.png'} alt='iphoneLandingImage' fill style={{objectFit:'contain'}}/>
      </div>
    </section>
  )
}

export default Landing