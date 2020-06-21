function selectStudyPlan() {
    console.log('aiuda');   
    $('.btn.btn-primary.btn-lg.selectStudyPlan').on('click', (event) => {
        event.preventDefault();

        console.log(event.target.value);
        
        let val = event.target.value;

        localStorage.setItem('carreraID', event.target.value);
        localStorage.setItem('carreraNombre', event.target.textContent);
        
        changeToCourses(val, event.target.textContent);
    });
}

function eraseTable() {
    $("#rowSemester").html("");
    $(".courseRows").html("");
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

// selectStudyPlan();