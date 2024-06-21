import React from 'react'
import styles from './navbar.module.css'
export default function Navbar() {
  return (
    <div className={styles.navbar}>
        <div className={styles.logo}>Logo</div>
        <div className={styles.links}>
            <h6>Home</h6>
            <h6>About Us</h6>
            <h6>Contact Us</h6>
            <h6>Services</h6>
            <h6>Enquiry</h6>
        </div>
    </div>
  )
}
