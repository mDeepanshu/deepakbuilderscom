import React, { useEffect, useState, useRef, use } from "react";
import left_line from "../../assets/svgs/left_line.svg";
import right_line from "../../assets/svgs/right_line.svg";

import property1 from "../../assets/allprojects/1.webp";
import property2 from "../../assets/allprojects/2.webp";
import property3 from "../../assets/allprojects/3.webp";
import property4 from "../../assets/allprojects/4.webp";

import styles from "./all-projects.module.css";
import { Link } from "react-router-dom";

function AllProjects(props) {
  const [properties, setProperties] = useState([
    {
      property_img: property1,
      property_name: "",
      property_location: "",
      price: "",
      property_desc: "",
    },
    {
      property_img: property2,
      property_name: "",
      property_location: "",
      price: "",
      property_desc: "",
    },
    {
      property_img: property1,
      property_name: "",
      property_location: "",
      price: "",
      property_desc: "",
    },
    {
      property_img: property2,
      property_name: "",
      property_location: "",
      price: "",
      property_desc: "",
    },
    {
      property_img: property3,
      property_name: "",
      property_location: "",
      price: "",
      property_desc: "",
    },
    {
      property_img: property4,
      property_name: "",
      property_location: "",
      price: "",
      property_desc: "",
    },
  ]);

  return (
    <>
      <div>
        <div className={styles.row_one}>
          <div className={styles.swing}>
            <hr className={styles.verticleline} />
            <div className={styles.rectangletag}>
              <h4>
                <span>
                  <Link to="/" className={styles.back_label}>BACK</Link>
                </span>
              </h4>
            </div>
          </div>
          <div className={styles.left_line}>
            <img src={left_line} width="400px" height="15px" className={styles.right_line_img} />
          </div>
          <div className={styles.title}>EXPLORE HOMES</div>
          <div className={styles.right_line}>
            <img src={right_line} width="400px" height="15px" className={styles.left_line_img} />
          </div>
        </div>
        <div className={styles.row_two}>
          {properties?.map((id, index) => (
            <Link to="/projectDetails" className={styles.link} key={index}>
              <div className={styles.card}>
                <div className={styles.property_img}>
                  <img src={properties[index].property_img} className={styles.banner_img} width="400px" height="500px" />
                </div>
                <div className={styles.property_name}>Luxurious Living Spaces</div>
                <div className={styles.property_location}>101 Serene Avenue, Maplewood Gardens.</div>
                <div className={styles.price}>90000</div>
                <div className={styles.property_desc}>4 Bedroom 2 Bathroom 360 Sqft</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default AllProjects;
