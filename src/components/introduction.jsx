import React, { useEffect, useState } from 'react';
import ImageField from './ImageField';
import cryptoBg from '../assests/media/cryptoBg_x4.jpg';
import cryptoBgMobile from '../assests/media/cryptoBgMobile_x4.jpg';
import introBg from '../assests/svgs/introBg.svg';
import introBgLeft from '../assests/svgs/introBgLeft.svg';
import introBgTop from '../assests/svgs/introBgTop.svg';
import introBgBottom from '../assests/svgs/introBgBottom.svg';

function Introduction() {
    const [showmob, setShowMob] = useState(window.innerWidth);

    useEffect(() => {
        
        window.addEventListener("resize", function () {
            setShowMob(window.innerWidth);
        })

        return () => {
            window.removeEventListener("resize", function () {
                setShowMob(window.innerWidth);
            })
        }
    }, [])


    return (
        <>
            <section id='what-is-crypto'>
                <div className='introduction relative flex justify-center -z-10'>
                    {
                        showmob > 768 ?
                            <ImageField taggedElem={cryptoBg} altText="" className="w-full" />
                            :
                            <ImageField taggedElem={cryptoBgMobile} altText="" className="w-full" />
                    }
                </div>
                    <div className='bg-white rounded-30 overflow-hidden intro-div w-[84%] p-10 mx-auto md:-mt-36 -mt-48  relative border border-b-8 border-solid border-maincolor shadow-introDiv'>
                        {
                            showmob > 768 ?
                                <>
                                    <ImageField taggedElem={introBg} altText="." className="absolute right-0 top-0 h-full" />
                                    <ImageField taggedElem={introBgLeft} altText="." className="absolute left-0 top-0 h-full" />
                                </>
                                :
                                <>
                                    <ImageField taggedElem={introBgTop} altText="." className="absolute top-0" />
                                    <ImageField taggedElem={introBgBottom} altText="." className="absolute right-0 bottom-0" />
                                </>
                        }
                        <p className='text-4xl md:text-[45px] lg:text-[53px] font-gillRoy900 text-subheading flex items-start font-extrabold flex-col lg:flex-row'>
                            What is
                            <span className='text-maincolor lg:pl-3'><span className='text-black'>CRYPTO</span >306?</span>
                        </p>
                        <p className='text-black font-gillRoy400 text-sm lg:text-xl text-justify mt-7'>Crypto306 is Dubai's premier and influential event, uniting every corner of the cryptocurrency, blockchain, and Web3 global community. Crypto306 acts as a catalyst for thought-provoking conversations with visionary speakers and the creation of business opportunities with the world's leading organizations and projects. <br /> <br /> At Crypto 306, connect with a diverse audience, including developers, investors, founders, brands, policymakers, and passionate individuals. Each participant will leave equipped with the knowledge and tools needed to continue shaping the foundational pillars of an innovative future in the world of finance</p>
                    </div>
            </section>
        </>
    )
}

export default Introduction
