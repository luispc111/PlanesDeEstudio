function selectStudyPlan() {
    $(".selectStudyPlan").on("click", (event) => {
        event.preventDefault();

        console.log(event.target.value);
        
        let val = event.target.value;
        
        if (val != "0") {
            document.querySelector("#seleccionPlan").hidden = true;
            createTable(val);
            document.title = event.target.textContent;
            document.querySelector("#tituloTabla").textContent = `Plan de estudios ${event.target.textContent}`;
            document.querySelector("#planDeEstudios").hidden = false;
        }
    });
}

function eraseTable() {
    $("#rowSemester").html("");

    for (let i = 1; i <= localStorage.cantSemestres; i++) {
        $("#row" + i).html("");
    }
}

function gobackBTN() {
    $("#goback").on("click", (event) => {
        event.preventDefault();
        document.querySelector("#planDeEstudios").hidden = true;
        eraseTable();
        cleanProgressBars()
        document.querySelector("#seleccionPlan").hidden = false;
        document.title = "Planes de Estudio";
    });
}

document.getElementById("searchStudyPlan").addEventListener('input', (event) => {
    event.preventDefault();
    let btns = document.querySelector("#majorBtns").children;

    for (let i = 0; i < btns.length; i++) {
        btns[i].hidden = !btns[i].innerText.includes(event.target.value.toUpperCase());
    }
});

gobackBTN();

selectStudyPlan();