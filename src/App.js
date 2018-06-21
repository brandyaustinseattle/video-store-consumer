import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieLibrary from './components/MovieLibrary';
import Movie from './components/Movie';
import Customer from './components/Customer'
import Search from './components/Search';
import Customers from './components/Customers';
import Home from './components/Home';
import Status from './components/Status';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class App extends Component {

  constructor() {
    super();

    this.state = {

        movie:'',
        customer:'',

      status: {
        message: 'loaded the page',
        type: 'success'
      }
    }
  }

  selectedCustomer = (customer) => {
    this.setState({
        customer:customer.id
    });

  }

  selectedMovie = (movie) => {
    this.setState({
        movie: movie.title,
    });

  }

  //what do we do w/ updateStatusCallback which we originally had with movies
  //do we need to put it in the route area
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

        <div>
          <Status message={this.state.status.message} types={this.state.status.type} />
        </div>

        <header>
          <h1 className="App-title">blockbuster</h1>
          <h5>Selected Movie: {this.state.movie}</h5>
          <h5>Selected Customer: {this.state.customer}</h5>
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
              <Route path="/Customers" component={Customers}
               render = {() => {
                 return(<MovieLibrary rentalCallback={this.selectedCustomer}/>)
               }
             }/>
              <Route path="/MovieLibrary" component={MovieLibrary}
              render = {() => {
                return(<Movie rentalCallback={this.selectedMovie}/>)
              }
            }/>

            </div>
          </Router>

        </header>

      </div>
    );
  }
}

export default App;
