import React, { useState } from "react";
import fImg from "../../images/faq/faq-right-bg.png";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

const FaqSection = (props) => {
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <section className="faq-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 pr-125 rpr-15 pt-100">
            <div className="">
              <img src="images/home/home07_process.webp" alt="FAQ" />
            </div>
          </div>
          <div className="col-lg-6 pl-0">
            <div className="faq-accordion ras-content pt-95 pb-110 rpb-0 rmb-100">
              <div className="section-title mb-35">
                <h6>Best Architecture</h6>
                <h2>
                  Our Design
                  <span className="thin">Process</span>
                </h2>
              </div>
              <div id="accordion">
                <Accordion open={open} toggle={toggle}>
                  <AccordionItem className="card">
                    <AccordionHeader targetId="1" className="card-header">
                      Initial Consultation and Research
                    </AccordionHeader>
                    <AccordionBody accordionId="1">
                      The process typically begins with an in-depth consultation
                      between the architect and the client. During this stage,
                      the architect gathers information about the client's
                      needs, budget, timeline, and vision for the project.
                      Research into zoning regulations, building codes, and site
                      conditions is also conducted.
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem className="card">
                    <AccordionHeader targetId="2" className="card-header">
                      Site Analysis and Feasibility Study
                    </AccordionHeader>
                    <AccordionBody accordionId="2">
                      Architects visit the project site to assess its
                      characteristics, such as topography, orientation, views,
                      and existing structures. This analysis informs the design
                      process and helps identify opportunities and constraints.
                      A feasibility study may be conducted to evaluate the
                      viability of the project based on site conditions and
                      regulatory requirements
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem className="card">
                    <AccordionHeader targetId="3" className="card-header">
                      Concept Development
                    </AccordionHeader>
                    <AccordionBody accordionId="3">
                      Using the information gathered from the client and site
                      analysis, the architect begins to develop design concepts.
                      This stage involves brainstorming and sketching to explore
                      different architectural ideas and spatial arrangements.
                      Concepts may be presented to the client for feedback and
                      refinement.
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem className="card">
                    <AccordionHeader targetId="4" className="card-header">
                      Schematic Design
                    </AccordionHeader>
                    <AccordionBody accordionId="4">
                      Once a concept is approved, it is further developed into
                      schematic designs. This phase focuses on refining the
                      overall layout, form, and massing of the building.
                      Architects may create preliminary floor plans, elevations,
                      and 3D models to illustrate the design intent
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem className="card">
                    <AccordionHeader targetId="4" className="card-header">
                      Design Development
                    </AccordionHeader>
                    <AccordionBody accordionId="4">
                      : In this stage, the schematic design is refined and
                      detailed further. Architectural drawings are developed to
                      specify the building's structural systems, materials, and
                      interior spaces. Collaboration with engineers and
                      consultants ensures that the design meets technical
                      requirements and performance criteria
                    </AccordionBody>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            {/* <div className="faq-right-bg">
              <img src="images/home/home07_DisignProcess.webp" alt="FAQ" />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
