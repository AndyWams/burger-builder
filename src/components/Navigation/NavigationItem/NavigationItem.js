import React from "react";
import "./NavigationItem.css";
const NavigationItem = (props) => {
  return (
    <li className="NavigationItem">
      <a href="goto" className={props.active ? "active" : null}>
        {props.children}
      </a>
    </li>
  );
};

export default NavigationItem;
