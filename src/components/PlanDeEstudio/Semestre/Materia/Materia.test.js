import React from "react";
import { render } from '@testing-library/react';

import Materia from "./Materia";

const props = {
  nums: {
    numSemestre: jest.fn(),
    numMateria: jest.fn()
  },
  materia: {
    nombre: 'Progra 1',
    color: 'orange',
  },
  clickMateria: jest.fn()
};

it("renderiza una materia", () => {

  const { container, getByText } = render(<Materia
                                            nums={props.nums}
                                            materia={props.materia}
                                            tec21={false}
                                            clickMateria={props.clickMateria}
                                          />);

  // const credits = screen.getByText(/Creada por:/);

  // expect(luisito).toBeInTheDocument();
  expect(getByText(/Progra 1/)).toBeInTheDocument();

  const materia = container.querySelector('.bg-orange');
  expect(materia).toBeInTheDocument();
});

it("renderiza una materia de tec21", () => {

  const { container, getByText } = render(<Materia
                                            nums={props.nums}
                                            materia={props.materia}
                                            tec21={true}
                                            clickMateria={props.clickMateria}
                                          />);

  expect(getByText(/Progra 1/)).toBeInTheDocument();

  const materia = container.querySelector('.bg-orange');
  expect(materia).toBeInTheDocument();

  const seccionTec21 = container.querySelector('.tec21');
  expect(seccionTec21).toBeInTheDocument();
});
