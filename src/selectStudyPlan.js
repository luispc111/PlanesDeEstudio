function selectStudyPlan() {
    $(".selectStudyPlan").on("click", (event) => {
        event.preventDefault();

        console.log("clicked");
        console.log(event.target.value);
        
        let val = event.target.value;//$(".selectStudyPlan").val();
        
        if (val != "0") {
            document.querySelector("#seleccionPlan").hidden = true;
            createTable(val);
            document.title = val;
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
        document.querySelector("#seleccionPlan").hidden = false;
        document.title = "Planes de Estudio";
    });
}

gobackBTN();

selectStudyPlan();