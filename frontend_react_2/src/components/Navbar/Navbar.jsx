import React, { useState, useEffect } from "react";
import "./navbar.scss";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { Images } from "../../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    document.body.style.overflow = toggle ? "hidden" : "auto";
  }, [toggle]);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={Images.logo2} alt="logo" />
      </div>

      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "testimonials", "contact"].map(
          (item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          )
        )}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            className="app__navbar-menu-content"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {[
                "home",
                "about",
                "work",
                "skills",
                "testimonials",
                "contact",
              ].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
