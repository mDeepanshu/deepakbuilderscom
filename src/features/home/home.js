import React, { useEffect, useState, useRef } from "react";
import styles from "./home.module.css";
import banner1 from "../../assets/banner/one.avif";
import banner2 from "../../assets/banner/two.avif";
import banner3 from "../../assets/banner/three.avif";
import banner4 from "../../assets/banner/four.avif";

function Home() {
  const sliderRef = useRef(null);
  const labels = ["radio1", "radio2", "radio3", "radio4"];

  setTimeout(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = "translateX(-25%)";
    }
  }, 2000);

  const banner_change = (index) => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${index * 25}%)`;
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.carousel}>
          <div ref={sliderRef} className={styles.slider}>
            <div>
              <img src={banner1} className={styles.banner_img} />
            </div>
            <div>
              <img src={banner2} className={styles.banner_img} />
            </div>
            <div>
              <img src={banner3} className={styles.banner_img} />
            </div>
            <div>
              <img src={banner4} className={styles.banner_img} />
            </div>
          </div>
          <div className={styles.banner_radio_grp}>
            <input type="radio" name="radio-btn" className="banner_radio" id="radio1" />
            <input type="radio" name="radio-btn" className="banner_radio" id="radio2" />
            <input type="radio" name="radio-btn" className="banner_radio" id="radio3" />
            <input type="radio" name="radio-btn" className="banner_radio" id="radio4" />
          </div>
          <div className={styles.banner_label_grp}>
            {labels.map((id, index) => (
              <label key={id} htmlFor={id} className={styles.banner_label} onClick={() => banner_change(index)}></label>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
