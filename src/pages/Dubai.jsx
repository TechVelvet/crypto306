import React, { useEffect, useState } from 'react';
import "../css/Home.css";
import Button from '../components/Button';
import Introduction from '../components/introduction';
import RoleCards from '../components/role-cards';
import Attendees from '../components/attendees';
import Partners from '../components/PreviousSponsors';
import EventTable from '../components/EventTable';
import CommunityPartners from '../components/CommunityPartners';
import MediaPartners from '../components/MediaPartners';  
import SpeakerCard from "../components/SpeakerCard"
import SpeakerCardM from '../components/SpeakerCardM';
import Sponsore from '../components/Sponsore';

const Dubai = ({selectedIndex}) => {
  const [mobile, setMobile] = useState(true);

  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth < 642) {
        setMobile(true);
      }
      else {
        setMobile(false)
      }
    }

    if (window.innerWidth < 642) {
      setMobile(true);
    }
    else {
      setMobile(false)
    }

    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
    }



  }, [])
  return (
    <>
      <section className='Container mx-8 2xl:mx-auto'>
        <div className='relative first-container-innerdiv overflow-x-hidden w-full h-[60vh] lg:h-[80vh] rounded-[35px] mt-10 hero-video p-2'>
          <div className='video-background pointer-events-none rounded-30 h-full overflow-hidden brightness-[.4]'>
            <iframe src="https://player.vimeo.com/video/882775811?background=1" frameBorder="0" allowFullScreen title='main-video'></iframe>
          </div>
          <div className="comingsoon-inner" style={{ top: "55%" }}>
            <div className="comingsoon-content h-full w-[60vw] mx-auto">
              <p className='sm:text-xl md:text-3xl lg:text-5xl'>08-09 May 2023, The Ritz-Carlton, Dubai</p>
            </div>
          </div>
        </div>
      </section>
      <Introduction />
      <Attendees />
      {
        mobile ? <SpeakerCardM selectedIndex = {selectedIndex}/> : <SpeakerCard selectedIndex = {selectedIndex}/>
      }
      <Partners selectedIndex = {selectedIndex}/>
      <Sponsore  selectedIndex = {selectedIndex}/>
      <CommunityPartners />
      <MediaPartners />
      <EventTable selectedIndex = {selectedIndex}/>
    </>
  )
}

export default Dubai