// import React, { useState, useEffect, useCallback } from 'react';
import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import PlanDeEstudio from './components/PlanDeEstudio/PlanDeEstudio';
import PlanesDeEstudio from './components/PlanesDeEstudio/PlanesDeEstudio';
import Profile from './components/Profile/Profile';

import { UserContext } from "./context";
import { PUBLIC_URL } from './components/utils'; 
import { authenticate } from "./components/auth";

/** Función que verifica si la sesión está iniciada y cambia el loggedUser correspondientemente. */
async function checkSession(setLoggedUser) {
  const resAuth = await authenticate().catch((err) => err);
  if (resAuth instanceof Error) {
    if (!resAuth.response) {
      alert("Hubo un error de conexión al servidor para validar sesión iniciada.");
    } else if (resAuth.response.data.msg) {
      alert(resAuth.response.data.msg);
    }
    setLoggedUser(null);
    return;
  }
  setLoggedUser(resAuth);
}

function App() {
  const [loggedUser, setLoggedUser] = useState(undefined);

  const checarSesion = () => checkSession(setLoggedUser);

  useEffect(() => {
    checkSession(setLoggedUser);
  }, []);
  
  return (
    <Router basename={PUBLIC_URL}>
      <div className="App">
        <UserContext.Provider value={loggedUser}>
          <Header checarSesion={checarSesion} />
          <Route
            exact path="/"
            component={PlanesDeEstudio}
          />
          <Route
            path="/plan/:clave"
            component={PlanDeEstudio}
          />
          <Route
            path="/perfil/:matricula"
            component={Profile}
          />
          <div className="flex-grow-1"></div>
          <Footer />
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
