import React from 'react';

class Weather extends React.Component {
    render() {
        return(   // Postavljamo and operatiore jer želimo da nam izadju podaci kao i paragraf kad stisnemo dugme
            <div className = "weather-info">
                {
                    this.props.city && this.props.country && <p className = "weather__key">Location:  

                    <span className = "weather__value"> {this.props.city} , {this.props.country}</span>

                    </p>
                }
                {
                    this.props.temperature && <p className = "weather__key">Temperature: 

                    <span className = "weather__value"> {this.props.temperature} °C </span> 
    
                    </p>
                }
                {
                    this.props.humidity && <p className = "weather__key">Humidity: 

                    <span className = "weather__value"> {this.props.humidity}%</span>
                    
                    </p>
                }
                {
                    this.props.description && <p className = "weather__key">Conditions: 

                    <span className = "weather__value"> {this.props.description}</span>
                    
                    </p>
                }
                {
                    this.props.pressure && <p className = "weather__key">Pressure: 

                    <span className = "weather__value"> {this.props.pressure} hPa</span>
                    
                    </p>
                }
                {
                    this.props.error && <p className = "weather__error">{this.props.error}</p>
                }

            </div>
        );
    }
};

export default Weather;