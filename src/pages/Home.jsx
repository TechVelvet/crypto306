import React, { useEffect, useState } from 'react';
import "../css/Home.css";
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Introduction from '../components/introduction';
import RoleCards from '../components/role-cards';
import Attendees from '../components/attendees';
import Partners from '../components/PreviousSponsors';
import PreviousSponsors from '../components/partners';
import EventTable from '../components/EventTable';
import CommunityPartners from '../components/CommunityPartners';
import MediaPartners from '../components/MediaPartners';
import Interviews from '../components/Interviews';
import SpeakerCard from "../components/SpeakerCard"
import SpeakerCardM from '../components/SpeakerCardM';


const Home = ({selectedIndex}) => {
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
              <p className='text-xl sm:text-2xl md:text-3xl lg:text-5xl'>Meet The Crypto Universe Revolution</p>
            </div>
          </div>
        </div>
        <div className='hero-text text-center mt-12 mb-10'>
          <h3 className='flex items-center flex-col lg:block text-lg font-gillRoy700 text-maincolor'>
            <span>
              This October, 2024
            <span className='font-gillRoy400 text-black'>&nbsp;- Dubai</span>
            </span>
            <Button className="button font-gillRoy700 bg-maincolor text-white ms-6 w-fit">Book Ticket Now</Button>
          </h3>
        </div>
      </section>
      <Introduction />
      <RoleCards />
      <Attendees />
      {
        mobile ? <SpeakerCardM selectedIndex = {selectedIndex}/> : <SpeakerCard selectedIndex = {selectedIndex}/>
      }
      <Partners selectedIndex = {selectedIndex}/>
      <PreviousSponsors selectedIndex = {selectedIndex}/>
      <CommunityPartners />
      <MediaPartners />
      <Interviews />
      {/* <EventTable selectedIndex = {selectedIndex}/> */}
    </>
  )
}

export default Home