import React, { useState, useEffect } from 'react';
import Program from '../Skills/Program';
import Office from '../Skills/Office';
import Design from '../Skills/Design';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Skills() {
  const [isActive, setIsActive] = useState('Program');
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start('visible');
    }
    if (!inView) {
      animation.start('hidden');
    }
  }, [inView]);

  const variants = {
    hidden: { x: '280%' },
    visible: {
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <div ref={ref} className="py-10 md:pt-10 md:pb-20 w-full px-setting " id="Skills">
      <div className="flex flex-col md:flex-row items-end md:items-center justify-between">
        <div className="w-fit h-fit relative overflow-hidden">
          <h1>Skills</h1>
        </div>
        <div className="flex gap-2 md:gap-4 text-sm md:text-base 2xl:text-2xl my-2">
          <motion.div animate={animation} initial="hidden" variants={variants} onClick={() => setIsActive('Program')} className={isActive === 'Program' ? 'SkillsInActive' : 'Active '}>
            Frontend Dev
          </motion.div>
          <motion.div animate={animation} initial="hidden" variants={variants} onClick={() => setIsActive('Office')} className={isActive === 'Office' ? 'SkillsInActive' : 'Active'}>
            Ms Office
          </motion.div>
          <motion.div animate={animation} initial="hidden" variants={variants} onClick={() => setIsActive('Design')} className={isActive === 'Design' ? 'SkillsInActive' : 'Active'}>
            Design
          </motion.div>
        </div>
      </div>
      <div className="my-4">
        {isActive === 'Program' && <Program />}
        {isActive === 'Office' && <Office />}
        {isActive === 'Design' && <Design />}
      </div>
    </div>
  );
}
