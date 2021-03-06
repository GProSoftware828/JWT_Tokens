import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ToDo.css';
import checkmark from '../assets/graphics/checkmark.png';

export class ToDo extends Component {
  render() {
    return (
      <div
        className="ToDo"
        onClick={this.props.click}
        data-test="TodoComponent"
      >
        <p data-test="titles">
          <img
            data-test="clicker"
            src={checkmark}
            alt="checkmark"
            height="32"
            width="32"
          />
          &nbsp;&nbsp;&nbsp;&nbsp;
          {this.props.title}
        </p>
        <hr />
      </div>
    );
  }
}

ToDo.propTypes = {
  title: PropTypes.string
};

export default ToDo;
