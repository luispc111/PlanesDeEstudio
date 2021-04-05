import React from "react";
import { render, screen } from '@testing-library/react';

import Header from "./Header";

it("renderea texto del header", () => {
  render(<Header />);

  const header_title = screen.getByText("Planes de Estudio");
  const header_profile = screen.getByText("Perfil");
  const header_log_out = screen.getByText("Cerrar sesión");

  expect(header_title).toBeInTheDocument();
  expect(header_profile).toBeInTheDocument();
  expect(header_log_out).toBeInTheDocument();
});
