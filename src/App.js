// import React, { useState, useEffect, useCallback } from 'react';
import { Switch, Route } from 'react-router-dom';

import Footer from './components/shared/Footer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          path="/"
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
