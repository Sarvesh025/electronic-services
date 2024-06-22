'use client';
import React from 'react'
import styles from './form.module.css'
export default function Form() {

    function handelSubmit(e) {
      e.preventDefault();
    }

  return (
    <div className={styles.form}>
        <form onSubmit={handelSubmit}>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <input type="email" name='email' placeholder='Enter your email' required/>
            <input type="text" name='address' placeholder='Enter your address' required/>
            <select name="appliances" required>
                <option value="javascript">Select your problem</option>
                <option value="air-conditioner">Air Conditioner</option>
                <option value="refrigerators">Refrigerators</option>
                <option value="microwave">Microwave</option>
                <option value="washing-machine">Washing machine</option>
            </select>
            <textarea name="address" cols="20" rows="10" placeholder='Write your problems...' required/>
            <button type="submit">ENQUIRE NOW</button>
        </form>
    </div>
  )
}
