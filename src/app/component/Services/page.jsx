import React from 'react'
import styles from './services.module.css'
export default function Services({thumbnail, title, description}) {
    function bookService(){

    }

  return (
    <div className={styles.services} >
    <img src={thumbnail} className={styles.thumbnail} alt="thumbnail"/>
    <div className={styles.serviceDetails}>
      <h1>{title}</h1>
      <p>{description}</p>
      <button className={styles.bookBtn} >Book Now</button>
    </div>
  </div>
  )
}
