import React, { useEffect, useState, useRef } from "react";
import styles from "./add-project.module.css";

import { useForm, Controller } from "react-hook-form";
import addData from "../../../../gateway/addProject.js";
import uploadFileToS3 from "../../../../utils/uploadFileToS3.js";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

function AddProject() {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm();

  const [state, setState] = useState({
    open: false,
    severity: "success",
  });
  const { open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const onSubmit = async (data) => {
    const formData = getValues();

    const projectName = formData.Project_Name;
    const bannerFile = formData.Banner_Image?.[0]; // File
    const videoFile = formData.Project_Video?.[0]; // File
    const propertyFiles = formData.Property_Images || []; // FileList or []

    try {
      const bannerUrl = bannerFile ? await uploadFileToS3(bannerFile, "banner_image.jpg", bannerFile.type, projectName, "banner") : null;
      const videoUrl = videoFile ? await uploadFileToS3(videoFile, "project_video.mp4", videoFile.type, projectName, "video") : null;
      const propertyImageUrls = await Promise.all(
        Array.from(propertyFiles).map((file, idx) =>
          uploadFileToS3(file, `image_${idx + 1}.jpg`, file.type, projectName, "property_images")
        )
      );
      const metadata = {
        Project_Name: projectName,
        Property_Description: formData.Property_Description,
        Property_Address: formData.Property_Address,
        Property_Price: formData.Property_Price,
        Property_Bedroom: formData.Property_Bedroom,
        Property_Bathroom: formData.Property_Bathroom,
        Property_SqFt: formData.Property_SqFt,
        Property_Location: formData.Property_Location,
        Banner_Image_Link: bannerUrl,
        Property_Images_Links: propertyImageUrls,
        Project_Video_Link: videoUrl,
      };
      const metadataBlob = new Blob([JSON.stringify(metadata)], {
        type: "application/json",
      });
      await uploadFileToS3(metadataBlob, "metadata.json", "application/json", projectName, "");
      setState({ open: true, severity: "success" });
      reset();
    } catch (error) {
      console.error("Error uploading files:", error);
      setState({ open: true, severity: "error" });
    }
  };

  return (
    <>
      <div style={{ maxWidth: "500px", margin: "2rem auto" }}>
        <h2>Add Project</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Project Name */}
          <div style={{ marginBottom: "1rem" }}>
            <label>Project Name:</label>
            <br />
            <input type="text" {...register("Project_Name")} required />
          </div>

          {/* Property Address */}
          <div style={{ marginBottom: "1rem" }}>
            <label>Property Address:</label>
            <br />
            <input type="text" {...register("Property_Address")} required />
          </div>

          {/* Property Address */}
          <div style={{ marginBottom: "1rem" }}>
            <label>Price:</label>
            <br />
            <input t ype="text" {...register("Property_Price")} required />
          </div>

          {/* Property Address */}
          <div style={{ marginBottom: "1rem", display: "flex", gap: "1rem" }}>
            <label>Bedroom:</label>
            <input type="text" {...register("Property_Bedroom")} required />
            <label>Bathroom:</label>
            <input type="text" {...register("Property_Bathroom")} required />
            <label>SqFt:</label>
            <input type="text" {...register("Property_SqFt")} required />
          </div>

          {/* Banner Image */}
          <div style={{ marginBottom: "1rem" }}>
            <label>Banner Image:</label>
            <br />
            <input type="file" {...register("Banner_Image")} accept="image/*" />
          </div>

          {/* Banner Image */}
          <div style={{ marginBottom: "1rem" }}>
            <label>Property Images:</label>
            <br />
            <input type="file" {...register("Property_Images")} accept="image/*" multiple />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label>Project Video:</label>
            <br />
            <input
              type="file"
              accept="video/*"
              {...register("Project_Video", {
                validate: {
                  lessThan40MB: (files) => {
                    return files?.[0]?.size < 40 * 1024 * 1024 || "File size should be less than 40MB";
                  },
                },
              })}
            />
            {errors.Project_Video && <p style={{ color: "red" }}>{errors.Project_Video.message}</p>}
          </div>

          {/* Property Description */}
          <div style={{ marginBottom: "1rem" }}>
            <label>Property Description:</label>
            <br />
            <textarea {...register("Property_Description")} rows={4} required />
          </div>

          {/* Property Location */}
          <div style={{ marginBottom: "1rem" }}>
            <label>Property Map Location Link:</label>
            <br />
            <input type="text" {...register("Property_Location")} required />
          </div>

          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
      <Box sx={{ width: 500 }}>
        <Snackbar open={open} autoHideDuration={7000} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "centre" }}>
          <Alert onClose={handleClose} severity={state.severity} variant="filled" sx={{ width: "100%" }}>
            Project added successfully!
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
}

export default AddProject;
