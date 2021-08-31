import React from "react";

// function Car() {
//   return <div>This is car Component !</div>;
// }

// const car = () => {
//   return <div>This is car Component !</div>;
// };

const car = (props) => (
  <div
    style={{
      marginBottom: 10,
      display: "block",
      padding: 12,
      color: '#646464',
      boxShadow: "0 0px 15px 0px #ccc",
    }}
  >
    <h3>Car name: {props.name}</h3>
    <p>
      Year:
      <strong>{props.year}</strong>
    </p>
    <input type="text" onChange={props.onChangeName} value={props.name} />
    <button onClick={props.onDelete}>Delete</button>
  </div>
);

export default car;
