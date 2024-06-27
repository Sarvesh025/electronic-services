'use client'
import React from 'react'
import styles from './carouselCustom.module.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TextOver from './TextOver';
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

export default function CustomCarousel({ handleClick }) {

    const arr = [
        {image : `linear-gradient(25deg, rgba(2,0,36,1) 0%, rgba(3,42,91,1) 15%, rgba(0,212,255,0.5) 100%), url('https://thearchitectsdiary.com/wp-content/uploads/2020/11/ac-repair-service-.jpg')`, content : "Air Conditioner"},
        {image : `linear-gradient(25deg, rgba(2,0,36,1) 0%, rgba(3,42,91,1) 15%, rgba(0,212,255,0.5) 100%), url('https://repaircentrejum.in/wp-content/uploads/2021/01/Male-Technician-With-Screwdriver-Repairing-Refrigerator-in-Kitchen-1024x680.jpg')`, content : "Refrigerator"},
        {image : `linear-gradient(25deg, rgba(2,0,36,1) 0%, rgba(3,42,91,1) 15%, rgba(0,212,255,0.5) 100%), url('https://img77.uenicdn.com/image/upload/v1532016962/category/shutterstock_1033666522.jpg')`, content : "Microwave"},
        {image : `linear-gradient(25deg, rgba(2,0,36,1) 0%, rgba(3,42,91,1) 15%, rgba(0,212,255,0.5) 100%), url('https://t3.ftcdn.net/jpg/04/23/35/16/360_F_423351639_qcIVh5khAZrpTdIHakM5n8G6wtgFIA7y.jpg')`, content : "Washing Machine"},
]

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
                {arr &&
                    arr.map((item, index) => {
                        return (
                            <div className={styles.show} key={index} style={{backgroundImage : item.image}}>
                                   <TextOver content = {item.content}/>
                                </div>
                        )})}
        </Carousel>

    </div>
    )
}
