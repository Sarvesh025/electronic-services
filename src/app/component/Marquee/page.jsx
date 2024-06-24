import React from 'react'
import Marquee from "react-fast-marquee";
import styles from "./marquee.module.css"
export default function Brands() {
    const arr = ["/carrier.png", "/daikin.png ", "/samsung.png ", "/whirlpool.png ", "/lg.png"];
  return (
    <Marquee speed={100}>
    {arr.map((e) => (
      <img src={e} alt="brand logo" className={styles.image} />
    ))}
  </Marquee>
  )
}
