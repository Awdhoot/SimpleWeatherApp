import React, {Component} from 'react';
import {connect} from 'react-redux';

class WeatherList extends Component {
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