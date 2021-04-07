// import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/shared/Header';
import Footer from './components/shared/Footer';

function App() {
  return (
    <div className="App">
      <Header sesionIniciada={false}/>
      <Router>
        <Route
          path="/"
        />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
