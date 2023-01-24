import PropTypes from 'prop-types';

import { Component } from 'react';

export class Filter extends Component {
  handleOnChange = event => {
    this.props.setContactFilter(event.target.value);
  };

  render() {
    return (
      <>
        <p>Find contacts by name</p>
        <input type="text" name="filter" onChange={this.handleOnChange}></input>
      </>
    );
  }
}

Filter.propTypes = {
  setContactFilter: PropTypes.func.isRequired,
};
