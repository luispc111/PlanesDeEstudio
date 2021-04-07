// import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import PlanesDeEstudio from './components/PlanesDeEstudio/PlanesDeEstudio';

import { PUBLIC_URL } from './components/shared/utils'; 

function App() {
  return (
    <div className="App">
      <Header sesionIniciada={false}/>
      <Router>
        <Route
          exact path={PUBLIC_URL + '/'}
          component={PlanesDeEstudio}
        />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
