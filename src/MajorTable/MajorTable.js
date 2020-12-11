import React, {useState, useEffect} from 'react'

export default function MajorTable(props) {

    const {list, selectedColor} = props;

    return (
        <div id="divTable" className="majorTable">
            {list.map((sem, i) => (
                <Semester
                    key={i}
                    sem={sem}
                    semNum={i}
                    selectedColor={selectedColor}
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
    const {sem, semNum, selectedColor} = props;

    const [color, setColor] = useState('Orange');
    
    return (
        <div className="semester">
            <div className={`semestre ${color}`} onClick={() => setColor(selectedColor)}>Semestre {semNum + 1}</div>
            {sem.map((course, i) => (
                <Course
                    key={i}
                    course={course}
                    selectedColor={selectedColor}
                    parent={color}
                />
            ))}
        </div>
    )
}

function Course(props) {
    const {course, selectedColor, parent} = props;

    const [color, setColor] = useState('Orange');
    const [parentColor, setParentColor] = useState(parent);

    useEffect(() => {
        setColor(parent);
    }, [parent]);

    const {nombre, clave, semestre, requisitoAcreditado, requisitoCursado} = course;

    return(
        <div className={`materia labelMateria ${color}`} onClick={() => setColor(selectedColor)}>{nombre}</div>
    )
}
