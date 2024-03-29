import React from 'react';
import Project from './Project';
import Profile from './Profile';
import Experience from './Experience';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { useState } from 'react';
import Typewriter from 'typewriter-effect';
import useDarkMode from '../Hook/useDarkMode';
import Skills from './Skills';

function Home() {
  // const [Hide, setHide] = useState('hide-1');
  // const [coba, setCoba] = useState('coba-1');
  // const StartPortofolio = () => {
  //   setCoba('coba-2');
  //   setHide('hide-2');
  // };

  useDarkMode();

  return (
    <>
      <div className="dark:bg-gray-900 overflow-x-hidden bg-colorBackground text-gray-800  appearance-none dark:text-slate-200 transition duration-500 w-full">
        {/* <div className={coba}>
          <div className="text-5xl md:text-8xl lg:text-9xl text-gray-900 dark:text-slate-100 relative z-40">
            <div className="w-10 h-full md:w-16 md:h-16 bg-colorBackground dark:bg-gray-900 border-4 border-gray-900 dark:border-colorBackground z-0 rounded-full absolute -top-2 -left-2"></div>
            <div className="relative z-20">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter

                    .typeString('Portofolio')

                    .pauseFor(1000)
                    .deleteAll()
                    .typeString('Tri Hartono')
                    .start();
                }}
              />
            </div>
          </div>
          <div className="text-lg bg-gray-900 dark:bg-colorBackground px-4 py-2 rounded-lg font-semibold text-white dark:text-gray-900 cursor-pointer shadow-xl z-10" onClick={StartPortofolio}>
            Show Portofolio
          </div>
        </div> */}
        <div className=" flex items-center justify-center flex-col 2xl:w-3/4 mx-auto" id="Home">
          <Navbar />
          <Profile />
          <Skills />
          <Project />
          <Experience />
          <Footer />
        </div>
      </div>
    </>
  );
}
export default Home;
