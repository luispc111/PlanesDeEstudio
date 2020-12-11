import React, {useState, useEffect} from 'react'

export default function ProgressBars(props) {

    const {colorList, colorProgress} = props;

    const [currentProgress, setCurrentProgress] = useState({...colorProgress})

    useEffect(() => {
        setCurrentProgress(colorProgress);
    }, [colorProgress])

    return (
        <div id="myProgress">
            {
                colorList.map((color, i) => Object.keys(currentProgress).map((colorKey) => {
                    if (color == colorKey) {
                        return (
                            <ProgressBar 
                                key={i}
                                color={color}
                                progress={currentProgress[colorKey]}
                            />
                        )
                    }
                }
                ))
            }
        </div>
    )
}

function ProgressBar(props) {
    const {color, progress} = props;

    const [currentProgress, setCurrentProgress] = useState(progress)

    useEffect(() => {
        setCurrentProgress(progress);
    }, [progress])

    return (
        <div className={`progressBar ${color}`} style={{width: `${currentProgress}%`}} >{((currentProgress > 0) ? `${currentProgress}%` : '')}</div>
    )
}
