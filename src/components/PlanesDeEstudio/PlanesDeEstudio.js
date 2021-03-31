import React, { useState, useEffect, useCallback } from 'react';
import BotonCarrera from './BotonCarrera';

export default function PlanesDeEstudio() {
    const [planesDeEstudio, setPlanesDeEstudio] = useState([]);

    useEffect(() => {
        let planes = [
            {nombre: 'ITC 11', clave: 'itc_11',},
            {nombre: 'LAD 11', clave: 'lad_11',},
            {nombre: 'LAD 11', clave: 'lad_11',},
            {nombre: 'LAD 11', clave: 'lad_11',},
            {nombre: 'LAD 11', clave: 'lad_11',},
            {nombre: 'LAD 11', clave: 'lad_11',},
            {nombre: 'LAD 11', clave: 'lad_11',},
            {nombre: 'LAD 11', clave: 'lad_11',},
            {nombre: 'LAD 11', clave: 'lad_11',},
            {nombre: 'LAD 11', clave: 'lad_11',},
            {nombre: 'LAD 11', clave: 'lad_11',},
            {nombre: 'LAD 11', clave: 'lad_11',},
            {nombre: 'LAD 11', clave: 'lad_11',},
            {nombre: 'LAD 11', clave: 'lad_11',},
            {nombre: 'LAD 11', clave: 'lad_11',},
            {nombre: 'LAD 11', clave: 'lad_11',},
            {nombre: 'LAD 11', clave: 'lad_11',},
            {nombre: 'LAD 11', clave: 'lad_11',},
        ];

        setPlanesDeEstudio(planes);
    }, []);

    return (
        <div>
            <h1 className="titulo">Planes de estudio</h1>
            <div className="form-group">
				<form onSubmit={() => false}>
					<div className="input-group">
				        <h2
                            htmlFor="studyPlanSelected"
                            className="block text-sm font-bold mb-2 text-white"
                        >
                            Selecciona tu plan de estudios:
                        </h2>
					  	<input
                          type="text"
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline form-control"
                          id="searchStudyPlan"
                          placeholder="Search"
                          autoComplete="off"
                        />
					</div>
				</form>
				<BotonesCarreras
                    listaCarreras={planesDeEstudio}
                />
			</div>
        </div>
    )
}

function BotonesCarreras(props) {
    const { listaCarreras } = props;

    return (
        <div className="grid grid-cols-12 auto-rows-min gap-y-5" id="majorBtns">
            {
                listaCarreras.map((carrera, indice) => (
                    <BotonCarrera
                        key={indice}
                        carrera={carrera}
                    />
                ))
            }
        </div>
    )
}
