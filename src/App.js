import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Example from "./components/Example";

require("dotenv").config();

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends React.Component {
  state = {
    temperature: undefined,
    feels_like: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    pressure: undefined,
    error: undefined
  };

  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();
console.log(data)
    if (city && country) {
      if (data.cod === "404") {
        this.setState({
          temperature: undefined,
          feels_like: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          pressure: undefined,
          error: "Input doesn't match any known location!"
        });
      } else {
        this.setState({
          temperature: data.main.temp,
          feels_like: data.main.feels_like,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          pressure: data.main.pressure,
          error: ""
        });
      }
      console.log("DATA", data);
    } else {
      this.setState({
        temperature: undefined,
        feels_like: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        pressure: undefined,
        error: "Please enter the values  !"
      });
    }
  };
  render() {
    const emptyData =
      this.state.city === undefined || this.state.country === undefined;
    console.log("EMPTY DATA: ", emptyData);
    return (
      <div>
        {emptyData ? (
          <div className="main-block">
            <div className="container" style={{ marginTop: "3%" }}>
              <div className="col-xs-5 title-container">
                <Titles />
              </div>
              <div className="col-xs-7 form-container">
                <Form getWeather={this.getWeather} />
                <Weather
                  temperature={this.state.temperature}
                  feels_like={this.state.feels_like}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  pressure={this.state.pressure}
                  error={this.state.error}
                />
                <Example />
              </div>
            </div>
            <p className="title-container__copyright">
              {" "}
              Copyright © Sanel Pajic{" "}
            </p>
          </div>
        ) : (
          <div className="main-block">
            <div className="container" style={{ marginTop: "3%" }}>
              <div className="col-xs-5 title-container">
                <Titles />
              </div>
              <div className="col-xs-7 form-container">
                <Form getWeather={this.getWeather} />
                <Weather
                  temperature={this.state.temperature}
                  feels_like={this.state.feels_like}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  pressure={this.state.pressure}
                  error={this.state.error}
                />
              </div>
            </div>
            <p className="title-container__copyright">
              {" "}
              Copyright © Sanel Pajic{" "}
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
