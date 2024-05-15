import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import { ResponsiveIndicator } from "@sohanemon/utils/components";
import JobDetails from "./Components/JobDetails/JobDetails";
import FeaturedJobs from "./Components/FeaturedJobs/FeaturedJobs";
import Blogs from "./Components/Blogs/Blogs";
import AppliedJobs from "./Components/AppliedJobs/AppliedJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/applied",
        loader: () => fetch("jobs.json"),
        element: <AppliedJobs />,
      },
      {
        path: "/jobs/:id",
        loader: () => fetch("jobs.json"),
        element: <JobDetails />,
      },
      {
        path: "/job",
        element: <FeaturedJobs />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
     
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ResponsiveIndicator />
  </React.StrictMode>
);
