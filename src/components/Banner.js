import React, {Component} from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import '../styles/Banner.css';
import '../App.css';




const Banner = ({ image, min, max, children, color, container, bannerContainer = "banner-container"}) => (
    <div className={bannerContainer}>
        <Parallax offsetYMin={min} offsetYMax={max} slowerScrollRate>
            <div
                className="hero-image"
                style={{ backgroundImage: `url(${image})` }}
            />
        </Parallax>
        <div className={container}>{children}</div>
    </div>
);




export {Banner};