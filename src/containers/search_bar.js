import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

// import action creator
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
  }

  onInputChange(event) {
    this.setState({term: event.target.value})
  }

  onFormSubmit(event) {
    // to prevent default form submission
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit.bind(this)}
            className="input-group m-3">
        <input className="form-control"
               value={this.state.term}
               placeholder=" Get a 5 day forecast in your favorite city "
               onChange={this.onInputChange.bind(this)}/>
        <span className="input-group-btn pl-2">
          <button type="submit" className="btn btn-light">Search</button>
        </span>
      </form>
    )
  }
}

// causes action creator to bind with middlewares and to dispatch an action to reducers
function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch)
}

// 1st argument - mapStateToProps is not required here as this is controlled component.
// Hence null
export default connect(null, mapDispatchToProps)(SearchBar)