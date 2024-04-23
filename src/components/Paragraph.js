import React from "react";

const Paragraph = () => {
  return (
    <section className="pt-50 pl-50 pr-40 fs-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img
              src="images/about/about.jpg"
              alt="about"
              className="img-fluid"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h2>Vidha (विधा)</h2>
            <p>
              "It essentially refers to a manner or style of expression,
              encompassing various forms within art and more. Architecture, as
              an artistic discipline, shares common principles with other forms
              of art, such as the involvement of senses, consideration of
              lifestyle, incorporation of visual elements, and attention to the
              technical details."
            </p>
            <p>
              As a studio specializing in Architecture and Interior Designing,
              adopting the title 'Vidha' not only reflects our cultural roots
              but also accentuates our identity and purpose within the
              architectural realm.
            </p>
          </div>
        </div>
            
      </div>
    </section>
  );
};

export default Paragraph;
