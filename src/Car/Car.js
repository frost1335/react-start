import React from "react";

// function Car() {
//   return <div>This is car Component !</div>;
// }

// const car = () => {
//   return <div>This is car Component !</div>;
// };

const car = (props) => (
  <div>
    <h3>Car name: {props.name}</h3>
    <p>
      Year:
      <strong>{props.year}</strong>
    </p>
    <button>Click</button>
  </div>
);

export default car;
