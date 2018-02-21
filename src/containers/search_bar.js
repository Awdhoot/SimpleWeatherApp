import React, {Component} from 'react';

export default class SearchBar extends Component {
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
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit.bind(this)}
        className="input-group mt-3">
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