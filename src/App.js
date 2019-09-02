import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

require('dotenv').config();


const API_KEY = process.env.REACT_APP_API_KEY;


class App extends React.Component {

    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        pressure: undefined,
        error: undefined
        
    }

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;

        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();

        if(city && country) {
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country:data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                pressure: data.main.pressure,
                error: ""
            });
        }
        else {
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                pressure: undefined,
                error: "Please enter the values."
        });
    }
    
    }
    render() {
        return(
            <div>
                <div className = "wrapper">
                <div className = "main">
                <div className = "container">
                <div className = "row">
                <div className = "col-xs-5 title-container">
                <Titles/>
                 </div>
                 <div className ="col-xs-7 form-container"> 
                
                 <Form getWeather={this.getWeather}/>
                 <Weather 
                 temperature={this.state.temperature}
                 city={this.state.city}
                 country={this.state.country}
                 humidity={this.state.humidity}
                 description={this.state.description}
                 pressure={this.state.pressure}
                 error={this.state.error}
                    />

                 </div>
             </div>
            </div>
         </div>
        </div>
     </div>

        );
    }
};

export default App;
