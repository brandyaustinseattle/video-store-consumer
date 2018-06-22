import React, { Component } from 'react';
import './App.css';
import FormPage from './components/FormPage';
import Home from './components/Home';
import Search from './components/Search';
import Status from './components/Status';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class App extends Component {

  constructor() {
    super();

    this.state = {

      movieTitle: '',
      customerId: '',
      customerName: '',

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

  custHandler = (customerInfo) => {
    console.log('in custHandler');
    console.log(customerInfo);
    this.setState({
      customerId: customerInfo.id,
      customerName: customerInfo.name
    });
  }

  movHandler = (movieTitle) => {
    console.log('in movHandler');
    console.log(movieTitle);
    this.setState({
      movieTitle: movieTitle
    });
  }

  render() {
    return (
      <section className="App">

        <div>
          <Status message={this.state.status.message} types={this.state.status.type} />
        </div>

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

              <hr/>

              <Route path="/Home" component={Home} />

              <Route path="/Search" component={Search} />

              <Route path="/MovieLibrary" component={() => <FormPage selectedCustHandler={this.custHandler} selectedMovHandler={this.movHandler} movieTitle={this.state.movieTitle} customerId={this.state.customerId} customerName={this.state.customerName} hideMovies={false} hideCustomers={true} />}  />

              <Route path="/Customers" component={() => <FormPage selectedCustHandler={this.custHandler} selectedMovHandler={this.movHandler} movieTitle={this.state.movieTitle} customerId={this.state.customerId} customerName={this.state.customerName} hideMovies={true} hideCustomers={false} />} />
            </div>
          </Router>

        </header>

      </section>
    );
  }
}

export default App;
