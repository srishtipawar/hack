import React from 'react';

import { Footer, Possibility, Header } from './containers';
// import { CTA } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Header />
    </div>
    <Possibility />
    <Footer />
  </div>
);

export default App;
