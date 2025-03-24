import React, { useEffect, useState, useRef } from "react";
import styles from "./header.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CallIcon from "@mui/icons-material/Call";
import menu from "../../assets/header/svgexport-1.svg";
import phone from "../../assets/header/svgexport-2.svg";

function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Hide when scrolling down
      } else {
        setIsVisible(true); // Show when scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <div>
        <div className={`${styles.container} ${isVisible ? styles.visible : styles.hidden}`}>
          <div className={styles.logo}>RK CONSTRUCTION</div>
          <div className={styles.icons}>
            <div className={styles.contact}>OUR PROJECT</div>
            <div className={styles.svg_icons}>
              <img src={phone} width="43px" height="43px" />
            </div>
            <div className={styles.svg_icons}>
              <img src={menu} width="43px" height="43px" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
