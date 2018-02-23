import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Sparklines, SparklinesLine} from 'react-sparklines';
import ChartComponent from '../components/chart_component';
import GoogleMapComponent from '../components/google-map';


class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temperatures = cityData.list.map((weather) => weather.main.temp - 273.15); // in celcius
    const pressures = cityData.list.map((weather) => weather.main.pressure);
    const humidities = cityData.list.map((weather) => weather.main.humidity);
    const lng = cityData.city.coord.lon;
    const lat = cityData.city.coord.lat;
    return (
      <tr key={name}>
        <td>
          <GoogleMapComponent lat={lat} lng={lng} />
        </td>
        <td>
          <ChartComponent data={temperatures} color={'red'} textColor={'text-danger'} units={'\u2103'}/>
        </td>
        <td>
          <ChartComponent data={pressures} color={'green'} textColor={'text-success'} units={'hPa'}/>
        </td>
        <td>
          <ChartComponent data={humidities} color={'black'} textColor={'text-dark'} units={'%'}/>
        </td>
      </tr>
    )
  }

  render() {
    console.log(this.props.weather);
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">City</th>
            <th scope="col">Temperature (&#8451;)</th>
            <th scope="col">Pressure (hPa)</th>
            <th scope="col">Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}


function mapStateToProps({weather}) {
  // const weather = state.weather;
  return {
    weather
  }
}

export default connect(mapStateToProps, null)(WeatherList);