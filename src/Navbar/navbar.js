import React from "react";
import "./navbar.css";
import Radium from "radium";
import Logo from "./images/Clientsite.com.svg";

const nav = () => {
  return (
    <div className={"navbar"}>
      <ul className={"navMenu"}>
        <li>
          <a href="#!">
            <img src={Logo} alt="nav logo" />
          </a>
        </li>
        <li>
          <div className={"searchBox"}>
            <input type="text" placeholder="Search" />
            <button>
              <i className={"fas fa-search"}></i>
            </button>
          </div>
        </li>
        <li>
          <button>Kirish</button>
        </li>
        <li>
          <button>
            <i className={"fas fa-shopping-cart"}></i>2
          </button>
        </li>
        <li>
          <button>
            Rus
            <i className={"fas fa-chevron-down"}></i>
          </button>
        </li>
        <li>
          <button>
            UZS
            <i className={"fas fa-chevron-down"}></i>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Radium(nav);
