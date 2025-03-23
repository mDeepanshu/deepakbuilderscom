import React, { useEffect, useState, useRef, use } from "react";
import styles from "./featured-project.module.css";
import building from "../../assets/featuredprojects/building.svg";

function FeaturedProjects() {
  const [properties, setProperties] = useState([
    {
      property_img: "",
      property_name: "",
      property_location: "",
      price: "",
      property_desc: "",
    },
    {
      property_img: "",
      property_name: "",
      property_location: "",
      price: "",
      property_desc: "",
    },
    {
      property_img: "",
      property_name: "",
      property_location: "",
      price: "",
      property_desc: "",
    },
  ]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.row_one}>
          <div className={styles.description}>
            <div className={styles.label_one}>PROPERTIES</div>
            <div>Feature Properties</div>
            <div>Lorem ipsum dolor sit amet consectetur. Accumsan lacus neque nunc convallis eleifend vitae et felis potenti.</div>
            <div>
              <button type="button" className={styles.view_property_btn}>
                <div className={styles.btn_label}>View Properties</div>
                <img src={building} width="20px" height="20px" />
              </button>
            </div>
            <div>
                <button type="button">LEFT</button>
                <button type="button">RIGHT</button>
            </div>
          </div>
          <div className={styles.scroll_section}>
            {properties?.map((id, index) => (
              <div key={id} className={styles.property_card}>
                <div className={styles.property_img}></div>
                <div className={styles.property_name}>Luxurious Living Spaces</div>
                <div className={styles.property_location}>101 Serene Avenue, Maplewood Gardens.</div>
                <div className={styles.price}>90000</div>
                <div className={styles.property_desc}>4 Bedroom 2 Bathroom 360 Sqft</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedProjects;
