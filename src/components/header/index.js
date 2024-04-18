import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "../MobileMenu/MobileMenu";
import Logo from "../../images/logo.png";

const Header = (props) => {
  const [menuActive, setMenuState] = useState(false);
  const [SearchActive, setSearchState] = useState(false);

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <header className="main-header">
      <div className="header-top">
        <div className="container">
          <div className="top-inner">
            <div className="logo-outer">
              <div className="logo">
                <Link onClick={ClickHandler} to="/">
                  <img src={Logo} alt="Logo" />
                </Link>
              </div>
            </div>

            <ul className="header-info">
              <li>
                {/* <i className="fa fa-map-marker"></i> */}
                <Link onClick={ClickHandler} to="/about">
                  <h6>
                    <span>About</span>
                  </h6>
                </Link>
              </li>
              <li>
                {/* <i className="fa fa-map-marker"></i> */}
                <Link onClick={ClickHandler} to="/property">
                  <h6>
                    <span>Portfolio</span>
                  </h6>
                </Link>
              </li>
              <li>
                {/* <i className="fa fa-map-marker"></i> */}
                <Link onClick={ClickHandler} to="/blog">
                  <h6>
                    <span>Blogs</span>
                  </h6>
                </Link>
              </li>
              <li>
                <Link onClick={ClickHandler} to="/contact">
                  <h6>
                    <span>Contact</span>
                  </h6>
                </Link>
              </li>
            </ul>
            <MobileMenu />
            {/* <div className="languages">
              <select name="languages" id="languages">
                <option value="lang-1">English</option>
                <option value="lang-2">English</option>
              </select>
            </div> */}
          </div>
        </div>
      </div>

      {/* <div className="header-upper">
        <div className="container clearfix">
          <div className="header-inner">
            <div className="nav-outer clearfix">
              <nav className="main-menu navbar-expand-lg">
                <MobileMenu />
                <div className="navbar-collapse collapse clearfix">
                  <ul className="navigation clearfix">
                    <li className="current">
                      <Link onClick={ClickHandler} to="/">
                        Home
                      </Link>
                      <ul>
                        <li>
                          <Link onClick={ClickHandler} to="/home">
                            Home Style 1
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/home2">
                            Home Style 2
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/about">
                        about
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/property">
                        project
                      </Link>
                      <ul>
                        <li>
                          <Link onClick={ClickHandler} to="/property">
                            Project
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={ClickHandler}
                            to="/project-single/Architecture"
                          >
                            Project Single
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/services">
                        services
                      </Link>
                      <ul>
                        <li>
                          <Link onClick={ClickHandler} to="/services">
                            services
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={ClickHandler}
                            to="/service-single/Design-&-Planning"
                          >
                            Services Single
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/blog">
                        Blog
                      </Link>
                      <ul>
                        <li>
                          <Link onClick={ClickHandler} to="/blog">
                            Blog
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={ClickHandler}
                            to="/blog-single/Serverless-Stream-Based-Processing"
                          >
                            Blog Single
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/contact">
                        Contact us
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>

            <div className="menu-icons">
              <div className="nav-search ml-15">
                <button onClick={() => setSearchState(!SearchActive)}>
                  <i
                    className={`fi ti-search ${
                      SearchActive ? "ti-close" : "fi "
                    }`}
                  ></i>
                </button>
                <form
                  onSubmit={SubmitHandler}
                  className={`hide ${SearchActive ? "show" : ""}`}
                >
                  <input
                    type="text"
                    placeholder="Search"
                    className="searchbox"
                    required=""
                  />
                  <button
                    type="submit"
                    className="searchbutton fa fa-search"
                  ></button>
                </form>
              </div>

              <div className="menu-sidebar">
                <button onClick={() => setMenuState(!menuActive)}>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div
        className={`sidebar-wrap ${menuActive ? "side-content-visible" : ""}`}
      >
        <div
          className="form-back-drop"
          onClick={() => setMenuState(!menuActive)}
        ></div>
        <section className="hidden-bar">
          <div className="inner-box text-center">
            <div
              className="cross-icon"
              onClick={() => setMenuState(!menuActive)}
            >
              <span className="fa fa-times"></span>
            </div>
            <div className="title">
              <h3>Get Appointment</h3>
            </div>
            <div className="appointment-form">
              <form method="post" onSubmit={SubmitHandler}>
                <div className="form-group">
                  <input
                    type="text"
                    name="text"
                    value=""
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value=""
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="phone"
                    value=""
                    placeholder="Phone no."
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea placeholder="Message" rows="5"></textarea>
                </div>
                <div className="form-group">
                  <button type="submit" className="theme-btn">
                    Submit now
                  </button>
                </div>
              </form>
            </div>
            <div className="social-icons">
              <Link to="/">
                <i className="fa fa-twitter"></i>
              </Link>
              <Link to="/">
                <i className="fa fa-facebook-f"></i>
              </Link>
              <Link to="/">
                <i className="fa fa-instagram"></i>
              </Link>
              <Link to="/">
                <i className="fa fa-pinterest-p"></i>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Header;
