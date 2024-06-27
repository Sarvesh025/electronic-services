'use client'
import React, { useState, useRef } from 'react'
import Navbar from '../../component/Navbar/page'
import Services from '@/app/component/Services/page'
import Whatsapp from '../../component/Whatsapp/page'
import Form from '@/app/component/Form/page'
import CustomCarousel from '@/app/component/CustomCarousel/CustomCarousel'
import Brands from '@/app/component/Marquee/page'
import Footer from '@/app/component/Footer/page'

export default function Home() {

    const [dataFromChild, setDataFromChild] = useState('');

    let enquiryREF = useRef(null);

    const handleClick = () => {
        enquiryREF.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleDataFromChild = (data) => {
        setDataFromChild(data);
    };

    return (
        <div>
            <Navbar scrollToForm={handleClick}/>
            <CustomCarousel />
            <Services scrollToForm={handleClick} onData={handleDataFromChild} thumbnail='/ac-repair-service.jpg' title='Air Conditioner' description='sdjb nsdbdsyh vbyvbyuvb yuvbyvbuy vbs dyuhvb vys dbvyb uyhvrv wdv berv yvrvyerbvyre vyer vyer gre vyer gryv ereryg wev rey v eryb erv erg werg eruig erugrge rlg eragher ger gergr' />
            <Services scrollToForm={handleClick} onData={handleDataFromChild} thumbnail='/repairing-refrigerator.jpg' title='Refrigerator' description=' vyer vyer gre vyer gryv ereryg wev rey v eryb erv erg werg eruig erugrge rlg sdhvsduyv uyhvrv wdvberv yvrvyerbvyre vyer vyer gre vyer gryv ereryg wev rey v eryb erv erg werg eruig erugrge rlg eragher ger gergr' />
            <Services scrollToForm={handleClick} onData={handleDataFromChild} thumbnail='/repairing-washing-machine.jpg' title='Washing Machine' description=' vyer vyer gre vyer gryv ereryg wev rey v eryb erv erg werg eruig erugrge rlg  vyer vyer gre vyer gryv ereryg wev rey v eryb erv erg werg eruig erugrge rlg eragher ger gergr' />
            <Services scrollToForm={handleClick} onData={handleDataFromChild} thumbnail='/repair-microwave.jpg' title='Microwave' description=' vyer vyer gre vyer gryv ereryg wev rey v eryb erv erg werg eruig erugrge rlg yrhvbsdyhuvbsdhvsduyv uyhvrv wdvberv yvrvyerbvyre vyer vyer gre vyer gryv ereryg wev rey v eryb erv erg werg eruig erugrge rlg eragher ger gergr' />
            <Brands/>
            <Form data={dataFromChild} ref={enquiryREF} />
            <Footer/>
            <Whatsapp />
        </div>
    )
}
