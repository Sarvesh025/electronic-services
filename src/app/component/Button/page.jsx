import React from 'react'
import styles from './button.module.css'
export default function Button({title, onClick}) {
  return (
    <button className={`${styles.button} ${styles.type1}`} onClick={onClick}>
        <span className={styles.btnTxt}>{title}</span>
    </button>
  )
}
