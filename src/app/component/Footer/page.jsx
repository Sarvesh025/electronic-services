import React from 'react'
import styles from './footer.module.css'

export default function Footer() {

    const contact = [{
        title: 'Phone :',
        value: '+917890694858'
    },
    {
        title: 'Email :',
        value: 'starepairingcenter@gmail.com'
    },
    {
        title: 'Address :',
        value: 'hbsbc sdv dsfve eefe fwefe'
    }
    ];

    const intro = "In our services, we prioritize customer satisfaction and strive to provide the best possible service to our customers. If you're in need of appliance repair services, don't hesitate to contact us. We're here to help you get your appliances up and running as soon as possible."
    return (
        <div className={styles.footer}>
            <div className={styles.top}>
                <div className={styles.contact}>
                    <h2>CONTACT</h2>
                    <ul className={styles.info}>
                        {contact.map((e, i) => {
                            return (
                                <li key={i}><b>{e.title}</b> {e.value}</li>
                            )
                        })}
                    </ul>
                </div>
                <div className={styles.intro}>
                    <h2>STAR REPAIRING CENTER</h2>
                    <p>{intro}</p>
                    <div className={styles.links}>
                        <h2>LINKS </h2>
                        <ul className={styles.link_info}>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                &copy; All Rights Reserved.
            </div>
        </div>
    )
}
