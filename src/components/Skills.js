import React, { Component } from "react";
import { motion } from 'framer-motion/dist/framer-motion'

import "./Skills.css";

export default function Skills(){
    const onWheel = e => {
        e.preventDefault();
        const container = document.getElementById("skills-container");
        const containerScrollPosition = document.getElementById("skills-container").scrollLeft;
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
        <p className="title">Languages/frameworks</p>
        
        <ul className="skills-container" id="skills-container" onWheel={onWheel}>
            
            <ul className="skills-list">
                <li>
            <div className="skills-title">
                <p>
                Java
                </p>
                <div className="skills-info">
                    <p></p>
                </div>
            </div>
            </li>
            <li>
            <div className="skills-title">
                <p>
                Node JS
                </p>
                <div className="skills-info">
                    <p></p>
                </div>
            </div>
            </li>
            <li>
            <div className="skills-title">
                <p>
                Javascript
                </p>
                <div className="skills-info">
                    <p></p>
                </div>
            </div>
            </li>
            <li>
            <div className="skills-title">
                <p>
                C, C++
                </p>
                <div className="skills-info">
                    <p></p>
                </div>
            </div>
            </li>
            <li>
            <div className="skills-title">
                <p>
                Python
                </p>
                <div className="skills-info">
                    <p></p>
                </div>
            </div>
            </li>
            <li>
            <div className="skills-title">
                <p>
                PHP
                </p>
                <div className="skills-info">
                    <p></p>
                </div>
            </div>
            </li>
            <li>
            <div className="skills-title">
                <p>
                React
                </p>
                <div className="skills-info">
                    <p></p>
                </div>
            </div>
            </li>
            <li>
            <div className="skills-title">
                <p>
                HTML
                </p>
                <div className="skills-info">
                    <p></p>
                </div>
            </div>
            </li>
            <li>
            <div className="skills-title">
                <p>
                CSS
                </p>
                <div className="skills-info">
                    <p></p>
                </div>
            </div>
            </li>
            <li>
            <div className="skills-title">
                <p>
                Dart/Flutter
                </p>
                <div className="skills-info">
                    <p></p>
                </div>
            </div>
            </li>
            </ul>
           
           <hr></hr>
<ul className="other-skills-list">
<li>
            <div className="skills-title">
                <p>
                Social and outgoing
                </p>
                <div className="skills-info">
                    <p></p>
                </div>
            </div>
            </li>
            <li>
            <div className="skills-title">
                <p>
                Effective communication skills
                </p>
                <div className="skills-info">
                    <p></p>
                </div>
            </div>
            </li>
            <li>
            <div className="skills-title">
                <p>
                Leadsership in small scale group projects.
                </p>
                <div className="skills-info">
                    <p>Research/Writing/Videography/Planning/</p>
                </div>
            </div>
            </li>
            <li>
            <div className="skills-title">
                <p>
                Fluent in English
                </p>
                <div className="skills-info">
                    <p></p>
                </div>
            </div>
            </li>
            <li>
            <div className="skills-title">
                <p>
                Fluent in Hindi
                </p>
                <div className="skills-info">
                    <p>Speaking level//</p>
                </div>
            </div>
            </li>
            <li>
            <div className="skills-title">
                <p>
                Training/Fitness
                </p>
                <div className="skills-info">
                    <p>High-intensity training/Powerlifting</p>
                </div>
            </div>
            </li>
</ul>
<hr></hr>

<ul className="more-skills">
<li>
            <div className="skills-title">
                <p>
                Microsoft Office
                </p>
                <div className="skills-info">
                    <p>Full suite//</p>
                </div>
            </div>
            </li>
            <li>
            <div className="skills-title">
                <p>
                Davinci Resolve
                </p>
                <div className="skills-info">
                    <p>Video editing//</p>
                </div>
            </div>
            </li>
            <li>
            <div className="skills-title">
                <p>
                OBS
                </p>
                <div className="skills-info">
                    <p>Video capture//</p>
                </div>
            </div>
            </li>
            <li>
            <div className="skills-title">
                <p>
                Photgraphy
                </p>
                <div className="skills-info">
                    <p>DSLR/SLR/Bridge cameras/Canon Beginner photography course</p>
                </div>
            </div>
            </li>
            <li>
            <div className="skills-title">
                <p>
                POS systems
                </p>
                <div className="skills-info">
                    <p>RetailMagic/Walmart POS system</p>
                </div>
            </div>
            </li>
            <li>
            <div className="skills-title">
                <p>
                Invoicing systems
                </p>
                <div className="skills-info">
                    <p>Wholesale invoicing</p>
                </div>
            </div>
            </li>
</ul>



            
        </ul>
        </motion.div>
        </body>
    );
}