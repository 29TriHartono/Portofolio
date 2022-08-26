import React from 'react';
import Tesfoto from '../Img/TesFoto.jpg';
import { motion } from 'framer-motion';

function Profile() {
  return (
    <div id="Profile" className="px-setting pt-20 md:pt-28 lg:pt-36 flex flex-col-reverse md:flex-row items-center justify-between gap-4 md:gap-10 lg:gap-20 group w-auto ">
      <div className="text-left w-full">
        <div className="w-fit relative ">
          <h1>Profile</h1>
        </div>
        <motion.h2 animate={{ y: 0 }} initial={{ y: '-100%' }} transition={{ duration: 1.4 }} className="lg:mt-4 mb-2">
          Hello, i'm <span className="font-bold">Tri Hartono</span> usually called <span className="font-bold"> Tri</span>. I'm a junior front end development developer who has worked on several small projects. Great curiosity, honest and
          disciplined. For me, work is a responsibility that is carried out carefully and to the maximum extent possible, both personal and team work
        </motion.h2>
      </div>
      <motion.div animate={{ y: 0 }} initial={{ y: '-100%' }} transition={{ duration: 1 }} className=" w-full flex items-center justify-center">
        {/* <img className="rounded-xl" src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" /> */}
        <img className="rounded-md" src={Tesfoto} alt="" />
      </motion.div>
    </div>
  );
}
export default Profile;
