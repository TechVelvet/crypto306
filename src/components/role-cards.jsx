import React from 'react';
import Button from './Button';
import ImageField from './ImageField';
import bg3 from '../assests/svgs/3.svg';
import bg6 from '../assests/svgs/6.svg';
import bg0 from '../assests/svgs/cryptoCardBg.svg';
import { Link } from 'react-router-dom';

function RoleCards() {

    const CardData = [
        {
            imgTag: bg3,
            text: 'Sponsor',
            FormLink: 'https://forms.gle/gsKcxYHUFtFzg8KbA'
        },
        {
            imgTag: bg0,
            text: 'Speaker',
            FormLink: 'https://forms.gle/3qtZVSYzMZUJRXkf7'
        },
        {
            imgTag: bg6,
            text: 'Partner',
            FormLink: 'https://forms.gle/ZnvmN3PkziJoRjDg6'
        }
    ]
    return (
        <>
            <section id='role-cards' className='mt-24'>
                <div className='flex flex-col md:flex-row items-center justify-center gap-5'>
                    {CardData.map((element, key) => (
                        <div className='rounded-30 w-fit border-white border flex relative  hover:shadow-cardShadow md:hover:scale-125 hover:z-50 transition-all ease-in-out duration-500' key={key}>
                            <ImageField taggedElem={element.imgTag} altText="" className="absolute right-0" />
                            <div className='rounded-30 bg-cardBG w-[332px] h-[388px] md:w-[270px] md:h-[315px] lg:w-[332px] lg:h-[388px] flex flex-col justify-center items-center'>
                                <p className='text-40 text-white font-gillRoy600 z-20'>Become</p>
                                <h3 className='text-6xl text-maincolor font-gillRoy700'>{element.text}</h3>
                                <Link to={element.FormLink} className='z-10 mt-28' target='_blank'>
                                    <Button className="rounded-30 bg-buttonbg px-6 py-4 cursor-pointer">
                                        <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.87916 1.31445L23.1218 22.5571M24.0484 1.74161L24.0487 23.4841H2.35009" stroke="white" strokeWidth="2.99139" />
                                        </svg>
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default RoleCards
