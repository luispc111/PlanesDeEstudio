import React from "react";
import { render, screen } from '@testing-library/react';

import Header from "./Header";

it("renderiza texto del header cuando sesionIniciada es false", () => {
  render(<Header sesionIniciada={false}/>);

  const header_title = screen.getByText("Planes de Estudio");
  const header_log_in = screen.getByText("Iniciar sesión");

  expect(header_title).toBeInTheDocument();
  expect(header_log_in).toBeInTheDocument();
});
