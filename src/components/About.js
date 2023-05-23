import React, { Component } from 'react';
import "./About.css";
import { motion } from 'framer-motion/dist/framer-motion'

export default function About(){
    
        return(
            <body>
            <motion.div initial={{opacity:0}}
     animate={{opacity:1}}
     transition={{duration:0.95}}>
            <div className='about-container'>
            <h5>
                <p className='about-p1'>
                    Hello my name is Aditya Agrawal.
                    Born in Sharjah, United Arab Emirates,
                    I come frome a diversety rich city and
                    with a storng set of principles and work
                    ethic, I develoepd this website inspired 
                    by a fellow developer Keita Yamada,
                    I found online when looking for inpiration.<br></br><br></br>
                    I hoped to mimic his style and look with my
                    unique ideas to and hope you can get to know
                    me better throught this medium.
                </p>
            </h5>
            </div>
            </motion.div>
            </body>
        );
      
}