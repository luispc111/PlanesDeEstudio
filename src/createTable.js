let materias;

function createTable(studyPlan) {

    let settings = {
        url: `${studyPlan}.json`,
        method: "GET",
        success: function (responseJSON){
            materias = responseJSON;

            // creates array where classes will be stored
            let materiasSem = [];

            // stores classes in array
            for (let i = 0; i < materias.length; i++) {
                while (materiasSem.length < materias[i].semestre) {
                    materiasSem.push([]);
                }
                materiasSem[materias[i].semestre - 1].push(materias[i]);
            }

            // creates the quantity of semesters in study plan
            for (let i = 0; i < materiasSem.length; i ++) {
                $("#rowSemester").append(`
                <th id="s${i+1}" style="background-color: orange;" onclick="clickSemester(this)"><label>Semestre ${i+1}</label></th>
                `);
            }
            
            let maxLength = 0;

            // checks the highest quantity of classes on a single semester
            for (let i = 0; i < materiasSem.length; i++) {
                if (materiasSem[i].length > maxLength) {
                    maxLength = materiasSem[i].length;
                }
            }
        
            // poblates table with the classes of each semester
            for (let i = 0; i < materiasSem.length; i++) {
                for (let j = 0; j < maxLength; j++) {
                    let num = j+1;
                    
                    // checks if there's a class or if it needs to create an empty <td></td> for the table to be correct
                    if (materiasSem[i][j] != undefined) {
                        $("#row" + num).append(`
                        <td id="s${materiasSem[i][j].semestre}m${num}" style="background-color: orange;" onclick="clickCourse(this)"><label>${materiasSem[i][j].nombre}</label></td>
                        `);
                    } else {
                        $("#row" + num).append(`<td></td>`);
                    }
                    
                }
            }
        },
        error: function (error) {
            console.log(error);
        }
    }

    $.ajax(settings);
}
