import React from "react";

class Titles extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title-container__title-1">Global </h1>
        <h1 className="title-container__title-2">Weather Finder</h1>
        <p className="title-container__subtitle">
          Find out temperature, conditions and more ...{" "}
        </p>
      </div>
    );
  }
}

export default Titles;
