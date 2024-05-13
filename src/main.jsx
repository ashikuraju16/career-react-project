import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import { ResponsiveIndicator } from "@sohanemon/utils/components";
import JobDetails from "./Components/JobDetails/JobDetails";
import FeaturedJobs from "./Components/FeaturedJobs/FeaturedJobs";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },{
        path: "/jobs",
        element:<JobDetails />,
      },{
        path: "/job",
        element:<FeaturedJobs />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ResponsiveIndicator />
  </React.StrictMode>
);
