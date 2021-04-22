import React, { useState, useEffect } from 'react';

/** Bloque de una materia individual **/
export default function Materia ({ nombre, tec21, colorSeleccionado, colorSemestre, cambiarColorSemestre, semestreClickeado, cosasColores }) {
  const [colorDeFondo, setColorDeFondo] = useState('orange');
  const {colores, cantMateriasPorColor, setCantMateriasPorColor, cantMaterias} = cosasColores;

  useEffect(() => {
    if (semestreClickeado) {
      setColorDeFondo(colorSemestre);
    }
  }, [colorSemestre])

  const actualizarCantMaterias = () => {
    let cantMaterias = JSON.parse(JSON.stringify(cantMateriasPorColor));
    cantMaterias[colorDeFondo] -= 1;
    cantMaterias[colorSeleccionado] += 1;
    setCantMateriasPorColor(cantMaterias);
  }

  const click = () => {
    actualizarCantMaterias();
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
