import React, { useEffect, useState, useRef, use } from "react";
import styles from "./our_values.module.css";

import left_line from "../../assets/svgs/left_line.svg";
import right_line from "../../assets/svgs/right_line.svg";

import quality from "../../assets/ourvalues/quality_img.webp";
import sustainability_img from "../../assets/ourvalues/sustainability_img.webp";
import thoughtful_design_img from "../../assets/ourvalues/thoughtful_design_img.webp";
import thriving_communities_img from "../../assets/ourvalues/thriving_communities_img.webp";

function OurValues() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.row_one}>
          <div className={styles.left_line}>
            <img src={left_line} width="400px" height="15px" className={styles.right_line_img} />
          </div>
          <div className={styles.title}>VALUES WE PRESERVE</div>
          <div className={styles.right_line}>
            <img src={right_line} width="400px" height="15px" className={styles.left_line_img} />
          </div>
        </div>
        <div className={styles.row_two}>
          <div className={styles.description}>We create spaces that enable Everyday Joys; one community, one family, and one home at a time.</div>
        </div>
        <div className={styles.row_three}>
          <img src={quality} width="340px" height="430px" className={styles.left_line_img} />
          <img src={sustainability_img} width="340px" height="430px" className={styles.left_line_img} />
          <img src={thoughtful_design_img} width="340px" height="430px" className={styles.left_line_img} />
          <img src={thriving_communities_img} width="340px" height="430px" className={styles.left_line_img} />
        </div>
      </div>
    </>
  );
}

export default OurValues;
