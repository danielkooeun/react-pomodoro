import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Layout';
import Home from './components/home/Home';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const Application = () => (
  <Router>
    <div className='container'>
      <Header />

      <hr/>

      <Route exact path="/" component={App}/>
      <Route path="/home" component={Home}/>
    </div>
  </Router>
)
export default Application;
