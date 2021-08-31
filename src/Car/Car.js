import React from "react";
import './Car.css'

// function Car() {
//   return <div>This is car Component !</div>;
// }

// const car = () => {
//   return <div>This is car Component !</div>;
// };

const car = (props) => (
  <div
    className={'Car'}
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
