import React, { useEffect, useState, useRef } from "react";
import styles from "./header.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CallIcon from "@mui/icons-material/Call";
import menu from "../../assets/header/svgexport-1.svg";
import phone from "../../assets/header/svgexport-2.svg";
import Callback from "../dialog/callback/callback";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Header(props) {
  const [isVisible, setIsVisible] = useState(true);
  const [openPopover, setOpenPopover] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [open, setOpen] = useState(false);

  const location = useLocation();
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
        <div className={`${styles.container} ${isVisible ? styles.visible : styles.hidden} ${location.pathname !== "/" ? styles.notHomePage : ""}`}>
          <div onClick={() => navigate(true)}>
            <Link to="/" className={styles.logo}>RK CONSTRUCTION</Link>
          </div>
          <div className={styles.icons}>
            <div onClick={() => navigate(false)}>
              <Link to="/allProjects" className={styles.contact}>OUR PROJECT</Link>
            </div>
            <div className={styles.phone_icn}>
              <img src={phone} width="43px" height="43px" onClick={togglePopover} />
            </div>
            {openPopover && (
              <div className={styles.popover}>
                <div className={styles.popover_col1}>
                  <div onClick={() => setOpen(true)}>Write To Us</div>
                </div>
                <div className={styles.verticalLine}></div>
                <div className={styles.popover_col2}>
                  <div>+91-9898986565</div>
                  <div>+91-9898986565</div>
                </div>
              </div>
            )}
            <div>
              <img src={menu} width="43px" height="43px" />
            </div>
          </div>
        </div>
      </div>
      <Callback open={open} onClose={() => setOpen(false)}></Callback>
    </>
  );
}

export default Header;
