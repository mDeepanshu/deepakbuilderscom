import React, { useEffect, useState, useRef } from "react";
import styles from "./header.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CallIcon from "@mui/icons-material/Call";
import menu from "../../assets/header/svgexport-1.svg";
import phone from "../../assets/header/svgexport-2.svg";

function Header(props) {
  const [isVisible, setIsVisible] = useState(true);
  const [openPopover, setOpenPopover] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navigate = (val) => {
    props.handlePageChange(val);
  };

  const togglePopover = () => {
    setOpenPopover((prev) => !prev);
  };

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
        <div className={`${styles.container} ${isVisible ? styles.visible : styles.hidden} ${!props.isHomePage ? styles.notHomePage : ""}`}>
          <div className={styles.logo} onClick={() => navigate(true)}>
            RK CONSTRUCTION
          </div>
          <div className={styles.icons}>
            <div className={styles.contact} onClick={() => navigate(false)}>
              OUR PROJECT
            </div>
            <div className={styles.phone_icn}>
              <img src={phone} width="43px" height="43px" onClick={togglePopover}/>
            </div>
            {openPopover && <div className={styles.popover}>
              <div>
                <div>+91-9898986565</div>
                <div>+91-9898986565</div>
              </div>
            </div>}
            <div>
              <img src={menu} width="43px" height="43px" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
