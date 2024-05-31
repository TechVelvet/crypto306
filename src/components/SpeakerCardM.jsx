import ImageField from "./ImageField";
import { Link, useLocation } from "react-router-dom";
import linkedin from "../assests/svgs/linkedin.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import data from '../assests/json/data.json';
import DubaiData from '../assests/json/DubaiData.json';

const SpeakerCardM = ({ selectedIndex }) => {

    const viewPoint = document.getElementById("speakerCards");

    if (selectedIndex === 0) {
        viewPoint.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    const location = useLocation();
    return (
        <>
            <section id="speakerCards" className="pb-32 scroll-m-9">
                <h1 className='text-center text-maincolor text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-gillRoy700 py-10 sm:py-12 md:py-20 lg:py-[100px]'>Speakers</h1>
                <Carousel
                    additionalTransfrom={0}
                    arrows={true}
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="container"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite={false}
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={true}
                    renderDotsOutside

                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1174
                            },
                            items: 5,
                            partialVisibilityGutter: 40,
                            slidesToSlide: 5
                        },
                        laptop: {
                            breakpoint: {
                                max: 1173,
                                min: 768
                            },
                            items: 4,
                            partialVisibilityGutter: 30,
                            slidesToSlide: 4
                        },
                        tablet: {
                            breakpoint: {
                                max: 959,
                                min: 576
                            },
                            items: 3,
                            partialVisibilityGutter: 30,
                            slidesToSlide: 3

                        },
                        mobile: {
                            breakpoint: {
                                max: 556,
                                min: 0
                            },
                            items: 2,
                            partialVisibilityGutter: 30,
                            slidesToSlide: 2
                        }
                    }}

                    rewind={true}
                    rewindWithAnimation={true}
                    rtl={false}
                    autoPlay
                    shouldResetAutoplay
                    showDots={true}
                    sliderClass=""
                    slidesToSlide={2}


                >
                    {
                        data.PrevSpeakersM.map((element, key) => (
                            <div className="main-inner flex  flex-col gap-y-4 w-fit h-fit mx-auto" key={key}>


                                <div className="bg-black w-40 h-60 md:h-fit md:w-fit relative rounded-xl ">
                                    <Link to={element.LinkedIn} target="_blank" rel="noopener noreferrer">
                                        <ImageField taggedElem={linkedin} className="absolute top-4 right-4 cursor-pointer z-30" />
                                    </Link>
                                    <ImageField taggedElem={element.speakerIcon} />

                                    <div className="flex flex-col text-center gap-0 md:gap-2  mt-4">
                                        <span className="text-white font-gillRoy700 md:text-base text-[11px] ">{element.speakerName}</span>
                                        <div className="mb-1 md:mb-4 *:text-cardtextcolor flex flex-col">
                                            <span className="text-xs md:text-sm font-gillRoy400">{element.speakerPosition}</span>
                                            <span className="text-[10px] md:text-xs font-gillRoy400 leading-tight">{element.speakerCompany}</span>
                                        </div>
                                    </div>
                                </div>

                                {element.speakerName1 && <div className="bg-black w-40 h-60 md:h-fit md:w-fit relative rounded-xl">
                                    <Link to={element.LinkedIn1} target="_blank" rel="noopener noreferrer">
                                        <ImageField taggedElem={linkedin} className="absolute top-4 right-4 cursor-pointer z-30" />
                                    </Link>
                                    <ImageField taggedElem={element.speakerIcon1} />

                                    <div className="flex flex-col text-center gap-0 md:gap-2  mt-4">
                                        <span className="text-white font-gillRoy700 md:text-base text-[11px] ">{element.speakerName1}</span>
                                        <div className="mb-1 md:mb-4 *:text-cardtextcolor flex flex-col">
                                            <span className="text-xs md:text-sm font-gillRoy400">{element.speakerPosition1}</span>
                                            <span className="text-[10px] md:text-xs font-gillRoy400 leading-tight">{element.speakerCompany1}</span>
                                        </div>
                                    </div>
                                </div>}


                                {element.speakerName2 && <div className="bg-black w-40 h-60 md:h-fit md:w-fit relative rounded-xl">
                                    <Link to={element.LinkedIn2} target="_blank" rel="noopener noreferrer">
                                        <ImageField taggedElem={linkedin} className="absolute top-4 right-4 cursor-pointer z-30" />
                                    </Link>
                                    <ImageField taggedElem={element.speakerIcon2} />

                                    <div className="flex flex-col text-center gap-0 md:gap-2  mt-4">
                                        <span className="text-white font-gillRoy700 md:text-base text-[11px] ">{element.speakerName2}</span>
                                        <div className="mb-1 md:mb-4 *:text-cardtextcolor flex flex-col">
                                            <span className="text-xs md:text-sm font-gillRoy400">{element.speakerPosition2}</span>
                                            <span className="text-[10px] md:text-xs font-gillRoy400 leading-tight">{element.speakerCompany2}</span>
                                        </div>
                                    </div>
                                </div>}
                            </div>
                        ))
                    }

                </Carousel>
            </section>
        </>
    );
};

export default SpeakerCardM;
