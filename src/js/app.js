import React, { Component } from 'react';
import { render } from 'react-dom';
import '../css/style.css';
import batmanImage from '../assets/batman.jpg';

export default class Hello extends Component {
  render() {
    return (
      <div>
        Hello from react
        <img src={ batmanImage } alt='Batman' />
      </div>
    );
  }
}

render(<Hello />, document.getElementById('app'));