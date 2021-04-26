import React, { useContext } from 'react'
import { Navbar, Image, Nav, Button } from 'react-bootstrap'
import { GoogleLogin } from "react-google-login";

import { PUBLIC_URL } from './../utils';
import { login, logout, G_CLIENT_ID } from "../auth";
import logoutIcon from "./logout_white_24dp.svg";
import { UserContext } from "../../context";

/**
 * Parte superior, contiene controles de manejo de sesión y perfil
 * 
 * @param {Boolean} loggedUser Indica el usuario de la sesión.
 */
export default function Header() {
  const loggedUser = useContext(UserContext);
  const { matricula } = loggedUser || {};

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
                  src={loggedUser.urlFoto}
                  roundedCircle
                />
              </Nav.Link>
              <Button onClick={logout} className="logout-button">
                <Image src={logoutIcon} alt="Cerrar sesión" />
              </Button>
            </>
          )}
          {!loggedUser && (
            <GoogleLogin
              clientId={G_CLIENT_ID}
              buttonText="Iniciar sesión"
              onSuccess={login}
              onFailure={(res) => console.log(res)}
              cookiePolicy={"single_host_origin"}
              prompt="select_account"
            />
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
