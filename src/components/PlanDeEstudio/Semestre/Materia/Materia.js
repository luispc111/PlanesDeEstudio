import React from 'react';

/** Bloque de una materia individual **/
export default function Materia ({ nums, materia, tec21, clickMateria }) {
  const {numSemestre, numMateria} = nums

  return (
    <div className={`materia labelMateria bg-${materia.color}`} onClick={() => clickMateria(numSemestre, numMateria)}>
      <label>{materia.nombre}</label>
      {tec21 && (
        <div>
          aaaaaaaaa
        </div>
      )}
    </div>
  )
}
