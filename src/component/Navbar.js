import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import useDarkMode from '../Hook/useDarkMode';
import { motion } from 'framer-motion';

export const NavbarLink = [
  {
    navname: 'Profile',
    url: 'Profile',
  },
  {
    navname: 'Skills',
    url: 'Skills',
  },
  {
    navname: 'Project',
    url: 'Project',
  },
  {
    navname: 'Experience',
    url: 'Experience',
  },
  {
    navname: 'Contact Me',
    url: 'Contact',
  },
];
function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [colorTheme, setTheme] = useDarkMode();
  const [navbar, setNavbar] = useState(false);

  const [click, setClick] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener('scroll', changeBackground);

  return (
    <motion.nav
      animate={{ y: 0 }}
      initial={{ y: '-100%' }}
      transition={{ duration: 2 }}
      className={navbar ? 'bg-colorBackground dark:bg-gray-900 shadow-md 2xl:shadow-none 2xl:w-3/4 duration-1000 w-full justify-between h-14 md:h-16 fixed z-40 top-0' : 'bg-transparent h-14 md:h-16 fixed z-40 top-0 w-full 2xl:w-3/4'}
    >
      <div className="flex mx-3 md:mx-8 lg:mx-28 px-2 lg:px-4 items-center justify-between h-full relative z-40">
        <Link to="Home" spy={true} smooth={true} duration={500}>
          <svg className="w-6 h-6 fill-gray-800 dark:fill-slate-200" viewBox="0 0 34 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.1677 6.62524H19.8758H33.1263V23.3126V40C33.1263 40 28.8684 28.9091 26.5011 27.412C24.2937 26.0161 19.7102 26.501 19.7102 26.501C19.7102 26.501 30.8075 13.2505 26.5011 13.2505C22.6201 13.2505 16.5632 13.2505 16.5632 13.2505H13.1677V6.62524Z" />
            <path d="M5.63159 0H12.2568V19.6687V30.2277C12.2568 33.8716 23.2713 40 23.2713 40H14.2444H9.85519H7.61917H6.7082H5.63159V38.5559V37.5259V35.4658V31.3458V23.1056V0Z" />
            <rect y="6.62524" width="8.77847" height="6.62526" />
            <rect x="26.3354" width="6.62526" height="5.13458" />
          </svg>
        </Link>

        <div className="flex items-center justify-center md:gap-2 lg:gap-4">
          <ul animate={navbarOpen ? { x: 0 } : { x: '100vw' }} transition={{ duration: 1 }} className="hidden cursor-pointer md:flex 2xl:text-2xl items-center justify-center gap-4">
            {NavbarLink.map((item, index) => (
              <li className="navItem" key={index}>
                <Link to={item.url} spy={true} smooth={true} offset={-50} duration={500}>
                  {item.navname}
                </Link>
              </li>
            ))}
          </ul>
          {/* <ul className="hidden cursor-pointer md:flex 2xl:text-2xl items-center justify-center gap-4">
            <li className="navItem">
              <Link to="Profile" spy={true} smooth={true} offset={-100} duration={500}>
                Profile
              </Link>
            </li>
            <li className="navItem">
              <Link to="Skills" spy={true} smooth={true} offset={-100} duration={500}>
                Skills
              </Link>
            </li>
            <li className="navItem">
              <Link to="Project" spy={true} smooth={true} offset={-100} duration={500}>
                Project
              </Link>
            </li>
            <li className="navItem">
              <Link to="Experience" spy={true} smooth={true} offset={-100} duration={500}>
                Experience
              </Link>
            </li>
            <li className="navItem">
              <Link to="Contact" spy={true} smooth={true} offset={-50} duration={500}>
                Contact Me
              </Link>
            </li>
          </ul> */}
          {/* DarkMode */}
          <div onClick={() => setTheme(colorTheme)} className="flex justify-center items-center mx-2 cursor-pointer">
            {colorTheme === 'light' ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-200" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-900" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </div>
          {/* mobile menu */}
          <div className="cursor-pointer flex md:hidden items-center justify-center" onClick={() => setNavbarOpen(!navbarOpen)}>
            {navbarOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-900 dark:text-slate-200" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-900 dark:text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </div>
        </div>
      </div>
      {/* Menu Navbar */}
      <div
        className={
          'fixed transition flex flex-col w-full justify-center gap-10 px-setting bg-colorBackground dark:bg-gray-900 text-gray-800 dark:text-slate-200 h-screen top-0 z-10 md:hidden  duration-1000 translate-x-full ' +
          (navbarOpen ? ' translate-x-1/2' : 'translate-full')
        }
      >
        <motion.ul animate={navbarOpen ? { x: 0 } : { x: '100vw' }} transition={{ duration: 1 }} className="flex flex-col gap-10 w-full">
          {NavbarLink.map((item, index) => (
            <li className="navItem" key={index}>
              <Link to={item.url} spy={true} smooth={true} offset={-50} duration={500}>
                {item.navname}
              </Link>
            </li>
          ))}
          {/* <li className="navItem">
            <Link to="Profile" spy={true} smooth={true} offset={-50} duration={500}>
              Profile
            </Link>
          </li>
          <li className="navItem">
            <Link to="Skills" spy={true} smooth={true} offset={-50} duration={500}>
              Skills
            </Link>
          </li>
          <li className="navItem">
            <Link to="Project" spy={true} smooth={true} offset={-50} duration={500}>
              Project
            </Link>
          </li>
          <li className="navItem">
            <Link to="Experience" spy={true} smooth={true} offset={-50} duration={500}>
              Experience
            </Link>
          </li>
          <li className="navItem">
            <Link to="Contact" spy={true} smooth={true} offset={-50} duration={500}>
              Contact Me
            </Link>
          </li> */}
        </motion.ul>
      </div>
    </motion.nav>
  );
}

export default Navbar;
