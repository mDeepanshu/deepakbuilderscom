import React, { useEffect, useState, useRef } from "react";
import styles from "./add-project.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useForm, Controller } from 'react-hook-form';
import {
    TextField,
    Button,
    Box,
    Typography,
} from '@mui/material';

function AddProject() {

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
    </>;
}

export default AddProject;
