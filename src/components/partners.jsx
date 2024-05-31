import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ImageField from './ImageField';
import data from "../assests/json/data.json";
import DubaiData from '../assests/json/DubaiData.json';

function Partners({ selectedIndex }) {

    const viewPoint = document.getElementById("partners");

    if (selectedIndex === 2) {
        viewPoint.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    const location = useLocation();
    const dataArray = location.pathname === '/Dubai' ? DubaiData : data;
    return (
        <>
            <section id='partners' className='bg-maincolor pb-16 scroll-m-7'>
                <h1 className='text-center text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-gillRoy700 py-10 sm:py-12 md:py-20 lg:py-[100px]'>Previous Sponsors</h1>
                <div className='PreviousSponsers'>
                    <div className="media-images mx-auto mt-4 sm:px-10 max-w-[1080px] flex justify-center gap-5 flex-wrap">
                        {data.PreviousSponsors.map((card, index) => (
                            <div className="flip-card bg-transparent w-[140px] h-[140px] rounded-30" key={index}>
                                <div className="flip-card-inner relative w-full h-full text-center transition-transform duration-[0.8s]">
                                    <div className="flip-card-front cards-basics p-3 bg-white border-none text-black flex flex-col justify-center rounded-30 shadow-flipfront">
                                        <ImageField taggedElem={card.partnerImage} alt="no image found for partner" className="rounded-20" />
                                    </div>
                                    <div className="flip-card-back cards-basics justify-between bg-[#00667C] text-white rounded-30 p-5 items-center" style={{ display: "flex", flexDirection: "column" }}>
                                        <p className='capitalize text-center font-gillRoy700 text-base leading-tight'>{card.partnerName}</p>
                                        <Link to={card.website} target="_blank" rel="noopener noreferrer">
                                            <button className="website-btn bg-[#21C3E7] border-none text-xs py-1 px-4 rounded-full text-white font-gillRoy700 mt-1 inline-flex justify-center items-start">Website</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Partners
