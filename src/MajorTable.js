import React from 'react'

export default function MajorTable(props) {

    const {list} = props;

    return (
        <div id="divTable">
            {list.map((sem, i) => (
                <Semester
                    key={i}
                    sem={sem}
                    semNum={i}
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
    const {sem, semNum} = props;
    
    return (
        <div className="semester">
            <h1>Semestre {semNum + 1}</h1>
            {sem.map((course, i) => (
                <Course
                    key={i}
                    course={course}
                />
            ))}
        </div>
    )
}

function Course(props) {
    const {course} = props;
    return(
        <div>
            aaaaaa
        </div>
    )
}
