import React, { useEffect, useState, useRef, use } from "react";
import left_line from "../../assets/svgs/left_line.svg";
import right_line from "../../assets/svgs/right_line.svg";

import { ReactComponent as Rupee } from "../../assets/featuredprojects/rupee.svg";

import styles from "./all-projects.module.css";
import { Link } from "react-router-dom";
import getData from "../../gateway/getProjects.js";

function AllProjects(props) {
  const [properties, setProperties] = useState([]);

  const fetchData = async () => {
    try {
      const response = await getData();
      setProperties(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        <div className={styles.row_one}>
          <div className={styles.swing}>
            <hr className={styles.verticleline} />
            <div className={styles.rectangletag}>
              <h4>
                <span>
                  <Link to="/" className={styles.back_label}>
                    BACK
                  </Link>
                </span>
              </h4>
            </div>
          </div>
          <div className={styles.title_container}>
            <div className={styles.line_wrapper}>
              <img src={left_line} className={styles.line_img} />
            </div>
            <p className={styles.title}>EXPLORE HOMES</p>
            <div className={styles.line_wrapper}>
              <img src={right_line} className={styles.line_img} />
            </div>
          </div>
        </div>
        <div className={styles.row_two}>
          {properties?.map((id, index) => (
            <div className={styles.card}>
              <Link to={`/projectDetails/${index}`} className={styles.link} key={index}>
                <div className={styles.property_img}>
                  <img
                    src={properties[index].Banner_Image_Link}
                    className={styles.banner_img}
                    style={{ maxWidth: "600px", height: "400px",width: "100%" }}
                  />
                </div>
                <div className={styles.property_name}>{properties[index].Project_Name}</div>
                <div className={styles.property_location}>{properties[index].Property_Address}</div>
                <div className={styles.price}>
                  <Rupee width={15} height={14} className={styles.rupee_sign} />
                  {properties[index].Property_Price}
                </div>
                <div className={styles.property_desc}>
                  {properties[index].Property_Bedroom} Bedroom {properties[index].Property_Bathroom} Bathroom{" "}
                  {properties[index].Property_SqFt} Sqft
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AllProjects;
