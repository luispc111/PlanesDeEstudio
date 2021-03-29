import React from 'react'
import BotonCarrera from './BotonCarrera';

export default function PlanesDeEstudio() {
    return (
        <div>
            <h1 class="titulo">Planes de estudio</h1>
            <div class="form-group">
				<h2 for="studyPlanSelected" color="white;">Selecciona tu plan de estudios:</h2>
				<form onSubmit="return false;">
					<div class="input-group">
					  	<input type="text" class="form-control" id="searchStudyPlan" placeholder="Search" autocomplete="off" />
					  	<div class="input-group-btn">
						</div> 
					</div>
				</form>
				<div id="majorBtns">
                    <BotonCarrera />
				</div>
			</div>
        </div>
    )
}
