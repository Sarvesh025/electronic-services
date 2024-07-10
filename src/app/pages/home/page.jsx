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
            <Services scrollToForm={handleClick} onData={handleDataFromChild} thumbnail='/ac-repair-service.jpg' title="AIR CONDITIONER" description="To schedule your Air Conditioner. Repair service with Star-Repairing-Center. Simply Call us: +917890694858. Our friendly customer service team will be happy to assist you and answer any questions you may have." />
            <Services scrollToForm={handleClick} onData={handleDataFromChild} thumbnail='/repairing-refrigerator.jpg' title="REFRIGERATOR" description="To schedule your Refrigerator. Repair service with Star-Repairing-Center. Simply Call us: +917890694858. Our friendly customer service team will be happy to assist you and answer any questions you may have." />
            <Services scrollToForm={handleClick} onData={handleDataFromChild} thumbnail='/repairing-washing-machine.jpg' title="WASHING MACHINE" description="To schedule your Washing Machine. Repair service with Star-Repairing-Center. Simply Call us: +917890694858. Our friendly customer service team will be happy to assist you and answer any questions you may have."  />
            <Services scrollToForm={handleClick} onData={handleDataFromChild} thumbnail='/repair-microwave.jpg' title="MICROWAVE" description="To schedule your Microwave. Repair service with Star-Repairing-Center. Simply Call us: +917890694858. Our friendly customer service team will be happy to assist you and answer any questions you may have." />
            <Brands/>
            <Form data={dataFromChild} ref={enquiryREF} />
            <Footer/>
            <Whatsapp />
        </div>
    )
}
