import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "../HomePage/HomePage";
import HomePage2 from "../HomePage2/HomePage2";
import AboutPage from "../AboutPage/AboutPage";
import ServicePage from "../ServicePage/ServicePage";
import ServiceSinglePage from "../ServiceSinglePage/ServiceSinglePage";
import ProjectPage from "../ProjectPage/ProjectPage";
import ProjectSinglePage from "../ProjectSinglePage/ProjectSinglePage";
import BlogPage from "../BlogPage/BlogPage";
import BlogDetails from "../BlogDetails/BlogDetails";
import ContactPage from "../ContactPage/ContactPage";
import Landing from "../../Landing-page/Landing"
const AllRoute = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/:city" element={<Landing />} />
          <Route path="home" element={<Homepage />} />
          {/* <Route path="home2" element={<HomePage2 />} /> */}
          <Route path="about" element={<AboutPage />} />
          <Route path="property" element={<ProjectPage />} />
          <Route path="property/:slug" element={<ProjectSinglePage />} />
          <Route path="services" element={<ServicePage />} />
          <Route path="service-single/:slug" element={<ServiceSinglePage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog-single/:slug" element={<BlogDetails />} />
          <Route path="contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AllRoute;
