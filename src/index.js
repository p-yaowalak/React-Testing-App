import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Content />, document.getElementById('content'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
registerServiceWorker();
