import React from 'react'

export default function BotonCarrera(props) {
    const { carrera } = props;
    const { nombre, clave } = carrera;

    return (
        <div>
            <button
                type="button"
                className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded text-sm md:text-base selectStudyPlan"
                value={clave}
            >
                {nombre}
            </button>
        </div>
    )
}
