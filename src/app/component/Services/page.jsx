'use client'
import React from 'react'
import styles from './services.module.css'
import { useRouter } from 'next/navigation';
import Button from '../Button/page';
export default function Services({thumbnail, title, description, onData}) {

  // const navigate = useNavigate();
  const router = useRouter();

  function bookService(){
    if(title === "Air Conditioner"){
        // router.push({pathname : '/form', query : {appliance : encodeURIComponent("air-conditioner")}});
        onData("air-conditioner");
      // return "air-conditioner";
    }
    else if(title === "Refrigerator"){
      // router.push('component/form', {appliance : "refrigerators"});
      // router.push({pathname : '/component/form', query : {appliance : "refrigerators"}});
      onData("refrigerators");
      // return "refrigerators";
    }
    else if(title === "Washing Machine"){
      // router.push('component/form', {appliance : "washing-machine"});
      // router.push({pathname : '/component/form', query : {appliance : "washing-machine"}});
      onData("washing-machine");
      // return "washing-machine";
    }
    else if(title === "Microwave"){
      // router.push('component/form', {appliance : "microwave"});
      // router.push({pathname : '/component/form', query : {appliance : "microwave"}});
      onData("microwave");
      // return "microwave";
    }
  };

  return (
    <div className={styles.services} >
    <img src={thumbnail} className={styles.thumbnail} alt="thumbnail"/>
    <div className={styles.serviceDetails}>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className={styles.bookBtn}>
        <Button onClick={bookService} title="Book Now"/>
      </div>
    </div>
  </div>
  )
}