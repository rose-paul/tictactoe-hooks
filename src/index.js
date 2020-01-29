import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './game';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Game />, document.getElementById('root'))
});