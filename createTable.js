let materias = JSON.parse(Materias);

let materiasSem = {
    sem1: [],
    sem2: [],
    sem3: [],
    sem4: [],
    sem5: [],
    sem6: [],
    sem7: [],
    sem8: [],
    sem9: [],
}

for (let i = 0; i < materias.length; i++) {
    materiasSem["sem" + materias[i].semestre].push(materias[i]);
}