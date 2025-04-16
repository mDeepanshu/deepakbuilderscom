import React, { useEffect, useState, useRef, use } from "react";
import styles from "./home.module.css";
import banner1 from "../../assets/banner/one.avif";
import banner2 from "../../assets/banner/two.avif";
import banner3 from "../../assets/banner/three.avif";
import banner4 from "../../assets/banner/four.avif";
import OurValues from "../our-values/our_values";
import FeaturedProjects from "../featured-projects/featured-projects";

function Home() {
  const sliderRef = useRef(null);
  const labels = ["radio1", "radio2", "radio3", "radio4"];

  const [bannerIdx, setBannerIdx] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        setBannerIdx((prev) => (prev + 1) % 4);
      }
    }, 4000);
  
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${bannerIdx * 25}%)`;
    }
  }, [bannerIdx]);  

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
              <label key={id} htmlFor={id} className={`${bannerIdx === index ? styles.selected_banner : ""} ${styles.banner_label}`} onClick={() => setBannerIdx(index)}></label>
            ))}
          </div>
        </div>
      </div>
      <OurValues></OurValues>
      <FeaturedProjects></FeaturedProjects>
    </>
  );
}

export default Home;
