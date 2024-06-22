import React from 'react'
import styles from './whatsapp.module.css'
export default function page() {
    const message = "I have a problem with my appliances.";
  return (
    <div className={styles.whatsapp}>
    <a href={`https://wa.me/917890694858?text=${message}`}>
    <img src="/whatsapp.png" alt="whatsapp img" width={60} height={60}/>
    </a>
</div>
  )
}
