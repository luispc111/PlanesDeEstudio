// import React, { useState, useEffect, useCallback } from 'react';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import PlanDeEstudio from './components/PlanDeEstudio/PlanDeEstudio';
import PlanesDeEstudio from './components/PlanesDeEstudio/PlanesDeEstudio';

import { PUBLIC_URL } from './components/utils'; 

function App() {
  const [loggedUser, setLoggedUser] = useState(undefined);
  
  return (
    <div className="App">
      <Header loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
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
