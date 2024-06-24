'use client';
import React, { useState, useRef, useEffect } from 'react'
import styles from './form.module.css';
import { emailFormat } from '@/app/util';
import emailjs from '@emailjs/browser';
import { forwardRef } from 'react';

const Form = forwardRef(({ data }, ref) => {

  useEffect(() => {
    if (data) {
      setInputs({ ...inputs, appliances: data });
    }
  }, [data]);

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    address: '',
    appliances: '',
    problem: ''
  });

  const [verify, setVerify] = useState({
    email: false,
    phone: false,
    // pincode: false
  });

  const appliances = useRef();

  function handelInputs(e) {
    if (e.target.name === 'name') {
      setInputs({ ...inputs, [e.target.name]: e.target.value });
    }
    else if (e.target.name === 'email') {
      setInputs({ ...inputs, [e.target.name]: e.target.value });
      if (emailFormat(e.target.value)) {
        setVerify({ ...verify, email: true });
      }
      else {
        setVerify({ ...verify, email: false });
      }
    }
    else if (e.target.name === 'address') {
      setInputs({ ...inputs, [e.target.name]: e.target.value });
    }
    else if (e.target.name === 'appliances') {
      setInputs({ ...inputs, [e.target.name]: e.target.value });
    }
    else if (e.target.name === 'problem') {
      setInputs({ ...inputs, [e.target.name]: e.target.value });
    }
  };

  function handelSubmit(e) {
    e.preventDefault();

    if (inputs.name !== '') {
      if (inputs.email !== '' && verify.email) {
        if (inputs.address !== '') {
          if (inputs.appliances !== "select-appliances" && inputs.appliances !== '') {
            if (inputs.problem !== '') {
              console.log(inputs);

              emailjs.sendForm('service_0mldp9b', 'template_ay85z8j', e.target, '5wI3WpMHFKfrs-86k');

              setInputs({
                name: '',
                email: '',
                address: '',
                appliances: '',
                problem: ''
              });

              appliances.current.value = "select-appliances";

            }
            else {
              alert('Please enter your problem');
            }
          }
          else {
            alert('Please select your problem');
          }
        }
        else {
          alert('Please enter your address');
        }
      }
      else {
        alert('Please enter your correct email');
      }
    }
    else {
      alert('Please enter your name');
    }
  };

  return (
    <div className={styles.form} ref={ref}>
      <form onSubmit={handelSubmit}>
        <input type="text" name='name' value={inputs.name} onChange={handelInputs} placeholder='Enter your name' required />
        <input type="email" name='email' value={inputs.email} onChange={handelInputs} placeholder='Enter your email' style={inputs.email !== '' ? (verify.email ? { outline: 'green solid 2px' } : { outline: 'red solid 2px' }) : {}} required />
        <input type="text" name='address' value={inputs.address} onChange={handelInputs} placeholder='Enter your address' required />
        <select name="appliances" value={inputs.appliances} ref={appliances} onChange={handelInputs} required>
          <option value="select-appliances">Select your problem</option>
          <option value="air-conditioner">Air Conditioner</option>
          <option value="refrigerators">Refrigerators</option>
          <option value="microwave">Microwave</option>
          <option value="washing-machine">Washing Machine</option>
        </select>
        <textarea name="problem" value={inputs.problem} onChange={handelInputs} cols="20" rows="10" placeholder='Write your problem here...' required />
        <button type="submit">ENQUIRE NOW</button>
      </form>
    </div>
  )
});

export default Form;
