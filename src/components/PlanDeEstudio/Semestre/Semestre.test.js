import React from "react";
import { render } from '@testing-library/react';

import Semestre from "./Semestre";

const materias = [
  {
    nombre: 'Progra 1',
    color: 'green',
  },
  {
    nombre: 'Progra 2',
    color: 'teal',
  },
  {
    nombre: 'Progra 3',
    color: 'blue',
  },
]

const props = {
  clicks: {
    clickMateria: jest.fn(),
    clickSemestre: jest.fn()
  },
  nums: {
    numSemestre: jest.fn(),
    numMateria: jest.fn()
  },
};

it("renderiza un semestre", () => {

  const { container, getByText } = render(<Semestre
                                            numSemestre={0}
                                            materias={materias}
                                            tec21={false}
                                            colorSeleccionado={'orange'}
                                            clicks={props.clicks}
                                          />);

  expect(getByText(/Semestre 1/)).toBeInTheDocument();

  const semestre = container.querySelector('.bg-orange');
  expect(semestre).toBeInTheDocument();
});

it("renderiza las materias de un semestre", () => {

  const { container, getByText } = render(<Semestre
                                            numSemestre={0}
                                            materias={materias}
                                            tec21={false}
                                            colorSeleccionado={'orange'}
                                            clicks={props.clicks}
                                          />);

  expect(getByText(/Semestre 1/)).toBeInTheDocument();
  const semestre = container.querySelector('.bg-orange');
  expect(semestre).toBeInTheDocument();

  expect(getByText(/Progra 1/)).toBeInTheDocument();
  const materia1 = container.querySelector('.bg-green');
  expect(materia1).toBeInTheDocument();

  expect(getByText(/Progra 2/)).toBeInTheDocument();
  const materia2 = container.querySelector('.bg-teal');
  expect(materia2).toBeInTheDocument();

  expect(getByText(/Progra 3/)).toBeInTheDocument();
  const materia3 = container.querySelector('.bg-blue');
  expect(materia3).toBeInTheDocument();
});
