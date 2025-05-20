import React, { useEffect, useState, useRef, use } from "react";
import styles from "./our_values.module.css";

import left_line from "../../assets/svgs/left_line.svg";
import right_line from "../../assets/svgs/right_line.svg";

import quality from "../../assets/ourvalues/quality_img.webp";
import sustainability_img from "../../assets/ourvalues/sustainability_img.webp";
import thoughtful_design_img from "../../assets/ourvalues/thoughtful_design_img.webp";
import thriving_communities_img from "../../assets/ourvalues/thriving_communities_img.webp";

function OurValues() {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(-500);
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
        <div className={styles.title_container}>
          <div className={styles.line_wrapper}>
            <img src={left_line} className={styles.line_img} />
          </div>
          <p className={styles.title}>VALUES WE PRESERVE</p>
          <div className={styles.line_wrapper}>
            <img src={right_line} className={styles.line_img} />
          </div>
        </div>
        <div className={styles.row_two}>
          <div className={styles.description}>
            We create spaces that enable Everyday Joys; one community, one family, and one home at a time.
          </div>
        </div>
        <div
          className={styles.row_three}
          ref={containerRef}
          onMouseDown={handleDown}
          onMouseMove={handleMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <img src={quality} className={styles.quality_imgs} />
          <img src={sustainability_img} className={styles.quality_imgs} />
          <img src={thoughtful_design_img} className={styles.quality_imgs} />
          <img src={thriving_communities_img} className={styles.quality_imgs} />
        </div>
      </div>
    </>
  );
}

export default OurValues;
