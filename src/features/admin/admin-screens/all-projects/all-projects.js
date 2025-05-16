import React, { useEffect, useState, useRef } from "react";
import styles from "./all-projects.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Box, Typography } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import  getData from "../../../../gateway/getProjects.js";

function AllProjects() {

  const [projects,setProjects] = useState([]); 

    useEffect(() => {
        const fetchData = async () => {
          try {
            const result = await getData();
            console.log(result);
            setProjects(result);
          } catch (error) {
            console.error(error);
          }
        };
      
        fetchData();
      }, []);

  return (
    <>
      <div className={styles.table_wrapper}>
        <table className={styles.table}>
          <thead className={styles.table_head}>
            <tr>
              <th>PROJECT NAME</th>
              <th>STATUS</th>
              <th>HIDE/SHOW</th>
            </tr>
          </thead>
          <tbody className={styles.table_body}>
            {projects.map((project) => (
              <tr key={project.id}>
                <td>{project.Project_Name}</td>
                <td>{project.status}</td>
                <td>
                  <Button variant="outlined" color="primary">
                    {project.status === "hidden" ? (
                      <VisibilityOffIcon />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AllProjects;
