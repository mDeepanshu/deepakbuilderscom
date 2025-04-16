import React, { useEffect, useState, useRef } from "react";
import styles from "./project-detail.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import banner1 from "../../assets/project-details/one.jpg";
import banner2 from "../../assets/project-details/two.jpg";
import banner3 from "../../assets/project-details/three.jpg";
import banner4 from "../../assets/project-details/four.jpg";
import { ReactComponent as ArrowRight } from "../../assets/featuredprojects/arrowright.svg";
import { ReactComponent as ArrowLeft } from "../../assets/featuredprojects/arrowleft.svg";

import video from "../../assets/project-details/property.mp4";

function ProjectDetails() {

  const [banner,setBanner] = useState(0);
  const containerRef = useRef(null);
  const move = (direction) => {
    if (!containerRef.current) return;
    // const scrollAmount = direction ? -200 : 200; // Adjust scroll amount as needed
    // containerRef.current.scrollLeft += scrollAmount;
    if (direction && banner < 3) setBanner((prev) => (prev + 1));
    else if(!direction && banner > 0) setBanner((prev) => (prev - 1));

  };

  useEffect(() => {
    containerRef.current.style.transform = `translateX(-${25*banner}%)`;
  }, [banner]);

  return <>
    <div>
      <div className={styles.projectDetail}>
        <h1 className={styles.bannerHeading}>Project Details</h1>
      </div>
      <div className={styles.projectDetailContainer}>
        <div className={styles.mainDetails}>
          <div className={styles.pHeading}>
            <span>Luxurious Living Spaces</span>
            <span>$36,000</span>
          </div>
          <div className={styles.pImages}>
            <div className={styles.slider} ref={containerRef}>
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
            <div className={styles.arrowBtnGrp}>
              <div className={styles.arrowBtns}>
                <ArrowLeft width={34} height={34} onClick={() => move(false)} className={styles.arrow_svg}/>
              </div>
              <div className={styles.arrowBtns}>
                <ArrowRight width={34} height={34} onClick={() => move(true)} className={styles.arrow_svg}/>
              </div>
            </div>
          </div>
          <div className={styles.pDescription}>
            <h1>About Property</h1>
            <p className={styles.properties_line}></p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Lectus ac sed purus ultrices diam eu scelerisque. Eu ipsum curabitur ultricies id vel lacus pellentesque tristique. Nunc amet semper turpis auctor rhoncus amet aliquet commodo. Bibendum leo gravida turpis quis tincidunt. Elit tempor suspendisse sit egestas at aliquam lacus ullamcorper pharetra. Libero faucibus ultrices cursus id in pellentesque mauris a nunc. Et diam ultrices netus velit ornare sem amet tellus molestie.
              Lorem ipsum dolor sit amet consectetur. Sapien ultrices curabitur massa elementum. Suscipit pretium ornare odio in at. Viverra praesent erat ultrices ipsum parturient sit tincidunt pulvinar ornare. Neque orci mauris maecenas imperdiet mauris senectus. Lobortis donec sit urna nulla posuere cras.
              Tempus id lacinia venenatis semper consequat. Sit sagittis venenatis mauris cursus consequat.Lorem ipsum dolor sit amet consectetur. Sapien ultrices curabitur massa elementum. Suscipit pretium ornare odio in at. Viverra praesent erat ultrices ipsum parturient sit tincidunt pulvinar ornare. Neque orci mauris maecenas imperdiet mauris senectus. Lobortis donec sit urna nulla posuere cras. Tempus id lacinia venenatis semper consequat.
            </p>
          </div>
          <div className={styles.ammenities}></div>
          <div className={styles.pvideo}>
            <h1>Property Video</h1>
            <p className={styles.properties_line}></p>
            <div className={styles.videoContainer}>
              <video width="100%" height="100%" controls>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className={styles.pLoc}>
            <h1>Map Location</h1>
            <p className={styles.properties_line}></p>
            <div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1812.0185415224826!2d77.19843162284131!3d28.61443462983125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2a99b6f9fa7%3A0x83a25e55f0af1c82!2sRashtrapati%20Bhavan!5e1!3m2!1sen!2sin!4v1744572592378!5m2!1sen!2sin" width="100%" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className={styles.map}></iframe>
            </div>
          </div>
        </div>
        {/* <div className={styles.sideDetails}>
          <div className={styles.highlight}>fff</div>
          <div className={styles.contact}></div>
        </div> */}
      </div>
    </div>
  </>;
}

export default ProjectDetails;
