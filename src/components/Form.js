import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form className="form-responsive" onSubmit={this.props.getWeather}>
        <div className="form-div-responsive">
          <input type="text" name="city" placeholder="City..." />
          <input type="text" name="country" placeholder="Country..." />
        </div>
        <button>Get Weather</button>
      </form>
    );
  }
}

export default Form;
