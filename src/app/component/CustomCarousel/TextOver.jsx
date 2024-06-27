import React from 'react'
import styles from './textover.module.css'
import Link from 'next/link'
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function TextOver({content}) {
    const text = [`Welcome to Star Repairing Center`,
    
    `Your one-stop-shop for`,
    
    `${content} repair needs in Kolkata.`,
    
    `Contact us: +91 78906 94858`,
    
    `To schedule an appointment and experience the difference in our services.`]
  return (
    <div className={styles.textOver}>
        <div className={styles.container}>
        <h1>STAR REPAIRING CENTER</h1>
        {
            text.map((item, index) => {
                return <p key={index}>{item}</p>
            })
        }
        <div className={styles.btnContainer}>
            <button className={styles.actionBtn}>
            <Link href="tel:+917890694858"><FaPhoneAlt/><span>Call</span></Link>
            </button>
            <button className={styles.actionBtn}>
                <Link href={`https://wa.me/+917890694858?text=I want to book an appointment for my ${content}`}><FaWhatsapp/> <span>Whatsapp</span></Link>
            </button>
        </div>
        </div>
    </div>
  )
}
