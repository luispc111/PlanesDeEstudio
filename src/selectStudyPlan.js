function selectStudyPlan() {
    $(".selectStudyPlan").on("click", (event) => {
        event.preventDefault();

        console.log("clicked");
        console.log(event.target.value);
        
        let val = event.target.value;//$(".selectStudyPlan").val();
        
        if (val != "0") {
            document.querySelector("#seleccionPlan").hidden = true;
            createTable(val);
            document.querySelector("#planDeEstudios").hidden = false;
        }
    });
}

selectStudyPlan();