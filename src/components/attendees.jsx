import React from 'react';
import Button from './Button';
import ImageField from './ImageField';
import attendeesBg from '../assests/svgs/attendeesBg.svg'
import attendees1 from '../assests/media/attendees1.jpg';
import attendees2 from '../assests/media/attendees2.jpg';
import attendees3 from '../assests/media/attendees3.jpg';
import attendees4 from '../assests/media/attendees4.jpg';
import attendees5 from '../assests/media/attendees5.jpg';
import attendees6 from '../assests/media/attendees6.jpg';
import { useLocation } from 'react-router-dom';


function Attendees() {

    const ateendees = [
        {
            ateendees: attendees1,
            count: '3,000+',
            category: "Attendees"
        },
        {
            ateendees: attendees6,
            count: '1500+',
            category: "Companies"
        },
        {
            ateendees: attendees2,
            count: '81+',
            category: "Speakers"
        },
        {
            ateendees: attendees3,
            count: '60+',
            category: "Sponsors"
        },
        {
            ateendees: attendees4,
            count: '100+',
            category: "Media"
        },
        {
            ateendees: attendees5,
            count: '150+',
            category: "Partners"
        },
    ];

    const location = useLocation();
    const locationHandler = location.pathname === '/' ? false : true;
    return (
        <>
            <section id='attendees' className={`${locationHandler ? 'mt-0' : 'mt-20'}`}>
            {locationHandler && 
                <h1 className='text-center text-maincolor text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-gillRoy700 py-10 sm:py-12 md:py-20 lg:py-[100px]'>Event Insights</h1>}
                <div className='xsm flex justify-evenly gap-y-6 sm:gap-2 items-center flex-wrap sm:flex-nowrap sm:px-5  md:justify-center md:gap-5'>
                    {
                        ateendees.map((element, index) => (
                            <div className='ateendees-card group relative rounded-2xl overflow-hidden w-[200px] sm:w-[120px] h-[374px] duration-500 ease-in-out sm:hover:w-[224px] sm:hover:h-[380px]' key={index}>
                                <ImageField taggedElem={element.ateendees} altText="" className="absolute w-[224px] h-full object-cover object-left z-10 " />
                                <ImageField taggedElem={attendeesBg} altText="" className="absolute z-30 bottom-0" />
                                <div className='card-text  relative z-30 top-5 duration-500 ease-in-out group-hover:rotate-0 group-hover:transition-all group-hover:ease-in-out'>
                                    <h3 className='font-gillRoy700 text-3xl text-white relative w-fit left-[45%] -translate-x-[55%] -rotate-90 transition-all duration-500 group-hover:left-[50%] group-hover:-translate-x-[50%]'>{element.count}</h3>
                                    <p className='font-gillRoy200 text-3xl text-white relative w-fit left-[55%] -translate-x-[45%] -rotate-90 transition-all duration-500'>{element.category}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default Attendees
