import React from 'react'
import "../css/ErrorPage.css"

const ErrorPage = () => {
  return (
    <>
      <section className='Container mx-8 2xl:mx-auto'>
        <div className='relative first-container-innerdiv overflow-x-hidden w-full h-[60vh] lg:h-[80vh] rounded-[35px] mt-10 hero-video p-2'>
          <div className='video-background pointer-events-none rounded-30 h-full overflow-hidden brightness-[.4]'>
            <iframe src="https://player.vimeo.com/video/882775811?background=1" frameBorder="0" allowFullScreen title='main-video'></iframe>
          </div>
          <div className="comingsoon-inner" style={{ top: "55%" }}>
            <div className="comingsoon-content h-full w-[60vw] mx-auto">
              <p className='sm:text-xl md:text-3xl lg:text-5xl'>Meet The Crypto Universe Revolution</p>
            </div>
          </div>
          <div className='absolute bottom-5 right-6 md:bottom-[36px] md:right-[76px]'>
            <p className='text-[9px] lg:text-[16px] text-maincolor font-Livvik flex items-center font-bold'>Hosted by
              <span className='text-base lg:text-3xl'><span className='text-white'>&nbsp; CURRENCY</span>306</span>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default ErrorPage