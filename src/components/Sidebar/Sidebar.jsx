import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "imgs/logo.png";
import { sidebarData } from "Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from 'framer-motion'

const Sidebar = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [expanded, setExpanded] = useState(true);
  const menuBarVarient = {
    "expanded": {
      left: "70%"
    },
    "unExpanded": {
      left: "5%"
    }
  }
  const sidebarVarient = {
      "expanded": {
        left: "0%"
      },
      "unExpanded": {
        left: "-75%"
      },
      "nonMobile": {
        left: "0%"
      }
  }

  const isMobileScreen = window.innerWidth <= 768

  return (
    <>
      {/* mobile menu icon */}
      <motion.div
        className={`Sidebar__menuBar ${
          expanded
            ? "Sidebar__menuBar--expanded"
            : "Sidebar__menuBar--unExpanded"
        }`}
        animate={expanded? "expanded" : "unExpanded"}
        variants={menuBarVarient}
        onClick={() => setExpanded(!expanded)}
      >
        <UilBars />
      </motion.div>
      <motion.div className="Sidebar"
        variants={sidebarVarient}
        animate={ isMobileScreen ? ( expanded ? "expanded" : "unExpanded" ) : "nonMobile"}
      >
        {/* Logo */}
        <div className="Sidebar__logo">
          <img src={Logo} alt="logo" />
          <span>
            Sh
            <span>o</span>
            ps
          </span>
        </div>
        {/* MenuItems */}
        <div className="Sidebar__menu">
          {sidebarData.map((item, index) => {
            const className =
              selectedIndex == index
                ? "Sidebar__menuItem Sidebar__menuItem--active"
                : "Sidebar__menuItem";
            return (
              <div
                key={index}
                className={className}
                onClick={() => setSelectedIndex(index)}
              >
                <item.icon />
                <span className="Sidebar__heading">{item.heading}</span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
