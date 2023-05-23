import React, { Component } from 'react';
import "./Project.css";
import { motion } from 'framer-motion/dist/framer-motion'


export default function Project(){

    const onWheel = e => {
        e.preventDefault();
        const container = document.getElementById("project-list");
        const containerScrollPosition = document.getElementById("project-list").scrollLeft;
        container.scrollTo({
          top: 0,
          left: containerScrollPosition + e.deltaY,
          behaviour: "smooth"
        });
      };

    
    return(
        
        <body> 
     <motion.div initial={{opacity:0}}
     animate={{opacity:1}}
     transition={{duration:0.95}}>
        <div className='project-container'>
            <ul className='project-list' id='project-list' onWheel={onWheel}>    
                <li>
                    <a>
                        <div className='project-title'>
                <p>
               Telling Stories
            </p>
            </div>
            <div className='project-info'><p>
               final year - 2023/Academic/Portfolio</p></div>
            </a>
                </li>

                <li>
                    <a>
                        <div className='project-title'>
                <p>
               Assignment Planner App
            </p>
            </div>
            <div className='project-info'><p>
               final year - 2023/Academic/Portfolio</p></div>
            </a>
                </li>

                <li>
                    <a>
                        <div className='project-title'>
                <p>
               Portfolio Website
            </p>
            </div>
            <div className='project-info'><p>
               2023//Portfolio</p></div>
            </a>
                </li>

                <li>
                    <a>
                        <div className='project-title'>
                <p>
               Spice Store Website
            </p>
            </div>
            <div className='project-info'><p>
               2023/Special/Portfolio</p></div>
            </a>
                </li>

                
            </ul>
            
            
           
            
        </div>
        </motion.div>
        <script src="scroll.js"></script>
        </body>
        

    );

    
  
}