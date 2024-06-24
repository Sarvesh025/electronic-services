'use client'
import React, {useState} from 'react'
import Navbar from '../../component/Navbar/page'
import Services from '@/app/component/Services/page'
import Whatsapp from '../../component/Whatsapp/page'
import Form from '@/app/component/Form/page'
import Contact from '../contact/page'
import CustomCarousel from '@/app/component/CustomCarousel/CustomCarousel'
import Brands from '@/app/component/Marquee/page'

export default function Home() {

        const [dataFromChild, setDataFromChild] = useState('');
      
        const handleDataFromChild = (data) => {
          setDataFromChild(data);
        };
      
    return (
        <div>
            <Navbar/>
            <CustomCarousel />
            <Services onData={handleDataFromChild} thumbnail='/ac-repair-service.jpg' title='Air Conditioner' description='sdjbnsdbdsyhvbyvbyuvbyuvbyvbuyvbsdyuhvbvysdbvybvwvbvywerbvyuhrbvyrhvbsdyhuvbsdhvsduyv uyhvrv wdvberv yvrvyerbvyre vyer vyer gre vyer gryv ereryg wev rey v eryb erv erg werg eruig erugrge rlg eragher ger gergr'/>
            <Services onData={handleDataFromChild} thumbnail='/repairing-refrigerator.jpg' title='Refrigerator' description='sdjbnsdbdsyhvbyvbyuvbyuvbyvbuyvbsdyuhvbvysdbvybvwvbvywerbvyuhrbvyrhvbsdyhuvbsdhvsduyv uyhvrv wdvberv yvrvyerbvyre vyer vyer gre vyer gryv ereryg wev rey v eryb erv erg werg eruig erugrge rlg eragher ger gergr'/>
            <Services onData={handleDataFromChild} thumbnail='/repairing-washing-machine.jpg' title='Washing Machine' description='sdjbnsdbdsyhvbyvbyuvbyuvbyvbuyvbsdyuhvbvysdbvybvwvbvywerbvyuhrbvyrhvbsdyhuvbsdhvsduyv uyhvrv wdvberv yvrvyerbvyre vyer vyer gre vyer gryv ereryg wev rey v eryb erv erg werg eruig erugrge rlg eragher ger gergr'/>
            <Services onData={handleDataFromChild} thumbnail='/repair-microwave.jpg' title='Microwave' description='sdjbnsdbdsyhvbyvbyuvbyuvbyvbuyvbsdyuhvbvysdbvybvwvbvywerbvyuhrbvyrhvbsdyhuvbsdhvsduyv uyhvrv wdvberv yvrvyerbvyre vyer vyer gre vyer gryv ereryg wev rey v eryb erv erg werg eruig erugrge rlg eragher ger gergr'/>
            <Brands/>
            <Form data = {dataFromChild}/>
            <Whatsapp/> 
            {/* <Contact /> */}
        </div>
    )
}
