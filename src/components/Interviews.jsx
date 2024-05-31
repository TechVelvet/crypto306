import React, { useRef, useState, useEffect } from "react";
import "./Interviews.css";
import { Slide } from "./Slide";
import "./Slide.css";
import { StackedCarousel, ResponsiveContainer, } from "react-stacked-center-carousel";
import 'react-multi-carousel/lib/styles.css';
import data from '../assests/json/data.json';

// modal
import ModalVideo from "react-modal-video";


const Interviews = () => {

  const [videoId, setVideoId] = useState("fNM5V8frGyo");

  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const ref = useRef(StackedCarousel);
  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section id='Interviews' className=' pb-16 scroll-m-8'>
        <h1 className='text-center text-maincolor text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-gillRoy700 py-10 sm:pt-12 md:pt-20 md:pb-10 lg:pt-[100px] lg:pb-[70px]'>Interviews</h1>
        <div className="card" style={{ width: "100vw", marginTop: `${innerWidth > 768 ? "30px" : "0px"}` }}>
          <div style={{ display: "flex", justifyContent: "center", height: `${innerWidth > 768 ? "380px" : "250px"}`, overflow: "hidden", alignItems: "flex-start", position: "relative" }}>
            <ResponsiveContainer
              carouselRef={ref}
              render={(width, carouselRef) => {
                return (

                  <StackedCarousel

                    ref={carouselRef}
                    slideComponent={(props) => <Slide {...props} isOpen={isOpen} setOpen={setOpen} setVideoId={setVideoId} />}
                    slideWidth={innerWidth > 768 ? "fit-content" : 170}
                    carouselWidth={width}
                    data={data.Thumbnails}
                    maxVisibleSlide={5}
                    // customScales={[1, 1, 1, .2]}
                    transitionTime={450}

                  />
                );
              }}
            />

            <div className="buttons-div">
              <button onClick={() => { ref.current?.goBack(); }} >
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.208161 7.79926L6.01547 13.6065C6.14979 13.7409 6.32909 13.8149 6.52027 13.8149C6.71145 13.8149 6.89075 13.7409 7.02507 13.6065L7.45274 13.1789C7.73102 12.9003 7.73102 12.4475 7.45273 12.1693L2.5762 7.29277L7.45814 2.41082C7.59246 2.2764 7.66662 2.0972 7.66662 1.90613C7.66662 1.71484 7.59246 1.53564 7.45814 1.40111L7.03048 0.973659C6.89605 0.839236 6.71686 0.765183 6.52568 0.765183C6.3345 0.765183 6.1552 0.839236 6.02088 0.973659L0.208161 6.78617C0.0735267 6.92101 -0.000421157 7.10105 3.24448e-06 7.29245C-0.000421124 7.48459 0.0735268 7.66452 0.208161 7.79926Z" fill="#21C3E7" />
                </svg>
              </button>
              <button onClick={() => { ref.current?.goNext(6); }} >
                <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.27416 6.78033L2.46685 0.973125C2.33253 0.838703 2.15323 0.764648 1.96205 0.764648C1.77087 0.764648 1.59157 0.838703 1.45725 0.973125L1.02958 1.40069C0.751297 1.67929 0.751297 2.1321 1.02958 2.41028L5.90612 7.28682L1.02417 12.1688C0.889857 12.3032 0.815697 12.4824 0.815697 12.6735C0.815697 12.8648 0.889857 13.0439 1.02417 13.1785L1.45184 13.6059C1.58626 13.7404 1.76546 13.8144 1.95664 13.8144C2.14782 13.8144 2.32712 13.7404 2.46144 13.6059L8.27416 7.79343C8.40879 7.65858 8.48274 7.47854 8.48232 7.28714C8.48274 7.095 8.40879 6.91507 8.27416 6.78033Z" fill="#21C3E7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setOpen(false)}
      />
      </section>
      
    </>
  );
};

export default Interviews;
