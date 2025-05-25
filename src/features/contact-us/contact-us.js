import React, { useEffect, useState, useRef, use } from "react";
import styles from "./contact-us.module.css";
import address from "../../assets/contact-us/icon-address.svg";
import email from "../../assets/contact-us/icon-email-address.svg";
import phone from "../../assets/contact-us/icon-contactno.svg";

const ContactUs = () => {
  return (
    <div>
      <div className={styles.projectDetail}>
        <h1 className={styles.bannerHeading}>CONTACT US</h1>
      </div>
      <div className={styles.row_two}>
        <div className={styles.page_name}>
          <p className={styles.small_line}></p>CONTACT US
        </div>
        <div>
          <h2>Contact Details</h2>
        </div>
        <div className={styles.contact_options}>
          <div>
            <div className={styles.image_wrapper}>
              <img src={address} />
            </div>
            <div>
              <h3>Address</h3>
            </div>
            <div className={styles.contact_detail}>Sushila Parisar, Amkhera Road, Adhartal, Jabalpur</div>
          </div>
          <div>
            <div className={styles.image_wrapper}>
              <img src={email} />
            </div>
            <div>
              <h3>Email</h3>
            </div>
            <div className={styles.contact_detail}>info@deepakbuilders.com</div>
          </div>
          <div>
            <div className={styles.image_wrapper}>
              <img src={phone} />
            </div>
            <div>
              <h3>Phone</h3>
            </div>
            <div className={styles.contact_detail}>+91-7979999777</div>
          </div>
        </div>
      </div>
      <div className={styles.row_three}>
        <div className={styles.page_name}>
          <p className={styles.small_line}></p>Get in Touch
        </div>
        <div className={styles.row_three_subtitle}>
          <h1>Feel Free to Drop Us a Message</h1>
        </div>
        <div className={styles.contact_form}>
          <input className={styles.inputField} type="text" placeholder="Your Name" />
          <input className={styles.inputField} type="email" placeholder="Your Email" />
          <textarea className={styles.textArea} placeholder="Your Message"></textarea>
          <button className={styles.submitButton}>Send Message</button>
        </div>
      </div>
      <div className={styles.row_four}>
        <div className={styles.page_name}>
          <p className={styles.small_line}></p>Google Map
        </div>
        <div className={styles.row_three_subtitle}><h1>How to Reach us?</h1></div>
              <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4512.116410463274!2d79.92886977601168!3d23.207040709417843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981af57ae78f6b9%3A0x468c0c9fd0f0f960!2sSushila%20parisar!5e1!3m2!1sen!2sin!4v1747433156670!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      </div>
    </div>
  );
};

export default ContactUs;
