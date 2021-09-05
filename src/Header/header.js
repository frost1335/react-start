import React from "react";
import "./header.css";

const header = () => {
  return (
    <header>
      <div className={"headerContent"}>
        <h1 className={"headerTitle"}>Aksiya banneri</h1>
        <span className={"headerCheck"}>30%</span>
      </div>
    </header>
  );
};

export default header;
