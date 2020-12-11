import React, {useState, useEffect} from 'react';
import MajorButtons from './MajorButtons';
import majorsList from './MajorBtns.json';

// let filteredMajorsList = majorsList;

export default function CareersButtons() {

    const [filteredList, setFilteredList] = useState(majorsList);

    const handleOnInput = (e) => {
        setFilteredList(majorsList.filter(major => major.name.includes(e.target.value.toUpperCase())));
    }

    return (
        <section id="seleccionPlan">
            <h1 className="titulo">Planes de estudio</h1>
            <h2 htmlFor="searchStudyPlan" color="white">Selecciona tu plan de estudios:</h2>
            <input 
                type="text" 
                className="form-control"
                id="searchStudyPlan" 
                placeholder="Search" 
                autoComplete="off"
                onInput={handleOnInput}
            />
            <MajorButtons 
                majorsList={filteredList}
            />
        </section>
    )
}