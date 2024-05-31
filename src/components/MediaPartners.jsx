import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ImageField from './ImageField';
import data from "../assests/json/data.json";
import DubaiData from '../assests/json/DubaiData.json';

function MediaPartners() {

    const location = useLocation();
    const locationHandler = location.pathname === '/' ? false : true;
    const dataArray = location.pathname === '/Dubai' ? DubaiData : data;
    return (
        <>
            <section id='Media-Partners'>
                <h1 className='text-center text-maincolor text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-gillRoy700 py-10 sm:py-12 md:py-20 lg:py-[100px]'>Media Partners</h1>
                <div className='MediaPartners'>
                            <div className="media-images mx-auto mt-4 sm:px-10 max-w-[1080px] flex justify-center gap-5 flex-wrap">
                                {dataArray.MediaPartners.map((card, index) => (
                                    <div className="flip-card bg-transparent w-[140px] h-[140px] rounded-30" key={index}>
                                        <div className="flip-card-inner relative w-full h-full text-center transition-transform duration-[0.8s]">
                                            <div className="flip-card-front border border-solid border-maincolor cards-basics p-3 bg-white  text-black flex flex-col justify-center rounded-30 shadow-flipfront">
                                                <ImageField taggedElem={card.partnerImage} alt="no image found for partner" className="rounded-20"/>
                                            </div>
                                            <div className="flip-card-back cards-basics justify-between bg-[#A9EFFF] text-white rounded-30 p-5 items-center border border-solid border-white shadow-flipfront flex flex-col">
                                                <p className='capitalize text-[#00B2DA] text-center font-gillRoy700 text-base leading-tight'>{card.partnerName}</p>
                                                <Link to={card.website} target="_blank" rel="noopener noreferrer">
                                                    <button className="website-btn bg-[#21C3E7] text-xs py-1 px-4 rounded-full border-2 border-solid border-[#D4E9F6] text-white font-gillRoy700 mt-1 inline-flex justify-center items-start">Website</button>
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

export default MediaPartners
