import React from 'react'
import { Navbar, Image, Nav } from 'react-bootstrap'
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { backendURL } from "../utils";
import axios from "axios";

import { PUBLIC_URL } from './../utils'; 

function extraerMatricula({ email }) {
  return email.split("@")[0].toUpperCase();
}

/**
 * Parte superior, contiene controles de manejo de sesión y perfil
 * 
 * @param {Boolean} sesionIniciada Indica si el usuario ingresa como previamente registrado.
 */
export default function Header({ loggedUser, setLoggedUser }) {
  function failureResponse(response) {
    console.log(response);
  }
  async function successResponse({ profileObj }) {
    const resLogin = await axios.post(`${backendURL}/login/`, profileObj).catch((err) => err);
    if (resLogin instanceof Error) {
      console.log(resLogin);
    }
    setLoggedUser(profileObj);
  }
  function logout() {
    setLoggedUser(undefined);
  }
  
  const matricula = loggedUser ? extraerMatricula(loggedUser) : "";

  return (
    <Navbar sticky="top" variant="dark" className="p-0 pb-4">
      <Navbar.Brand href={`${PUBLIC_URL}/`}>
        <h1> Planes de Estudio </h1>
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Nav className="element">
          {loggedUser && (
            <>
              <Nav.Link href={`${PUBLIC_URL}/perfil/${matricula}`} className="element">
                <Image
                  className="ml-4" 
                  width={48}
                  height={48}
                  src={loggedUser.imageUrl}
                  roundedCircle
                />
              </Nav.Link>
              <GoogleLogout
                clientId="78830882271-iabhrh1kgh03rbb0js65vh0iftf6jkjh.apps.googleusercontent.com"
                buttonText="Salir de la cuenta"
                onSuccess={logout}
              />
            </>
          )}
          {!loggedUser && (
            <Nav.Link href={`${PUBLIC_URL}/`}>
              <GoogleLogin
                clientId="78830882271-iabhrh1kgh03rbb0js65vh0iftf6jkjh.apps.googleusercontent.com"
                buttonText="Iniciar sesión"
                onSuccess={successResponse}
                onFailure={failureResponse}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
              />
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
