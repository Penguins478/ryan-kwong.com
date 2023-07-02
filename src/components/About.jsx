import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { github, linkedin, resume } from "../assets";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am currently an undergraduate student at Purdue University studying
        Computer Science. With a wide variety of technical skills, my passion lies in 
        developing autonomous robots, neural networks, and full stack applications.
        Moreover, I am confident in constructing reliable, scalable, and efficient
        solutions to real-world challenges.  

        
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       For a PDF copy of my resume, please check out this link <a href={resume}
        style={{
          color: '#329fd2',
          transition: 'color 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.target.style.color = 'cyan';
        }}
        onMouseLeave={(e) => {
          e.target.style.color = '#329fd2';
        }}
      >
     here
      </a>. 
       

        
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        style={{ display: 'flex', alignItems: 'center' }}
      >

       Relevant Links: 
       <span style={{ margin: '0 10px' }}></span>
       <a href="https://github.com/Penguins478">
						{/* <img alt = "Ryan Kwong's LinkedIn profile" class="intro-img" src=" images/linkedin.png"> */}
            <img src={github} alt="GitHub" style={{ width: '50px', height: 'auto' }}/>
          </a>
        <span style={{ margin: '0 10px' }}></span>
       <a href="https://www.linkedin.com/in/ryandkwong/">
						{/* <img alt = "Ryan Kwong's LinkedIn profile" class="intro-img" src=" images/linkedin.png"> */}
            <img src={linkedin} alt="LinkedIn" style={{ width: '50px', height: 'auto' }}/>
          </a>
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
