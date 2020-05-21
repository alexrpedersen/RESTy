import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './app';
import { BrowserRouter } from 'react-router-dom';

class Main extends React.Component {
  render() {
    return (
    
      <App />

    )
  }
}

const root = document.getElementById('root');
ReactDOM.render(<Main />, root);
