import React, { Component } from "react";
import "./App.css";
import Car from "./Car/Car.js";

class App extends Component {
  state = {
    cars: [
      { name: "Ford", year: 2018 },
      { name: "Audi", year: 2016 },
      { name: "Mustang 1", year: 2010 },
    ],
    pageTitle: "React components !",
    showCars: false,
  };

  changeTitleHandler = (pageTitle) => {
    this.setState({
      pageTitle,
    });
  };
  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars,
    });
  };

  render() {
    console.log("Render");
    const divStyle = {
      textAlign: "center",
    };

    let cars = null;

    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>

        <button onClick={this.toggleCarsHandler}>Toggle cars</button>

        {this.state.showCars
          ? this.state.cars.map((car, index) => {
              return (
                <Car
                  key={index}
                  name={car.name}
                  year={car.year}
                  onChangeTitle={this.changeTitleHandler.bind(this, car.name)}
                />
              );
            })
          : null}
      </div>
    );
  }
}

export default App;
