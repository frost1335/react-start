import React from "react";
import Radium from "radium";
import "./Car.css";

// function Car() {
//   return <div>This is car Component !</div>;
// }

// const car = () => {
//   return <div>This is car Component !</div>;
// };

const car = (props) => {
  const inputClasses = ["input"];

  if (props.name !== "") {
    inputClasses.push("green");
  } else {
    inputClasses.push("red");
  }

  if (props.name.length > 4) {
    inputClasses.push("bold");
  }

  const style = {
    boxShadow: "0 0 15px #ccc",
    ":hover": {
      border: "1px solid #aaa",
    },
  };

  return (
    <div className={"Car"} style={style}>
      <h3>Car name: {props.name}</h3>
      <p>
        Year:
        <strong>{props.year}</strong>
      </p>
      <input
        type="text"
        onChange={props.onChangeName}
        value={props.name}
        className={inputClasses.join(" ")}
      />
      <button onClick={props.onDelete}>Delete</button>
    </div>
  );
};

export default Radium(car);
