import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navbar, Image, Nav } from 'react-bootstrap'

import Profile from './../Profile/Profile';

import { PUBLIC_URL } from './../utils';

/**
 * Parte superior, contiene controles de manejo de sesión y perfil
 * 
 * @param {Boolean} sesionIniciada Indica si el usuario ingresa como previamente registrado.
 */
export default function Header({ sesionIniciada }) {
  return (
    <Navbar sticky="top" variant="dark" className="p-0 pb-4">
      <Navbar.Brand href={`${PUBLIC_URL}/`}>
        <h1> Planes de Estudio </h1>
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Nav className="element">
          {sesionIniciada && (
            <Nav.Link href={`${PUBLIC_URL}/perfil/`}>
              Ver perfil
              <Image
                className="ml-4 imagen-perfil" 
                width={48}
                height={48}
                src="https://i.stack.imgur.com/dr5qp.jpg"
                roundedCircle
              />
            </Nav.Link>
          )}
          {!sesionIniciada && (<Nav.Link href={`${PUBLIC_URL}/`}> Iniciar sesión </Nav.Link>)}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
