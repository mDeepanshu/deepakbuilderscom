import React, { useEffect, useState, useRef, use } from "react";
import styles from "./featured-project.module.css";
import building from "../../assets/featuredprojects/building.svg";
import property1 from "../../assets/featuredprojects/property-1.png";
import property2 from "../../assets/featuredprojects/property-2.png";
import property3 from "../../assets/featuredprojects/property-3.png";
import property4 from "../../assets/featuredprojects/property-4.png";
import arrowleft from "../../assets/featuredprojects/arrowleft.svg";
import arrowright from "../../assets/featuredprojects/arrowright.svg";

function FeaturedProjects() {
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

  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = x - startX; // Multiplier for faster scrolling
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const move = (direction) => {
    if (!containerRef.current) return;
    const scrollAmount = direction ? -200 : 200; // Adjust scroll amount as needed
    containerRef.current.scrollLeft += scrollAmount;
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.row_one}>
          <div className={styles.description}>
            <div className={styles.label_one}>
              <p className={styles.properties_line}></p> PROPERTIES
            </div>
            <div className={styles.label_two}>Feature Properties</div>
            <div>Lorem ipsum dolor sit amet consectetur. Accumsan lacus neque nunc convallis eleifend vitae et felis potenti.</div>
            <div>
              <button type="button" className={styles.view_property_btn}>
                <div className={styles.btn_label}>View Properties</div>
                <img src={building} width="20px" height="20px" />
              </button>
            </div>
            <div className={styles.arrowBtnGrp}>
              <div className={styles.arrowBtns}>
                <img src={arrowleft} width="34px" height="34px" onClick={() => move(true)} />
              </div>
              <div className={styles.arrowBtns}>
                <img src={arrowright} width="34px" height="34px" onClick={() => move(false)} />
              </div>
            </div>
          </div>
          <div className={styles.scroll_section} ref={containerRef} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseLeave={handleMouseUp} onMouseUp={handleMouseUp}>
            {properties?.map((id, index) => (
              <div key={id} className={styles.property_card}>
                <div className={styles.viewDetailesBtn}> View Details</div>
                <div className={styles.property_img}>
                  <img src={properties[index].property_img} className={styles.banner_img} />
                </div>
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
