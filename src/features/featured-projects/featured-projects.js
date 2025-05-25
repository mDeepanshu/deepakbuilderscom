import React, { useEffect, useState, useRef, use } from "react";
import styles from "./featured-project.module.css";
import building from "../../assets/featuredprojects/building.svg";
import { ReactComponent as ArrowRight } from "../../assets/featuredprojects/arrowright.svg";
import { ReactComponent as ArrowLeft } from "../../assets/featuredprojects/arrowleft.svg";
import { Link } from "react-router-dom";
import shower from "../../assets/featuredprojects/shower.svg";
import area from "../../assets/featuredprojects/area.svg";
import location from "../../assets/featuredprojects/location.svg";
import bed from "../../assets/featuredprojects/bed.svg";
import { ReactComponent as Rupee } from "../../assets/featuredprojects/rupee.svg";
import getData from "../../gateway/getProjects.js";

function FeaturedProjects() {
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

  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleDown = (e) => {
    if (!containerRef.current) return;
    const pageX = e.type.includes("mouse") ? e.pageX : e.touches[0].pageX;
    setIsDragging(true);
    setStartX(pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault(); // Prevent scrolling while dragging
    const pageX = e.type.includes("mouse") ? e.pageX : e.touches[0].pageX;
    const x = pageX - containerRef.current.offsetLeft;
    const walk = x - startX;
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
            <div>
              Discover standout homes carefully selected for their style, location, and value. From modern apartments to luxury estates,
              these listings offer exceptional living and investment opportunities.
            </div>
            <div>
              <button type="button" className={styles.view_property_btn}>
                <div className={styles.btn_label}>
                  <Link to={`/allProjects`} className={styles.projectLink}>
                    View Properties
                  </Link>
                </div>
                <img src={building} width="20px" height="20px" />
              </button>
            </div>
            <div className={styles.arrowBtnGrp}>
              <div className={styles.arrowBtns}>
                <ArrowLeft width={34} height={34} onClick={() => move(true)} />
              </div>
              <div className={styles.arrowBtns}>
                <ArrowRight width={34} height={34} onClick={() => move(false)} />
              </div>
            </div>
          </div>
          <div
            className={styles.scroll_section}
            ref={containerRef}
            onMouseDown={handleDown}
            onMouseMove={handleMove}
            onMouseLeave={handleMouseUp}
            onMouseUp={handleMouseUp}
            onTouchStart={handleDown}
            onTouchMove={handleMove}
            onTouchEnd={handleMouseUp}
            onTouchCancel={handleMouseUp}
          >
            {properties?.map((id, index) => (
              <div key={index} className={styles.property_card}>
                <div className={styles.viewDetailesBtn}>
                  {" "}
                  <Link to={`/projectDetails/${index}`} className={styles.projectLink}>
                    View Details
                  </Link>
                </div>
                <div className={styles.property_img}>
                  <img src={properties[index].Banner_Image_Link} className={styles.banner_img} />
                </div>
                <div className={styles.property_name}>
                  <b>{properties[index].Project_Name}</b>
                </div>
                <div className={styles.property_location}>
                  <img src={location} />
                  {properties[index].Property_Address}
                </div>
                <div className={styles.price}>
                  <Rupee width={15} height={14} className={styles.rupee_sign} />
                  {properties[index].Property_Price}
                </div>
                <div className={styles.property_desc}>
                  <img src={shower} />
                  {properties[index].Property_Bedroom} Bedroom <img src={bed} /> {properties[index].Property_Bathroom} Bathroom{" "}
                  <img src={area} /> {properties[index].Property_SqFt} Sqft
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedProjects;
