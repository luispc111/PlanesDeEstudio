// import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Footer from './components/shared/Footer';
import PlanDeEstudio from './components/PlanDeEstudio/PlanDeEstudio';

function App() {
  return (
    <div className="App">
      <Router>
        <Route
          path="/"
        />
        <Route
          path="/carrera/:clave"
          component={PlanDeEstudio}
        />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
