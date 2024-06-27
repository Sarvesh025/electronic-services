'use client'
import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Button from '../Button/page';

export default function Navbar({scrollToForm}) {
  const [scrollhight, setScrollhight] = useState(0);
  useEffect(() => {
    if(window !== 'undefined'){

      const handleScroll = () => {
        setScrollhight(window.scrollY)
      }
      
      window.addEventListener('scroll', handleScroll)
      
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  return (
    <div className={styles.navbar} style={{
      backgroundColor:`rgb(0,0,0,${scrollhight / 1000})`,
      backdropFilter:`blur(${scrollhight / 10}px)`
    }}>
      <div className={styles.logo}>
        <img src="./logo.png" alt="star repairing center" />
      </div>
      <div className={styles.links}>
        <h6><Link href="/">Home</Link></h6>
        <h6><Link href='/pages/about'>About us</Link></h6>
        <Button onClick={scrollToForm} title="Enquiry"/>
      </div>
    </div>
  )
}
