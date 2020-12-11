import React, {useState, useEffect} from 'react'
import queryString from 'query-string';
import Axios from 'axios';

import MajorTable from './MajorTable';
import ColorBtns from './ColorBtns';
import ProgressBars from './ProgressBars';

export default function Major(props) {
    let params = queryString.parse(props.location.search);

    // console.log(params);

    const [materiasSem, setMateriasSem] = useState([]);
    const [cantMaterias, setCantMaterias] = useState(0);

    const [color, setColor] = useState('Green');

    const [colorList, setColorList] = useState(["Orange", "Green", "Blue", "Purple", "Pink", "Red", "Teal"]);

    const [colorCounter, setColorCounter] = useState({});
    const [colorProgress, setColorProgress] = useState({Orange: 100, Green: 0, Blue: 0, Purple: 0, Pink: 0, Red: 0, Teal: 0});

    const updateColorProgress = (pastColor, newColor, num) => {
        let colors = {...colorCounter};
        colors[pastColor] -= num;
        colors[newColor] += num;
        setColorCounter(colors);
    }

    useEffect(() => {
        let progress = colorProgress;

        colorList.forEach(color => {
            progress[color] = colorCounter[color] / cantMaterias * 100;
        });

        setColorProgress(progress);
    }, [colorCounter])

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

            let colors = {};
            colorList.forEach((color) => {
                colors[color] = ((color === 'Orange') ?  materias.length : 0);
            });

            let progress = colorProgress;
            colorList.forEach(color => {
                console.log(colors[color] /  materias.length * 100);
                progress[color] = colors[color] /  materias.length * 100;
            });

            setMateriasSem(materiasSemExtra);
            setColorCounter(colors);   
            setColorProgress(progress);
            setCantMaterias(materias.length);
        })
    }, [0]);

    const changeColor = (newColor) => {
        setColor(newColor);
    }
    
    return (
        <section id="planDeEstudios">
            <div>
                <h1 id="tituloTabla">Plan de Estudios {params.major_name}</h1>
                <a data-html2canvas-ignore="true" id="goback" className="btn btn-primary btn-lg" href="/">Selecionar otro plan</a>
            </div>
            <ColorBtns 
                colorList={colorList}
                selectedColor={color}
                changeColor={changeColor}
            />
            <ProgressBars 
                colorList={colorList}
                colorProgress={colorProgress}
            />
            <MajorTable 
                list={materiasSem}
                selectedColor={color}
                updateColorProgress={updateColorProgress}
            />
        </section>
    )

}
