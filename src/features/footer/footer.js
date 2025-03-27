import React, { useEffect, useState, useRef } from "react";
import styles from "./footer.module.css";

function Footer() {
  return (
    <>
      <div className={styles.container}>
        <div>
          <div className={styles.heading}>RK Constructions</div>
          <div>
            Established in 1990, Godrej Properties is the first real estate company to have ISO certification. The company is currently developing landmark projects in 12 cities across India covering
            over 18.58 million square meters. Godrej Properties is known to bring innovation and excellence to the real estate industry.
          </div>
        </div>
        <div>
          <div className={styles.heading}>Contact Info.</div>
          <div>123, Lorem Ipsum, Street no, Cityname, Country 123456</div>
          <div>Phone: +91 1234567890</div>
          <div>Email: XXXXXXXXXXXXXXXXXXXXXXXXX</div>
        </div>
        <div>
          <div className={styles.heading}>Quick Links</div>
          <ul>
            <li><div className={styles.li_div}>All Projects</div></li>
            <li><div className={styles.li_div}>Contact Us</div></li>
            <li><div className={styles.li_div}>Locate Us On Map</div></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
