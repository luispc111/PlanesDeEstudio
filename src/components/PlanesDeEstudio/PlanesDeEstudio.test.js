import React from "react";
import { render, screen } from '@testing-library/react';
// import { act } from "react-dom/test-utils";

import PlanesDeEstudio from "./PlanesDeEstudio";

it("renderea texto estatico", () => {
  render(<PlanesDeEstudio />);

  const header = screen.getByText("Planes de estudio");
  const input_header = screen.getByText("Planes de estudio");

  expect(header).toBeInTheDocument();
  expect(input_header).toBeInTheDocument();
});

// TODO: Hacer mocks de los requests al back