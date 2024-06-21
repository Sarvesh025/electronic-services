import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
export default function Navbar() {
  return (
    <div className={styles.navbar}>
        <div className={styles.logo}>Logo</div>
        <div className={styles.links}>
            <h6>Home</h6>
            <h6><Link href='/pages/about'>About us</Link></h6>
            <h6><Link href='/pages/contact'>Contact us</Link></h6>
            <h6>Services</h6>
            <h6>Enquiry</h6>
        </div>
    </div>
  )
}
