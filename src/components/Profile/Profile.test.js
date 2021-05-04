import React from "react";
import { render } from '@testing-library/react';
import { UserContext } from "../../context";
// import { act } from "react-dom/test-utils";

import Profile from "./Profile";

it("renderiza la vista de perfil de usuario", () => {
  const usuario = { 
    urlFoto: 'http://urlfalso.com/imagen.png',
    nombre: "Peter",
    apellido: "Parker",
    matricula: "A00000000"
  }
  const { getByText, container } = render(
    <UserContext.Provider value={usuario}>
      <Profile/>
    </UserContext.Provider>
  );

  const nombreUsuario = getByText(/Peter Parker/);
  expect(nombreUsuario).toBeInTheDocument();

  const matriculaUsuario = getByText(/A00000000/);
  expect(matriculaUsuario).toBeInTheDocument();

  const imagenUsuario = container.querySelector(".imagen-perfil-vista")
  expect(imagenUsuario).toBeInTheDocument();
  expect(imagenUsuario.src).toBe("http://urlfalso.com/imagen.png");
});
