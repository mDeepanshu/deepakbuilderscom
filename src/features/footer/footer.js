import React, { useEffect, useState, useRef } from "react";
import styles from "./footer.module.css";
import location from "../../assets/footer/logo.png";
import email from "../../assets/footer/icon-email.svg";
import location_svg from "../../assets/footer/icon-location.svg";
import phone from "../../assets/footer/icon-phone.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img src={location} alt="logo" className={styles.logo} />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.lines}>
            <div className={styles.description}>
              <div className={styles.heading}>RK Constructions <button>Read More</button></div>
              <div>
                Established in 1990, Rai Krishna Constructions is the first real estate company to have ISO certification. The company is currently
                developing landmark projects in 12 cities across India covering over 18.58 million square meters. Godrej Properties is known
                to bring innovation and excellence to the real estate industry.
              </div>
            </div>
            <div className={styles.contact}>
              <div className={styles.heading}>Contact Info. <button>Read More</button></div>
              <div>
                <img src={location_svg} /> <p>Sushila Parisar, Amkhera Road, Adhartal, Jabalpur</p>
              </div>
              <div>
                <img src={phone} /> <p>Phone: +91-7879999777</p>
              </div>
              <div>
                <img src={email} />
                <p>Email: Deepaktwoeight77@gmail.com</p>
              </div>
            </div>
            <div className={styles.quickLinks}>
              <div className={styles.heading}>Quick Links <button>Read More</button></div>
              <ul className={styles.quick_links_list}>
                <li>
                  <Link to={`/allProjects`}>All Projects</Link>
                </li>
                <li>
                  <Link to={`/contactUs`}>Contact Us</Link>
                </li>
                <li>
                  <Link to={`/locateUs`}>Locate Us On Map</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
