function selectStudyPlan() {
    $("#selectStudyPlan").on("click", (event) => {
        event.preventDefault();

        console.log("clicked");
        
        let val = $("#studyPlanSelected").val();
        if (val != "0") {
            document.querySelector("#seleccionPlan").hidden = true;
            createTable(val);
            document.querySelector("#planDeEstudios").hidden = false;
        }
    });
}

selectStudyPlan();