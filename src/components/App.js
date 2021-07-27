import React from 'react'
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Form from '../components/Form';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import "../assets/css/home1.css";
import "../assets/css/contact1.css";
import "../assets/css/about1.css";



const App = () => {
  return (
    
      <Router> 
        <Switch>

          <Route path="/about">
            <About/>

          </Route>

          <Route path="/contact">
            <Contact/>

          </Route>

          <Route path="/">
            <Home/>

          </Route>

        </Switch>
      </Router>

  )

}

export default App
