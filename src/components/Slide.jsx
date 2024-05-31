import React from "react";
import "./Slide.css";

export const Slide = React.memo(function (StackedCarouselSlideProps) {
  const { data, dataIndex, isCenterSlide, swipeTo, slideIndex, setOpen, isOpen, setVideoId} = StackedCarouselSlideProps;
  
  const coverImage = data[dataIndex].image;
  const videoUrl = data[dataIndex].urlId;
  
  

  return (
    <>
      <div className={`card-card ${isCenterSlide ? 'center' : ''}`} draggable={false}>
        <div className={`cover fill ${isCenterSlide ? "off" : "on"}`}>
        <div
          className="card-overlay fill"
          onClick={() => {
            if (!isCenterSlide) swipeTo(slideIndex);
          }}
        />
      </div>
        <div className="discription select-none">

          <img src={coverImage} alt="error" className="cover-image"
            onClick={()=> {setOpen(!isOpen); setVideoId(videoUrl)}}
          />
          <div className="shadow-div"></div>
        </div>

      </div>
        
    </>
  );
});
