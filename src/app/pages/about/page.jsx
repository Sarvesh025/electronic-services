import React from 'react'
import styles from './about.module.css'
export default function About() {

  const knowAbout = [
    "Star Repairing Center is a reliable and trustworthy service provider for all your appliance repair needs. We understand the importance of your household appliances in your daily life, which is why we provide efficient and effective repair services for a wide range of appliances.",
    "Our team of highly trained and experienced technicians is equipped to handle all types of repairs, including AC repair, microwave repair, refrigerator repair, and washing machine repair. Whether it's a simple fix or a complex issue, our team has the knowledge and expertise to get your appliances up and running in no time.",
    "When it comes to AC repair, we understand the discomfort that comes with a malfunctioning air conditioner, especially during hot summer months. Our technicians are trained to diagnose and repair all types of AC units, ensuring that you stay cool and comfortable throughout the year.",
    "Microwaves are an essential part of any modern kitchen, and we understand the frustration that comes with a faulty microwave. Our technicians are trained to diagnose and repair all types of microwave issues, ensuring that your appliance is back to its optimal functioning in no time.",
    "Refrigerators are an essential part of any home, and a malfunctioning fridge can lead to a significant inconvenience. Our technicians are trained to diagnose and repair all types of refrigerator issues, ensuring that your food and beverages stay fresh and cool.",
    "Washing machines are a crucial appliance in any household, and we understand the inconvenience that comes with a malfunctioning washing machine. Our technicians are trained to diagnose and repair all types of washing machine issues, ensuring that your laundry is clean and fresh in no time.",
    "At Star Repairing Center, we prioritize customer satisfaction and strive to provide the best possible service to our customers. If you're in need of appliance repair services, don't hesitate to contact us. We're here to help you get your appliances up and running as soon as possible."
  ]

  const chooseUs = [
    {title : "Expertise and Experience: ",
     content : "Our team of technicians are highly trained and have extensive experience in repairing a wide range of home appliances, including AC units, microwaves, refrigerators, and washing machines."
    },
    {title : "Reliable and Trustworthy: ",
     content : "We understand the importance of your household appliances in your daily life, so we provide efficient and effective repair services for a wide range of appliances."
    },
    {title : "Customer Satisfaction: ",
     content : "At Star Repairing Center, we prioritize customer satisfaction and strive to provide the best possible service to our customers. If you're in need of appliance repair services, don't hesitate to contact us. We're here to help you get your appliances up and running as soon as possible."
    },
    {
      title : "24/7 Support: ",
      content : "We offer 24/7 customer support, ensuring that you can easily reach out to our team if you have any questions or need assistance with your repair."
    },
    {
      title : "Prompt and Efficient Service: ",
      content : "We understand the inconvenience of a malfunctioning appliance, which is why we provide prompt and efficient repair services to get your appliance up and running as soon as possible."
    },
    {
      title : "Competitive Pricing: ",
      content : "We offer competitive pricing for our repair services, ensuring that you get the best possible value for your money."
    },
    {
      title : "Quality Parts and Equipment: ",
      content : "We use only high-quality parts and equipment for our repairs, ensuring that your appliance runs smoothly and efficiently for years to come."
    },
    {
      title : "Convenient Scheduling: ",
      content : "We offer flexible scheduling options, making it easy for you to book a repair service that fits your busy schedule."
    }
  ]

  return (
    <div className={styles.about}>
        <h1>ABOUT US</h1>
        <div className={styles.content}>
          <h2>Know About Star Repairing Center</h2>
          {
            knowAbout.map((text, index) => <p key={index}>{text}</p>)
          }
        </div>

        <div className={styles.content}>
          <h2>Why Choose Star Repairing Center?</h2>
          <p>When it comes to choosing a service provider for your home appliance repairs, there are several reasons to choose SS Appliance Company</p>
          <ul className={styles.chooseUs}>
          {
            chooseUs.map((item, index) =>
            <li key={index}><b>{item.title}</b> {item.content}</li>
            )
          }
          </ul>

        </div>
    </div>
  )
}
