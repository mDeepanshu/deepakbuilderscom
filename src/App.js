import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState, useRef, use } from "react";
import { Outlet } from "react-router-dom";

import Header from "./features/header/header";
import Footer from "./features/footer/footer";
import Admin from "./features/admin/admin";

function App() {
  const [isMainPage, setMainPage] = useState(true);
  const [isAdminPage, setAdminPage] = useState(false);

  const handlePage = (val) => {
    setMainPage(val);
  };

  const handleAdminPage = (val) => {
    setAdminPage(val);
  };

  return (
    <>
      {isAdminPage && <Admin handleAdminPageChange={handleAdminPage} />}
      {!isAdminPage && (
        <>
          <Header handlePageChange={handlePage} handleAdminPageChange={handleAdminPage} isHomePage={isMainPage}></Header>
          <Outlet />
          <Footer></Footer>
        </>
      )}
    </>
  );
}

export default App;
