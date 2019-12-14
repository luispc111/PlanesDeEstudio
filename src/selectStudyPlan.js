function selectStudyPlan() {
    $("#selectStudyPlan").on("click", (event) => {
        event.preventDefault();

        console.log("clicked");

        let val = $("#studyPlanSelected").val();

        document.querySelector("#seleccionPlan").hidden = true;
        // switch
        if (val == 'MateriasITC') {
            createTable(MateriasITC);
        }
        else if (val == 'MateriasARQ') {
            createTable(MateriasARQ);
        }
        document.querySelector("#planDeEstudios").hidden = false;

    });
}

selectStudyPlan();