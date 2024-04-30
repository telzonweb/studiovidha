import React, { Fragment, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import { Link } from "react-router-dom";
import "./style.css";

const menus = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },

  {
    id: 2,
    title: "About",
    link: "/about",
  },
  {
    id: 3,
    title: "Services",
    link: "/services",
  },
  {
    id: 4,
    title: "Portfolio",
    link: "/property",
  },
  {
    id: 5,
    title: "Contact",
    link: "/contact",
  },
  //   {
  //     id: 7,
  //     title: "Service",
  //     link: "/service",
  //     submenu: [
  //       {
  //         id: 71,
  //         title: "Service",
  //         link: "/services",
  //       },
  //       {
  //         id: 72,
  //         title: "Service Single",
  //         link: "/service-single/Design-&-Planning",
  //       },
  //     ],
  //   },
  {
    id: 5,
    title: "Blog",
    link: "/blog",
    // submenu: [
    //   {
    //     id: 51,
    //     title: "Blog",
    //     link: "/blog",
    //   },
    //   {
    //     id: 52,
    //     title: "Blog single",
    //     link: "/blog-single/Serverless-Stream-Based-Processing",
    //   },
    // ],
  },
 
];

const MobileMenu = () => {
  const [openId, setOpenId] = useState(0);
  const [menuActive, setMenuState] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <div>
      <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
        <div className="menu-close">
          <div className="close" onClick={() => setMenuState(!menuActive)}>
            <i className="ti-close"></i>
          </div>
        </div>

        <ul className="responsivemenu">
          {menus.map((item, mn) => {
            return (
              <ListItem
                className={item.id === openId ? "active" : null}
                key={mn}
              >
                {item.submenu ? (
                  <Fragment>
                    <p
                      onClick={() =>
                        setOpenId(item.id === openId ? 0 : item.id)
                      }
                    >
                      {item.title}
                      <i
                        className={
                          item.id === openId
                            ? "fa fa-angle-up"
                            : "fa fa-angle-down"
                        }
                      ></i>
                    </p>
                    <Collapse
                      in={item.id === openId}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List className="subMenu">
                        <Fragment>
                          {item.submenu.map((submenu, i) => {
                            return (
                              <ListItem key={i}>
                                <Link
                                  onClick={ClickHandler}
                                  className="active"
                                  to={submenu.link}
                                >
                                  {submenu.title}
                                </Link>
                              </ListItem>
                            );
                          })}
                        </Fragment>
                      </List>
                    </Collapse>
                  </Fragment>
                ) : (
                  <Link className="active" to={item.link}>
                    {item.title}
                  </Link>
                )}
              </ListItem>
            );
          })}
        </ul>
      </div>

      <div className="navbar-header clearfix">
        <button
          type="button"
          className="navbar-toggle"
          onClick={() => setMenuState(!menuActive)}
        >
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
