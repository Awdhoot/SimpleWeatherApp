import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Sparklines, SparklinesLine} from 'react-sparklines';
import ChartComponent from '../components/chart_component';


class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temperatures = cityData.list.map((weather) => weather.main.temp - 273.15); // in celcius
    const pressure = cityData.list.map((weather) => weather.main.pressure);
    const humidity = cityData.list.map((weather) => weather.main.humidity);
    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          {/*<Sparklines width={180} height={90} data={temperatures}>*/}
          {/*<SparklinesLine color={'red'}/>*/}
          {/*</Sparklines>*/}
          <ChartComponent data={temperatures} color={'red'}/>
        </td>
      </tr>
    )
  }

  render() {
    console.log(this.props.weather);
    return (
      <table className="table table-over">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
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