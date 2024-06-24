'use client'
import React from 'react'
import styles from './services.module.css'
import Button from '../Button/page';
export default function Services({ thumbnail, title, description, onData, scrollToForm }) {

  function bookService() {
    scrollToForm();
    if (title === "Air Conditioner") {
      onData("air-conditioner");
    }
    else if (title === "Refrigerator") {
      onData("refrigerators");
    }
    else if (title === "Washing Machine") {
      onData("washing-machine");
    }
    else if (title === "Microwave") {
      onData("microwave");
    }
  };

  return (
    <div className={styles.services} >
      <img src={thumbnail} className={styles.thumbnail} alt="thumbnail" />
      <div className={styles.serviceDetails}>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className={styles.bookBtn}>
          <Button onClick={bookService} title="Book Now" />
        </div>
      </div>
    </div>
  )
}