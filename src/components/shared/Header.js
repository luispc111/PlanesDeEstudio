import React from 'react'
import { Navbar, Image, Nav } from 'react-bootstrap'

/**
 * Parte superior, contiene controles de manejo de sesión y perfil
 * 
 * @param {Boolean} sesionIniciada Indica si el usuario ingresa como previamente registrado.
 */
export default function Header({ sesionIniciada }) {
  return (
    <Navbar sticky="top" variant="dark" className="p-0 pb-4">
      <h1> Planes de Estudio </h1>
      <Navbar.Collapse className="justify-content-end">
        <Nav className="justify-content-end element">
          {sesionIniciada && (
            <Nav.Link href="/">
              Ver perfil
              <Image
                className="ml-4" 
                width={48}
                height={48}
                src="https://i.stack.imgur.com/dr5qp.jpg"
                roundedCircle
              />
            </Nav.Link>)
          }
          {!sesionIniciada && (<Nav.Link href="/"> Iniciar sesión </Nav.Link>)}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
