import React, { useEffect, useState, useRef, use } from "react";
import styles from "./locate-us.module.css";

const LocateUs = () => {
  return (
    <div className={styles.locate_us_container}>
      <div className={styles.locate_us_headings}>
        <h1>LOCATE US</h1>
        <h3>Can’t wait to meet you in person! We’re here and ready to welcome you.</h3>
      </div>
      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4512.116410463274!2d79.92886977601168!3d23.207040709417843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981af57ae78f6b9%3A0x468c0c9fd0f0f960!2sSushila%20parisar!5e1!3m2!1sen!2sin!4v1747433156670!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default LocateUs;
