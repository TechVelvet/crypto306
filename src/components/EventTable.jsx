import React, { useEffect, useState } from 'react'
import Button from './Button'
import Table from './Table';

const tableHeading = [
    "", "Topic", "Speaker", "Company", "Time"
]

const tableRows = [
    {
        topic: "Indroduction Business",
        speaker: "Vaibhav Ali",
        company: "Web3 Travels",
        time: "10:05 AM - 10:15AM"
    },
    {

        topic: "Indroduction Business",
        speaker: "MOHAMMED KHASHOGJI",
        company: "PROJECT NEXUS",
        time: "10:20 AM - 10:30AM"
    },
    {
        topic: "Indroduction Business",
        speaker: "MUSTAFA",
        company: "ELVISH MAGIC",
        time: "10:35 AM - 10:45 AM"
    },
    {
        topic: "Indroduction Business",
        speaker: "ADEL BHURTUN",
        company: "TRADERS BRAWL",
        time: "10:50 AM - 11:10 AM"
    },
    {
        topic: "Indroduction Business",
        speaker: "JASON SINGH",
        company: "Paiverse",
        time: "11:15 AM - 11:25 AM"
    },
    {
        topic: "Indroduction Business",
        speaker: "Fastex",
        company: "Fastex",
        time: "11:30 AM - 11:45 AM"
    },
    {
        topic: "Indroduction Business",
        speaker: "AGRESH SINGH",
        company: "COINSTORE",
        time: "11:50 AM - 12:00 PM"
    },
    {
        topic: "Indroduction Business",
        speaker: "Prof Sidhic",
        company: "Crypto Universal",
        time: "12:05 PM - 12:15 PM"
    },
    {
        topic: "Indroduction Business",
        speaker: "SHANTNOO SAXSENA",
        company: "ENCRYPTUS",
        time: "12:20 PM - 12:30 PM"
    },
    {
        topic: "Indroduction Business",
        speaker: "SHEIKH MUHAMMAD NOMAN",
        company: "MORTGAGE HUB",
        time: "12:35 PM - 12:45 PM"
    },
    {
        topic: "Indroduction Business",
        speaker: "ANDREY AKULENKO",
        company: "AZBIT",
        time: "12:50 PM - 01:00 PM"
    },
    {
        topic: "Indroduction Business",
        speaker: "RAHUL ASHOK WARRIER",
        company: "SPEAKLAB",
        time: "01:05 PM - 01:15 PM"
    },
    {
        topic: "Indroduction Business",
        speaker: "JUNAID GULZAR",
        company: "WINDFALL",
        time: "01:20 PM - 01:30 PM"
    },
    {
        topic: "Indroduction Business",
        speaker: "GIANNANDREA GIAMMANCO",
        company: "FVTURA",
        time: "01:35 PM - 01:50 PM"
    },
    {
        topic: "Indroduction Business",
        speaker: "Web3 Panel Discussion",
        company: "Web3",
        time: "02:00 PM - 02:20 PM"
    },
    {
        topic: "Indroduction Business",
        speaker: "AFZAL SUBHANI",
        company: "BLOCKSGENIE",
        time: "02:30 PM - 02:40 PM"
    },
    {
        topic: "Indroduction Business",
        speaker: "NITESH MISHRA",
        company: "CHAIDEX",
        time: "02:45 PM - 02:55 PM"
    },
    {
        topic: "Indroduction Business",
        speaker: "SERGO",
        company: "CLS",
        time: "03:00 PM - 03:10 PM"
    },
    {
        topic: "Indroduction Business",
        speaker: "NASTYA ADAMOVA",
        company: "BABS LABS",
        time: "03:15 PM - 03:25 PM"
    },
    {
        topic: "Indroduction Business",
        speaker: "DR. DEEBAN RATNESWARAN",
        company: "GD10 CAPITAL",
        time: "03:30 PM - 03:45 PM"
    },
    {
        topic: "Indroduction Business",
        speaker: "KUKU",
        company: "IMOV",
        time: "03:50 PM - 04:00 PM"
    },
    {
        topic: "Indroduction Business",
        speaker: "START ANY BUSINESS",
        company: "REHA SEGHAL",
        time: "04:05 PM - 04:15 PM"
    },
    {
        topic: "Indroduction Business",
        speaker: "CRYPTONITE'S PANEL DISCUSSION WITH VC'S",
        company: "CRYPTONITE",
        time: "04:25 PM - 04:50 PM"
    },
    {
        topic: "Indroduction Business",
        speaker: "MAHMOUD FAROUQ",
        company: "TINYTRADER",
        time: "04:55 PM - 05:05 PM"
    },
    {
        topic: "Indroduction Business",
        speaker: "RAUF KHAN",
        company: "INSPECTOR LOVELY",
        time: "05:10 PM - 05:20 PM"
    },
    {
        topic: "Indroduction Business",
        speaker: "TATIANA BURMAKINA",
        company: "LOVELY SWAP",
        time: "05:25 PM - 05:35 PM"
    },
    {
        topic: "Indroduction Business",
        speaker: "Sarthak Bakshi",
        company: "DIMO, XDSEA NFT MARKETPLACE, DIMO STUDIO, RORO WALLET",
        time: "05:40 PM - 05:50 PM"
    }

]


const tableRows2 = [
    {
        topic: "Indroduction Business",
        speaker: "JAMIE",
        company: "CRYPTO JAMIE",
        time: "9:50 AM :10:20 AM"
    },
    {

        topic: "Indroduction Business",
        speaker: "MOE FARMANESH",
        company: "ABX",
        time: "10:25 AM - 10:35 AM"
    },
    {
        topic: "Indroduction Business",
        speaker: "RUDY SHOUSHANY",
        company: "DXTALKS",
        time: "10:40 AM - 10:50 AM"
    },
    {
        topic: "Indroduction Business",
        speaker: "YUANYUAN",
        company: "BITMART",
        time: "BITMART"
    },
    {
        topic: "Indroduction Business",
        speaker: "SOFIA CHHIKARA",
        company: "4WRD VENTURES",
        time: "11:10 AM - 11:20 AM"
    },
    {
        topic: "Indroduction Business",
        speaker: "MUHAMMAD HAMZA",
        company: "JOURNEE",
        time: "11:25 AM - 11:35 AM"
    },
    {
        topic: "Indroduction Business",
        speaker: "KHUSHI THAKUR",
        company: "NOVUSZILLA",
        time: "11:40 AM - 11:50 AM"
    },
    {
        topic: "Indroduction Business",
        speaker: "ALEX ANDRYUNIN",
        company: "GOBIT HEDGE FUND",
        time: ""
    },
    {
        topic: "Indroduction Business",
        speaker: "",
        company: "",
        time: ""
    },
    {
        topic: "Indroduction Business",
        speaker: "",
        company: "",
        time: ""
    },
    {
        topic: "Indroduction Business",
        speaker: "",
        company: "",
        time: ""
    },
    {
        topic: "Indroduction Business",
        speaker: "",
        company: "",
        time: ""
    },
    {
        topic: "Indroduction Business",
        speaker: "",
        company: "",
        time: ""
    },
    {
        topic: "Indroduction Business",
        speaker: "",
        company: "",
        time: ""
    },
    {
        topic: "Indroduction Business",
        speaker: "",
        company: "",
        time: ""
    },
    {
        topic: "Indroduction Business",
        speaker: "",
        company: "",
        time: ""
    },
    {
        topic: "Indroduction Business",
        speaker: "",
        company: "",
        time: ""
    },
    {
        topic: "Indroduction Business",
        speaker: "",
        company: "",
        time: ""
    }
]

const dayButtons = [
    {
        text: "Day 1",
        spanText: "20 Feb, 2024"
    },
    {
        text: "Day 2",
        spanText: "21 Feb, 2024"
    }
]

const EventTable = ({selectedIndex}) => {
    
    const viewPoint = document.getElementById("eventTable");
    if(selectedIndex === 3){
        viewPoint.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    const defaultItems = 6;
    const [nextItems, setNextItems] = useState(defaultItems)

    const [defaultDay, setDefaultDay] = useState(0);

    const [screenSize, setScreenSize] = useState(window.innerWidth);


    const handleMoreData = () => {
        setNextItems(tableRows.length);
    }

    const handleLessData = () => {
        setNextItems(defaultItems)
    }

    const handleDefaultDay = (index) => {
        setDefaultDay(index);
    }

    useEffect(() => {
        window.addEventListener("resize", function () {
            setScreenSize(window.innerWidth);
        })

        window.removeEventListener("resize", function () {
            setScreenSize(window.innerWidth);
        })
    }, [])

    return (
        <>
            <section id="eventTable">
                <div className="w-full flex justify-center flex-col items-center">
                    <div className=" w-5/6 flex items-center largeTab:items-baseline gap-12 largeTab:gap-0 largeTab:justify-between flex-col largeTab:flex-row mt-[100px] mb-16">
                        <span className='capitalize font-gillRoy700 text-7xl bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-200 text-transparent h-20 '>agenda</span>
                        <div className="right flex gap-5">
                            {
                                dayButtons.map((element, key) => (
                                    <div className='flex flex-col items-center' key={key}>
                                        <Button className={`${key !== defaultDay ? 'bg-gradient-to-r from-cyan-500 to-cyan-200 text-white px-11 py-3 largeTab:py-[12.0px] largeTab:px-[54.01px]' : 'bg-white border-4 border-buttonborder text-maincolor box-border px-10 py-[8.5px] largeTab:py-2 largeTab:px-[51.72px] shadow-unselectionbuttonshadow'} font-gillRoy600 text-22 rounded-20   `} onClick={() => handleDefaultDay(key)}>{element.text}</Button>
                                        <span className={` ${key === defaultDay ? "text-tabletext bg-tablebg shadow-unselectshadow" : "text-maincolor bg-tableunselect "}  font-gillRoy700 text-xs px-4  largeTab:w-28  py-1  rounded-b-lg text-center`}>{element.spanText}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    {/* table area starts from here desktop  */}
                    {
                        screenSize > 919 ?
                            <>
                               <Table tableRows={tableRows} tableRows2={tableRows2} defaultDay={defaultDay} tableHeading = {tableHeading} defaultItems={defaultItems}/>
                            </> :
                            <>
                                <div className="tablemobile">
                                    <div className="flex flex-col w-screen items-center px-2 sm:px-0">

                                        {
                                            (defaultDay === 0 ? tableRows : tableRows2)?.slice(0, nextItems)?.map((element, key) => (
                                                <div className='flex gap-8 bg-tablebg mb-3 py-3 pl-3 pr-12 rounded-xl'>

                                                    <div className='flex items-center justify-center px-2 py-4 rounded-xl bg-maincolor text-white'>{key + 1}</div>

                                                    <div className='flex flex-col justify-center gap-2'>
                                                        <span className="font-gillRoy700 text-black text-xs">{element.topic}</span>
                                                        <span className='text-tablefontmobilecolor font-gillRoy700 text-xs uppercase'>{element.company}</span>
                                                    </div>

                                                    <div className='flex flex-col  justify-center gap-2'>
                                                        <span className='text-maincolor font-gillRoy600 text-base'>{element.speaker}</span>
                                                        <span className='text-tablefontmobilecolor font-gillRoy700 text-xs'>{element.time}</span>
                                                    </div>

                                                </div>
                                            ))
                                        }
                                        {nextItems === defaultItems ?
                                            <>

                                                <Button className="capitalize bg-maincolor text-white font-gillRoy700 rounded-30 py-2 px-5 text-base float-right mt-7  max-w-fit hover:bg-[#A9EFFF]" onClick={handleMoreData}>load more</Button>
                                            </> :
                                            <>
                                                <Button className="capitalize bg-maincolor text-white font-gillRoy700 rounded-30 py-2 px-5 text-base float-right mt-8  max-w-fit  hover:bg-[#A9EFFF]" onClick={handleLessData}>show less</Button></>
                                        }

                                    </div>
                                </div>
                            </>
                    }
                </div>
            </section>
        </>
    )
}

export default EventTable
