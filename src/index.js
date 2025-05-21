import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from "./features/home/home";
import AllProjects from "./features/all-projects/all-projects";
import ProjectDetails from "./features/project-detail/project-detail";
import Admin from "./features/admin/admin";
import LocateUs from './features/locate-us/locate-us';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '',
				element: <Home />
			},
			{
				path: 'home',
				element: <Home />
			},
			{
				path: 'allProjects',
				element: <AllProjects />
			},
			{
				path: 'projectDetails/:id',
				element: <ProjectDetails />
			},
			{
				path: 'locateUs',
				element: <LocateUs />
			}
		],
		// errorElement: <Error />
	}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
