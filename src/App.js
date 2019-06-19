import React from 'react';
import { Route } from 'react-router-dom';
import Toolbar from './Components/Toolbar/Toolbar';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Components/Homepage/Homepage';
import Career from './Components/Career/Career';
import Contact from './Components/Contact/Contact';
import Service from './Components/Service/Service';
import Enquiry from './Components/Enquiry/Enquiry';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "quill/dist/quill.snow.css";

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Route exact path="/" component={Homepage} />
      <Route path="/career" component={Career} />
      <Route path="/contact" component={Contact} />
      <Route path="/service/:service" component={Service} />
      <Route path="/enquiry" component={Enquiry} />
    </div>
  );
}

export default App;
