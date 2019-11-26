import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ImageGallery from './components/home/PhotoGallery';
import MenuNav from './components/menu/MenuNav';
import Contact from './components/contact/Contact';
import Services from './components/services/Services';
import logo from './logo.svg';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <p>
              Welcome to Delphina's Photo
            </p>
          </div>
          <MenuNav />
          <Route exact path="/" component={ImageGallery} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/services" component={Services} />
        </div>
      </Router>
    );
  }
}

export default App;
