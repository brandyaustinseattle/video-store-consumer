import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieLibrary from './components/MovieLibrary';
import Search from './components/Search';
import Customers from './components/Customers';
import Home from './components/Home';
import Status from './components/Status';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



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
        <header>
          <h1 className="App-title">blockbuster</h1>
          <Router>
            <div>
              <ul>
              <li>
                <Link to="/Home">Home</Link>
              </li>
                <li>
                  <Link to="/Search">Search</Link>
                </li>
                <li>
                  <Link to="/MovieLibrary">Library</Link>
                </li>
                <li>
                  <Link to="/Customers">Customers</Link>
                </li>
              </ul>

              <hr />

              <Route exact path="/" component={Home} />
              <Route path="/Search" component={Search} />
              <Route path="/Customers" component={Customers} />
              <Route path="/MovieLibrary" component={MovieLibrary} />
            </div>
          </Router>

        </header>

        <div>
          <Status message={this.state.status.message} types={this.state.status.type} />
        </div>

        <div>
          <MovieLibrary updateStatusCallback={this.updateStatus} />
        </div>
      </div>
    );
  }
}

export default App;
