// import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Footer from './components/shared/Footer';
import PlanDeEstudio from './components/PlanDeEstudio/PlanDeEstudio';
import PlanesDeEstudio from './components/PlanesDeEstudio/PlanesDeEstudio';

import { PUBLIC_URL } from './components/shared/utils'; 

function App() {
  return (
    <div className="App">
      <Router>
        <Route
          exact path={PUBLIC_URL + '/'}
          component={PlanesDeEstudio}
        />
        <Route
          path={PUBLIC_URL + '/plan/:clave'}
          component={PlanDeEstudio}
        />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
