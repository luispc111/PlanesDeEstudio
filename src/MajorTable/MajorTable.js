import React, {useState, useEffect} from 'react'

export default function MajorTable(props) {

    const {list, selectedColor, updateColorProgress} = props;

    return (
        <div id="divTable" className="majorTable">
            {list.map((sem, i) => (
                <Semester
                    key={i}
                    sem={sem}
                    semNum={i}
                    selectedColor={selectedColor}
                    updateColorProgress={updateColorProgress}
                />
            ))}
            {/* <table id="my-table", style="width:100%; -webkit-user-select: none; webkit (safari, chrome) browsers> */}
            {/* <table id="my-table">
                <thead id="rowSemester">

                    <tr id="rowSemester">
                    </tr>
                </thead>
            
                <tbody class="courseRows">
                </tbody>
            </table> */}
        </div>
    )
}

function Semester(props) {
    const {sem, semNum, selectedColor, updateColorProgress} = props;

    const [color, setColor] = useState('Orange');

    const changeColor = () => {
        updateColorProgress(color, selectedColor, sem.length);
        setColor(selectedColor)
    }
    
    return (
        <div className="semester">
            <div className={`semestre ${color}`} onClick={() => changeColor()}> <strong> Semestre {semNum + 1} </strong></div>
            {sem.map((course, i) => (
                <Course
                    key={i}
                    course={course}
                    selectedColor={selectedColor}
                    parent={color}
                    updateColorProgress={updateColorProgress}
                />
            ))}
        </div>
    )
}

function Course(props) {
    const {course, selectedColor, parent, updateColorProgress} = props;

    const [color, setColor] = useState('Orange');
    const [parentColor, setParentColor] = useState(parent);

    useEffect(() => {
        setColor(parent);
    }, [parent]);

    const {nombre, clave, semestre, requisitoAcreditado, requisitoCursado} = course;

    const changeColor = () => {
        updateColorProgress(color, selectedColor, 1);
        setColor(selectedColor)
    }

    return(
        <div className={`materia labelMateria ${color}`} onClick={() => changeColor()}><label>{nombre}</label></div>
    )
}
