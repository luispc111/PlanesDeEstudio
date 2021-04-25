import React from "react";
import { render } from '@testing-library/react';

import Header from "./Header";

it("renderiza header cuando no se ha iniciado sesión", () => {
  const { getByText } = render(<Header sesionIniciada={false}/>);

  expect(getByText("Planes de Estudio")).toBeInTheDocument();
  expect(getByText("Iniciar sesión")).toBeInTheDocument();
});

it("renderiza header cuando se ha iniciado sesión", () => {
  const { getByText, container } = render(<Header sesionIniciada={true}/>);

  expect(getByText("Planes de Estudio")).toBeInTheDocument();
  expect(getByText(/Ver perfil/)).toBeInTheDocument();

  const imagenPerfil = container.querySelector('.imagen-perfil');
  expect(imagenPerfil).toBeInTheDocument();
});
