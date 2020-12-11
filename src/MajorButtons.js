import React from 'react'

export default function MajorButtons(props) {
    const {majorsList} = props;
    return (
        <div id="majorBtns">
            {majorsList.sort((a, b) => (a.name).localeCompare(b.name)).map((major, i) => (
                <MajorBtn 
                    key={i}
                    major={major}
                />
            ))}
        </div>
    )
}

function MajorBtn(props) {

    const {major} = props

    return (
        <a href={`./major?major_id=${major.id}&major_name=${major.name}`}>
            <button type="button" className="btn btn-primary btn-lg selectStudyPlan">
                {major.name}
            </button>
        </a>
    )
}
