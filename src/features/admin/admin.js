import React, { useEffect, useState, useRef } from "react";
import styles from "./admin.module.css";
import AddProject from "./admin-screens/add-project/add-project";
import AllProjects from "./admin-screens/all-projects/all-projects";

function Admin({ handleAdminPageChange }) {
  const [selectedTab,setSelectedTab] = useState("tab1");
  const tabsArray = [
    { id: "tab1", name: "tab1", label: "Add Project" },
    { id: "tab2", name: "tab2", label: "All Projects" },
  ];
  const changeTab = (tabId) => {
    setSelectedTab(tabId);
  }

  return (
    <>
      <div className={styles.admin_container}>
        <h1>ADMIN SETTINGS</h1>
        <div className={styles.back_link} onClick={() => handleAdminPageChange(false)}>BACK</div>
        <div>
          <div className={styles.tabset}>
            {tabsArray.map((tab) => (
              <>
                <input
                  key={tab.id}
                  className={styles.radio_input}
                  type="radio"
                  name="tabset"
                  id={tab.id}
                  aria-controls={tab.name}
                  checked={selectedTab === tab.id}
                  onChange={() => changeTab(tab.id)}
                />
                <label key={tab.id} className={styles.tab_label} for={tab.id}>
                  {tab.label}
                </label>
              </>
            ))}
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
    </>
  );
}

export default Admin;
