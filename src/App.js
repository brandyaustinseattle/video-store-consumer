import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieLibrary from './components/MovieLibrary';
import Status from './components/Status';

class App extends Component {

  constructor() {
    super();

    this.state = {
      status: {
        message: 'loaded the page',
        type: 'success'
      }
    }
  }

  updateStatus = (message, type) => {
    this.setState({
      status: {
        message: message,
        type: type
      }
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">blockbuster</h1>
        </header>

        <div>
          <Status message={this.state.status.message} types={this.state.status.type} />
        </div>

        <div>
          <MovieLibrary           updateStatusCallback={this.updateStatus} />
        </div>
      </div>
    );
  }
}

export default App;
