import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const DemoCarousel = () => {
        return (
            <Carousel
             showArrows={false} 
             showStatus = {false}
             showThumbs = {false}
             >
                <div>
                    <img src="/images/therapy_1.png" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="/images/therapy_2.png" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="/images/therapy_3.png" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="/images/therapy_4.png" />
                    <p className="legend">Legend 4</p>
                </div>
            </Carousel>
        )
    }

export default DemoCarousel
// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>