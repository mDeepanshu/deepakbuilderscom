import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState, useRef, use } from "react";

import Header from "./features/header/header";
import Home from "./features/home/home";
import OurValues from "./features/our-values/our_values";
import Footer from "./features/footer/footer";
import FeaturedProjects from "./features/featured-projects/featured-projects";
import AllProjects from "./features/all-projects/all-projects";

function App() {
  const [isMainPage, setMainPage] = useState(true);

  const handlePage = (val) => {
    setMainPage(val);
  };

  return (
    <>
      <Header handlePageChange={handlePage} isHomePage={isMainPage}></Header>
      {isMainPage ? (
        <>
          <Home></Home>
          <OurValues></OurValues>
          <FeaturedProjects></FeaturedProjects>
        </>
      ) : (
        <>
          <AllProjects handlePageChange={handlePage}></AllProjects>
        </>
      )}
      <Footer></Footer>
    </>
  );
}

export default App;
