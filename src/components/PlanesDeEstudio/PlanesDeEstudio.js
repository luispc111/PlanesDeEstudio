import React from 'react'
import BotonCarrera from './BotonCarrera';

export default function PlanesDeEstudio() {
    return (
        <div>
            <h1 className="titulo">Planes de estudio</h1>
            <div className="form-group">
				<form onSubmit={() => false}>
					<div className="input-group">
				        <h2
                            htmlFor="studyPlanSelected"
                            color="white;"
                        >
                            Selecciona tu plan de estudios:
                        </h2>
					  	<input
                          type="text"
                          className="form-control"
                          id="searchStudyPlan"
                          placeholder="Search"
                          autoComplete="off"
                        />
					</div>
				</form>
				<div id="majorBtns">
                    <BotonCarrera
                        boton={{nombre: 'a', id: 'a'}}
                    />
				</div>
			</div>
        </div>
    )
}
