// import React, { useState, useEffect, useCallback } from 'react';

import Header from './../shared/Header';
import Footer from './../shared/Footer';

//import { PUBLIC_URL } from './components/utils'; 

export default function Profile() {
  return (
    <div className="Profile">
      <Header sesionIniciada={true}/>
      <h1>Hola</h1>
      <Footer />
    </div>
  );
}
