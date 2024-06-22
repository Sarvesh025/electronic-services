'use client'
import React from 'react'
import styles from './carouselCustom.module.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export default function CustomCarousel() {
    return (<div className={styles.container}>
        <Carousel
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={5000}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            customTransition='all 500ms ease-in-out'
            swipeable={true}
            draggable={true}
            infinite={true}>
            <div className={styles.showone}></div>
            <div className={styles.showtwo}></div>
            <div className={styles.showthree}></div>
            <div className={styles.showfour}></div>
        </Carousel>

    </div>
    )
}
