import React, {useState} from 'react'

let colores = {

}

let nameColors = ["Orange", "Green", "Blue", "Purple", "Pink", "Red", "Teal"];

let colorsHex = {
	Green: '#439630',
	Blue: "#2653AD",
	Orange: "#BF7913",
	Purple: "#633B8D",
	Pink: "#C14B4C",
	Red: "#B02828",
	Teal: "#008080"
}

export default function ColorBtns(props) {

    const {changeColor, selectedColor} = props

    const [colors, setColors] = useState(["Orange", "Green", "Blue", "Purple", "Pink", "Red", "Teal"]);

    return (
        <div className="colorBtns">
            {colors.map((color, i) => (
                <ColorBtn 
                    key={i}
                    colorName={color}
                    index={i}
                    changeColor={changeColor}
                    selected={(selectedColor == color)}
                />
            ))}
        </div>
    )
}

function ColorBtn(props) {
    const {colorName, index, changeColor, selected} = props;

    return (
        <button onClick={(e) => changeColor(colorName)} className={`colorBtn ${colorName} ${(selected) ? 'selected' : ''}`} value={colorName}><kbd class="key">{index}</kbd></button>
    )
}
