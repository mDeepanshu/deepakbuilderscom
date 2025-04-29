import React, { useEffect, useState, useRef } from "react";
import styles from "./admin.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import AddProject from "./admin-screens/add-project/add-project";
import AllProjects from "./admin-screens/all-projects/all-projects";
function Admin() {

  return <>
    <div className={styles.admin_container}>
      <h1>ADMIN SETTINGS</h1>
      <Link to="/">BACK</Link>
      <div>
        <div className={styles.tabset}>
          <input className={styles.radio_input} type="radio" name="tabset" id="tab1" aria-controls="new_project" />
          <label className={styles.tab_label} for="tab1">Add Project</label>
          <input className={styles.radio_input} type="radio" name="tabset" id="tab2" aria-controls="all_projects" />
          <label className={styles.tab_label} for="tab2">All Project</label>
          <div className={styles.tabPanels}>
            <section id="new_project" className={styles.tabPanel}>
              <AddProject />
            </section>
            <section id="all_projects" className={styles.tabPanel}>
              <AllProjects />
            </section>
          </div>
        </div>
      </div>
    </div>
  </>;
}

export default Admin;
