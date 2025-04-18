import React, { useEffect, useState, useRef } from "react";
import styles from "./admin.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useForm, Controller } from 'react-hook-form';
import {
  TextField,
  Button,
  Box,
  Typography,
} from '@mui/material';

function Admin() {

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const files = data.bannerImage;
    console.log('Selected Images:', files);

    // If you want to loop through and do something with each file
    Array.from(files).forEach((file, index) => {
      console.log(`Image ${index + 1}:`, file.name);
    });
  };

  return <>
    <div className={styles.admin_container}>
      <h1>ADMIN SETTINGS</h1>
      <Link to="/">BACK</Link>
      <div>
        <div className={styles.tabset}>
          <input className={styles.radio_input} type="radio" name="tabset" id="tab1" aria-controls="new_project" checked />
          <label className={styles.tab_label} for="tab1">Add Project</label>
          <div className={styles.tabPanels}>
            <section id="new_project" className={styles.tabPanel}>
              <div style={{ maxWidth: '500px', margin: '2rem auto' }}>
                <h2>Create Project</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* Project Name */}
                  <div style={{ marginBottom: '1rem' }}>
                    <label>Project Name:</label>
                    <br />
                    <input type="text" {...register('projectName')} required />
                  </div>

                  {/* Banner Image */}
                  <div style={{ marginBottom: '1rem' }}>
                    <label>Banner Image:</label>
                    <br />
                    <input type="file" {...register('bannerImage')} accept="image/*" />
                  </div>

                  {/* Banner Image */}
                  <div style={{ marginBottom: '1rem' }}>
                    <label>Property Images:</label>
                    <br />
                    <input type="file" {...register('bannerImage')} accept="image/*" multiple />
                  </div>

                  <div style={{ marginBottom: '1rem' }}>
                    <label>Project Video:</label>
                    <br />
                    <input
                      type="file"
                      {...register('projectVideo')}
                      accept="video/*"
                    />
                  </div>

                  {/* Property Description */}
                  <div style={{ marginBottom: '1rem' }}>
                    <label>Property Description:</label>
                    <br />
                    <textarea {...register('propertyDescription')} rows={4} required />
                  </div>

                  {/* Property Location */}
                  <div style={{ marginBottom: '1rem' }}>
                    <label>Property Location:</label>
                    <br />
                    <input type="text" {...register('propertyLocation')} required />
                  </div>

                  <button type="submit">Submit</button>
                </form>
              </div>

            </section>
            {/* <section id="dunkles" className={styles.tabPanel}>
              <h2>6C. Dunkles Bock</h2>
              <p><strong>Overall Impression:</strong> A dark, strong, malty German lager beer that emphasizes the malty-rich and somewhat toasty qualities of continental malts without being sweet in the finish.</p>
              <p><strong>History:</strong> Originated in the Northern German city of Einbeck, which was a brewing center and popular exporter in the days of the Hanseatic League (14th to 17th century). Recreated in Munich starting in the 17th century. The name “bock” is based on a corruption of the name “Einbeck” in the Bavarian dialect, and was thus only used after the beer came to Munich. “Bock” also means “Ram” in German, and is often used in logos and advertisements.</p>
            </section> */}
          </div>
        </div>
      </div>
    </div>
  </>;
}

export default Admin;
