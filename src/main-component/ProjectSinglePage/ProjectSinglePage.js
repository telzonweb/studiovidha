import React, { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import { useParams } from "react-router-dom";
import Project from "../../api/Projects";
import Plans from "./Plans";
import Footer from "../../components/footer/Footer";

const ProjectSinglePage = (props) => {
  const { slug } = useParams();

  const projectDetails = Project.find((item) => item.slug === slug);

  return (
    <Fragment>
      <Navbar />
      <PageTitle pageTitle={projectDetails.pTitle} pagesub={"Project"} />
      <div className="project-single-area section-padding">
        <div className="property-single mt-150">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="property-single-left">
                  <div className="property-left-content">
                    <h3>
                      Morbi nulla felis, auctor quis urna blandit,{" "}
                      <span className="font-weight-light">
                        aliquet tristique elit
                      </span>
                    </h3>
                    <ul>
                      <li>wellnes & spa</li>
                      <li>conference</li>
                      <li>restaurant</li>
                      <li>fitness</li>
                      <li>library</li>
                      <li>bars</li>
                      <li>wellnes & spa</li>
                      <li>conference</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="property-single-right">
                  <div className="property-right-content pl-40 rpl-0">
                    <h3 className="border-text">Project complex</h3>
                    <h3>Project Park</h3>
                    <h3>Project gallery</h3>
                    <h3>Hospital</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Plans />
      </div>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default ProjectSinglePage;
