import React, { useState, useEffect } from 'react';

/** Bloque de una materia individual **/
export default function Materia ({ nombre, tec21, colorSeleccionado, colorSemestre, cambiarColorSemestre, semestreClickeado, cambiarCantMaterias }) {
  const [colorDeFondo, setColorDeFondo] = useState('orange');

  useEffect(() => {
    if (semestreClickeado) {
      setColorDeFondo(colorSemestre);
    }
  }, [colorSemestre])

  const click = () => {
    cambiarCantMaterias(colorDeFondo, colorSeleccionado);
    setColorDeFondo(colorSeleccionado);
    cambiarColorSemestre('orange');
  }

  return (
    <div className={`materia labelMateria bg-${colorDeFondo}`} onClick={() => click()}>
      <label>{nombre}</label>
      {tec21 && (
        <div>
          aaaaaaaaa
        </div>
      )}
    </div>
  )
}
