import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ImageField from './ImageField';
import Button from './Button';
import BrandLogo from '../assests/svgs/BrandLogo.svg';

const Navbar = [
  {
    navItem: "Speakers",
    ItemLink: "/"
  },
  {
    navItem: "Partners",
    ItemLink: "/"
  },
  {
    navItem: "Sponsors",
    ItemLink: "/"
  },
  {
    navItem: "Floor Plan",
    ItemLink: "/"
  },
  {
    navItem: "Dubai 2023",
    ItemLink: "/dubai"
  }
]
const Navbar23 = [
  {
    navItem: "Speakers",
    ItemLink: "/dubai"
  },
  {
    navItem: "Partners",
    ItemLink: "/dubai"
  },
  {
    navItem: "Sponsors",
    ItemLink: "/dubai"
  },
  {
    navItem: "Agenda",
    ItemLink: "/dubai"
  }
]

const Header = ({ setSelectedIndex }) => {
  const location = useLocation()
  const [showMenu, setShowMenu] = useState(false);

  const handleKey = (index) => {
    setSelectedIndex(index)
    setShowMenu(!showMenu)
  }

  const handleShowMenu = () => {
    setShowMenu(!showMenu)
  }
  const NavbarMap = location.pathname === '/' ? Navbar : Navbar23;
  return (
    <>
      <section className='bg-white shadow-gray-300 shadow-lg' style={{ position: "sticky", top: "0", zIndex: "999999" }}>
        <div className="navbar px-7 mx-auto">
          <div className="navbar-start">
            <Link className="flex items-center" to="/">
              <ImageField taggedElem={BrandLogo} altText="logo" />
              <span className='font-Livvik font-extrabold text-lg text-black'>&nbsp; CRYPTO<span className='text-maincolor'>306</span></span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {NavbarMap.map((element, key) => (
                <li key={key} onClick={() => handleKey(key)}>
                  <Link to={element.ItemLink} className='text-maincolor font-gillRoy700 text-base active:!bg-slate-200 active:!text-maincolor focus:!text-maincolor/70'>{element.navItem}</Link>
                </li>
              ))
              }
            </ul>
          </div>
          <div className="navbar-end">
            {location.pathname === '/' && <Button className="hidden lg:block button font-gillRoy700 bg-maincolor text-white" >Get Participate</Button>}
            <Button className="block lg:hidden menu-button" onClick={handleShowMenu} >
              <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.01887 12.0753H25.9245C27.0566 12.0753 28 11.1319 28 9.99979C28 8.86771 27.0566 7.92432 25.9245 7.92432H8.98113C7.84906 7.92432 6.90566 8.86771 6.90566 9.99979C6.9434 11.1319 7.84906 12.0753 9.01887 12.0753Z" fill="black" />
                <path d="M16.3396 20.0001H25.9245C27.0566 20.0001 28 19.0567 28 17.9246C28 16.7925 27.0566 15.8491 25.9245 15.8491H16.3396C15.2075 15.8491 14.2642 16.7925 14.2642 17.9246C14.2642 19.0944 15.2075 20.0001 16.3396 20.0001Z" fill="black" />
                <path d="M2.41509 4.15094H25.9245C27.0566 4.15094 28 3.20755 28 2.07547C28 0.943396 27.0566 0 25.9245 0H2.37736C1.24528 0 0.301886 0.943396 0.301886 2.07547C0.339622 3.20755 1.24528 4.15094 2.41509 4.15094Z" fill="black" />
              </svg>
            </Button>
          </div>
        </div>
        <div className={`lg:hidden absolute w-screen bg-white shadow-black/10 shadow-lg -z-50 ${showMenu ? 'show-inner-div' : 'inner-div'}`}>

          <ul className="items-center pt-4 pb-7 flex flex-col gap-2 px-7">
            {
              NavbarMap.map((element, key) => (
                <li key={key} onClick={() => handleKey(key)} className='py-3 w-full text-center bg-maincolor/15 rounded-md'>
                  <Link to={element.ItemLink} className='text-maincolor font-gillRoy600 text-xl'>{element.navItem}</Link>
                </li>
              ))
            }
          </ul>
        </div>
      </section>
    </>
  )
}

export default Header