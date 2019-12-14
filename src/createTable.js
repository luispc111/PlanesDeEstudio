function createTable(studyPlan) {
    let materias = JSON.parse(studyPlan);

    let materiasSem = [];

    for (let i = 0; i < materias.length; i++) {
        while (materiasSem.length < materias[i].semestre) {
            materiasSem.push([]);
        }
        materiasSem[materias[i].semestre - 1].push(materias[i]);
    }

    console.log("materias", materiasSem);

    for (let i = 0; i < materiasSem.length; i ++) {
        $("#rowSemester").append(`
        <th id="s${i+1}" style="background-color: orange;" onclick="clickSemester(this)"><label>Semestre ${i+1}</label></th>
        `);
    }
    
    let maxLength = 0;

    // let arraysMatSem = Object.values(materiasSem);

    // arraysMatSem.forEach((item)=> {
    //     console.log(item);
    //     let semester = Object.values(item);
    //     semester.forEach((item)=> {
    //         console.log(item);
    //     });
    // });

    for (let i = 0; i < materiasSem.length; i++) {
        if (materiasSem[i].length > maxLength) {
            maxLength = materiasSem[i].length;
        }
    }

    for (let i = 0; i < materiasSem.length; i++) {
        for (let j = 0; j < maxLength; j++) {
            let num = j+1;
            
            if (materiasSem[i][j] != undefined) {
                // if (materiasSem[i][j].semestre == 1) {
                //     $("#row" + num).html("");
                // }
                $("#row" + num).append(`
                <td id="s${materiasSem[i][j].semestre}m${num}" style="background-color: orange;" onclick="clickCourse(this)"><label>${materiasSem[i][j].nombre}</label></td>
                `);
            } else {
                $("#row" + num).append(`<td></td>`);
            }
            
        }
    }

    // arraysMatSem.forEach((item)=> {
    //     if (item.length > maxLength) {
    //         maxLength = item.length;
    //     }
    // });

    // arraysMatSem.forEach((item)=> {
    //     for (let j = 0; j < maxLength; j++) {
    //         let num = j+1;
            
    //         if (item[j] != undefined) {
    //             // if (item[j].semestre == 1) {
    //             //     $("#row" + num).html("");
    //             // }
    //             $("#row" + num).append(`
    //             <td id="s${item[j].semestre}m${num}" style="background-color: orange;" onclick="clickCourse(this)"><label>${item[j].nombre}</label></td>
    //             `);
    //         } else {
    //             $("#row" + num).append(`<td></td>`);
    //         }
            
    //     }
    // });
    
    // for (let i = 0; i < materiasSem.length; i++) {
    //     if (materiasSem[i].length > maxLength) {
    //         console.log("maxLength changed");
    //         maxLength = materiasSem[i].length;
    //     }
    // }
    
    // for (let i = 0; i < materiasSem.length; i++) {
    //     console.log("hola");
    //     for (let j = 0; j < materiasSem[i].length; j++) {
    //         let num = j+1;
    //         if (i == 0) {
    //             $("#row" + num).html("");
    //         }
    //         console.log(materiasSem[i][j])
    //         if (materiasSem[i][j]) {
    //             $("#row" + num).append(`
    //             <td id="s${i}m${j+1}" style="background-color: orange;" onclick="clickCourse(this)"><label>${materiasSem[i][j].nombre}</label></td>
    //             `);
    //         }
            
    //     }
    // }
}

// createTable();

