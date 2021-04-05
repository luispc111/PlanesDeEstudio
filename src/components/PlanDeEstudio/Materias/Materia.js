import React from 'react'

export default function Materia({ nombre }) {
  return (
    <div className={`materia labelMateria bg-orange`}><label>{nombre}</label></div>
  )
}

// function Course(props) {
//   const {course, selectedColor, parent, updateColorProgress, courseChangedColor, parentClicked} = props;

//   const [color, setColor] = useState('Orange');
//   const [parentColor, setParentColor] = useState(parent);
//   const [clicked, setClicked] = useState(false);

//   useEffect(() => {
//       // if (clicked) {
//           setColor(parent);
//       // }
//   }, [parentClicked]);

//   const {nombre, clave, semestre, requisitoAcreditado, requisitoCursado} = course;

//   const changeColor = () => {
//       if (parent != color) {
//           courseChangedColor()
//       }
//       updateColorProgress(color, selectedColor, 1);
//       setColor(selectedColor)
//   }

//   useEffect(() => {
//       if (clicked) {
//           changeColor()
//           setClicked(false)
//       }
//   }, [clicked]);

//   return(
//       <div className={`materia labelMateria ${color}`} onClick={() => setClicked(true)}><label>{nombre}</label></div>
//   )
// }
