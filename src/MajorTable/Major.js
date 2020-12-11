import React, {useState, useEffect} from 'react'
import queryString from 'query-string';
import Axios from 'axios';

import MajorTable from './MajorTable';
import ColorBtns from './ColorBtns';

export default function Major(props) {
    let params = queryString.parse(props.location.search);

    // console.log(params);

    const [materiasSem, setMateriasSem] = useState([]);

    const [color, setColor] = useState('Orange');

    useEffect(() => {
        Axios.get(`json/${params.major_id}.json`)
        .then(res => {
            // console.log(res);
    
            let materias = res.data;
            let materiasSemExtra = [];
    
            // stores classes in array seprated by semester
            for (let i = 0; i < materias.length; i++) {
                // creates a new semester in case needed
                while (materiasSemExtra.length < materias[i].semestre) {
                    materiasSemExtra.push([]);
                }
                materiasSemExtra[materias[i].semestre - 1].push(materias[i]);
            }
    
            // console.log(materiasSemExtra);
    
            setMateriasSem(materiasSemExtra);
        });
    }, [0]);

    const changeColor = (newColor) => {
        setColor(newColor);
    }
    
    return (
        <section id="planDeEstudios">
            <div>
                <h1>Plan de Estudios {params.major_name}</h1>
            </div>
            <ColorBtns 
                selectedColor={color}
                changeColor={changeColor}
            />
            <div id="myProgress">
                <div className="progressBar" id="myBarGreen"></div>
                <div className="progressBar" id="myBarBlue"></div>
                <div className="progressBar" id="myBarPurple"></div>
                <div className="progressBar" id="myBarPink"></div>
                <div className="progressBar" id="myBarRed"></div>
                <div className="progressBar" id="myBarTeal"></div>
                <div className="progressBar" id="myBarOrange"></div>
            </div>

            <MajorTable 
                list={materiasSem}
                selectedColor={color}
            />
        </section>
    )

}
