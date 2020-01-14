const majors = [
    {
        name: "ITC 11",
        id: "itc_11"
    },
    {
        name: "ARQ 11",
        id: "arq_11"
    },
    {
        name: "LRI 11",
        id: "lri_11"
    },
    {
        name: "IDS 11",
        id: "ids_11"
    }
]

function compare(a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    // a must be equal to b
    return 0;
  }

function createMajorBtns () {
    // order majors array

    console.log(majors);
    majors.sort(compare);
    console.log(majors);

    for (let i = 0; i < majors.length; i++) {
        $("#majorBtns").append(`
		<button type="button" class="btn btn-primary btn-lg selectStudyPlan" value="${majors[i].id}">${majors[i].name}</button>
        `) 
    }

}

createMajorBtns();