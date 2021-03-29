// import React, { useState, useEffect, useCallback } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import Footer from './components/shared/Footer';
import PlanesDeEstudio from './components/PlanesDeEstudio/PlanesDeEstudio';

function App() {
  return (
    <div className="App">
      <Router>
        <Route
          path="/"
          component={PlanesDeEstudio}
        />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
