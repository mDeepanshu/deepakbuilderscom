import React, { useEffect, useState, useRef, use } from "react";
import styles from "./project-detail.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import banner1 from "../../assets/project-details/one.jpg";
import banner2 from "../../assets/project-details/two.jpg";
import banner3 from "../../assets/project-details/three.jpg";
import banner4 from "../../assets/project-details/four.jpg";
import { ReactComponent as ArrowRight } from "../../assets/featuredprojects/arrowright.svg";
import { ReactComponent as ArrowLeft } from "../../assets/featuredprojects/arrowleft.svg";
import { ReactComponent as Rupee } from "../../assets/featuredprojects/rupee.svg";
import { useParams } from "react-router-dom";
import getData from "../../gateway/getProjects.js";

import video from "../../assets/project-details/property.mp4";

function ProjectDetails() {
  const { id } = useParams();
  const [banner, setBanner] = useState(0);
  const containerRef = useRef(null);
  const [projectDetails, setProjectDetails] = useState({});

  const move = (direction) => {
    if (!containerRef.current) return;
    // const scrollAmount = direction ? -200 : 200; // Adjust scroll amount as needed
    // containerRef.current.scrollLeft += scrollAmount;
    if (direction && banner < 3) setBanner((prev) => prev + 1);
    else if (!direction && banner > 0) setBanner((prev) => prev - 1);
  };

  const fetchProjectDetails = async () => {
    const data = await getData();
    const project = data[id];
    if (project) {
      setProjectDetails(project);
      console.log(project.Project_Video_Link);
    } else {
      console.error("Project not found");
    }
  };

  useEffect(() => {
    fetchProjectDetails();
  }, []);

  useEffect(() => {
    containerRef.current.style.transform = `translateX(-${25 * banner}%)`;
  }, [banner]);

  return (
    <>
      <div>
        <div className={styles.projectDetail}>
          <h1 className={styles.bannerHeading}>Project Details</h1>
        </div>
        <div className={styles.projectDetailContainer}>
          <div className={styles.mainDetails}>
            <div className={styles.pHeading}>
              <span>Luxurious Living Spaces</span>
              <span>
                <Rupee width={34} height={34} onClick={() => move(false)} className={styles.arrow_svg} />
                {projectDetails.Property_Price}
              </span>
            </div>
            <div className={styles.pImages}>
              <div className={styles.slider} ref={containerRef}>
                {projectDetails?.Property_Images_Links?.map((image, index) => (
                  <div key={index}>
                    <img src={image} className={styles.banner_img} />
                  </div>
                ))}
              </div>
              <div className={styles.arrowBtnGrp}>
                <div className={styles.arrowBtns}>
                  <ArrowLeft width={34} height={34} onClick={() => move(false)} className={styles.arrow_svg} />
                </div>
                <div className={styles.arrowBtns}>
                  <ArrowRight width={34} height={34} onClick={() => move(true)} className={styles.arrow_svg} />
                </div>
              </div>
            </div>
            <div className={styles.pDescription}>
              <h1>About Property</h1>
              <p className={styles.properties_line}></p>
              <p>{projectDetails.Property_Description}</p>
            </div>
            <div className={styles.ammenities}></div>
            <div className={styles.pvideo}>
              <h1>Property Video</h1>
              <p className={styles.properties_line}></p>
              <div className={styles.videoContainer}>
                {projectDetails?.Project_Video_Link && (
                  <video width="100%" height="100%" controls>
                    <source src={projectDetails.Project_Video_Link} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            </div>
            <div className={styles.pLoc}>
              <h1>Map Location</h1>
              <p className={styles.properties_line}></p>
              <div>
                <iframe
                  src={projectDetails.Property_Location}
                  width="100%"
                  height="450"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  className={styles.map}
                ></iframe>
              </div>
            </div>
          </div>
          {/* <div className={styles.sideDetails}>
          <div className={styles.highlight}>fff</div>
          <div className={styles.contact}></div>
        </div> */}
        </div>
      </div>
    </>
  );
}

export default ProjectDetails;
