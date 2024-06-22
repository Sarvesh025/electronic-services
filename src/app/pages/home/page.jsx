import React from 'react'
import Navbar from '../../component/Navbar/page'
import Services from '@/app/component/Services/page'
import Whatsapp from '../../component/Whatsapp/page'
import Contact from '../contact/page'
import CustomCarousel from '@/app/component/CustomCarousel/CustomCarousel'

export default function Home() {
    return (
        <div>
            <Navbar/>
            <CustomCarousel />
            <Services thumbnail='/next.svg' title='Air Conditioner' description='sdjbnsdbdsyhvbyvbyuvbyuvbyvbuyvbsdyuhvbvysdbvybvwvbvywerbvyuhrbvyrhvbsdyhuvbsdhvsduyv uyhvrv wdvberv yvrvyerbvyre vyer vyer gre vyer gryv ereryg wev rey v eryb erv erg werg eruig erugrge rlg eragher ger gergr'/>
            <Services thumbnail='/next.svg' title='Air Conditioner' description='sdjbnsdbdsyhvbyvbyuvbyuvbyvbuyvbsdyuhvbvysdbvybvwvbvywerbvyuhrbvyrhvbsdyhuvbsdhvsduyv uyhvrv wdvberv yvrvyerbvyre vyer vyer gre vyer gryv ereryg wev rey v eryb erv erg werg eruig erugrge rlg eragher ger gergr'/>
            <Services thumbnail='/next.svg' title='Air Conditioner' description='sdjbnsdbdsyhvbyvbyuvbyuvbyvbuyvbsdyuhvbvysdbvybvwvbvywerbvyuhrbvyrhvbsdyhuvbsdhvsduyv uyhvrv wdvberv yvrvyerbvyre vyer vyer gre vyer gryv ereryg wev rey v eryb erv erg werg eruig erugrge rlg eragher ger gergr'/>
            <Services thumbnail='/next.svg' title='Air Conditioner' description='sdjbnsdbdsyhvbyvbyuvbyuvbyvbuyvbsdyuhvbvysdbvybvwvbvywerbvyuhrbvyrhvbsdyhuvbsdhvsduyv uyhvrv wdvberv yvrvyerbvyre vyer vyer gre vyer gryv ereryg wev rey v eryb erv erg werg eruig erugrge rlg eragher ger gergr'/>
            <Whatsapp/> 
            {/* <Contact /> */}
        </div>
    )
}
