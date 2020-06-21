let materiasGuardadas = {
    sem1: {

    }
};

function changeToCourses(val, nombre) {
    if (val != "0") {
        document.querySelector("#seleccionPlan").hidden = true;
        createTable(val);
        document.title = nombre;
        document.querySelector("#tituloTabla").textContent = `Plan de estudios ${nombre}`;
        document.querySelector("#planDeEstudios").hidden = false;
    }
}

function load() {
    createMajorBtns();
    if (localStorage.getItem('carreraID')) {
        //load
        console.log('jaja hola');
        document.querySelector('#seleccionPlan').hidden = true;

        changeToCourses(localStorage.getItem('carreraID'), localStorage.getItem('carreraNombre'));
        loadTable();
    }
}

function loadTable() {

}

function createString() {

}

function parseString() {

}

load();