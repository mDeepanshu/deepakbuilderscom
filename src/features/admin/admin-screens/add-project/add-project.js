import React, { useEffect, useState, useRef } from "react";
import styles from "./add-project.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Box, Typography } from "@mui/material";
import addData from "../../../../gateway/addProject.js";
import uploadFileToS3 from "../../../../utils/uploadFileToS3.js";

function AddProject() {
  const { register, handleSubmit, reset, getValues } = useForm();

  // const toBase64 = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => resolve(reader.result);
  //     reader.onerror = (error) => reject(error);
  //   });
  // };

  const onSubmit = async (data) => {
    const formData = getValues();

    const projectName = formData.Project_Name;
    const bannerFile = formData.Banner_Image?.[0]; // File
    const videoFile = formData.Project_Video?.[0]; // File
    const propertyFiles = formData.Property_Images || []; // FileList or []

    // Upload Banner Image
    const bannerUrl = bannerFile
      ? await uploadFileToS3(
          bannerFile,
          "banner_image.jpg",
          bannerFile.type,
          projectName,
          "banner"
        )
      : null;

    // Upload Project Video
    const videoUrl = videoFile
      ? await uploadFileToS3(
          videoFile,
          "project_video.mp4",
          videoFile.type,
          projectName,
          "video"
        )
      : null;

    // Upload Property Images (parallel)
    const propertyImageUrls = await Promise.all(
      Array.from(propertyFiles).map((file, idx) =>
        uploadFileToS3(
          file,
          `image_${idx + 1}.jpg`,
          file.type,
          projectName,
          "property_images"
        )
      )
    );

    // Create metadata
    const metadata = {
      Project_Name: projectName,
      Property_Description: formData.Property_Description,
      Property_Location: formData.Property_Location,
      Banner_Image_Link: bannerUrl,
      Property_Images_Links: propertyImageUrls,
      Project_Video_Link: videoUrl,
    };

    // Upload metadata.json
    const metadataBlob = new Blob([JSON.stringify(metadata)], {
      type: "application/json",
    });
    await uploadFileToS3(
      metadataBlob,
      "metadata.json",
      "application/json",
      projectName,
      ""
    );

    // const saveRes = await addData(apiObj);
  };

  return (
    <>
      <div style={{ maxWidth: "500px", margin: "2rem auto" }}>
        <h2>Create Project</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Project Name */}
          <div style={{ marginBottom: "1rem" }}>
            <label>Project Name:</label>
            <br />
            <input type="text" {...register("Project_Name")} required />
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
            <input
              type="file"
              {...register("Property_Images")}
              accept="image/*"
              multiple
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label>Project Video:</label>
            <br />
            <input
              type="file"
              {...register("Project_Video")}
              accept="video/*"
            />
          </div>

          {/* Property Description */}
          <div style={{ marginBottom: "1rem" }}>
            <label>Property Description:</label>
            <br />
            <textarea {...register("Property_Description")} rows={4} required />
          </div>

          {/* Property Location */}
          <div style={{ marginBottom: "1rem" }}>
            <label>Property Location:</label>
            <br />
            <input type="text" {...register("Property_Location")} required />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default AddProject;
