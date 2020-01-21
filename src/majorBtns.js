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
    },
    {
        name: "INT 11",
        id: "int_11"
    },
    {
        name: "IMI 11",
        id: "imi_11"
    },
    {
        name: "LDI 11",
        id: "ldi_11"
    },
    {
        name: "LAD 11",
        id: "lad_11"
    },
    {
        name: "IIS 11",
        id: "iis_11"
    },
    {
        name: "ISD 11",
        id: "isd_11"
    },
    {
        name: "INCQ 13",
        id: "incq_13"
    },
    {
        name: "LED 11",
        id: "led_11"
    },
    {
        name: "LEM 11",
        id: "lem_11"
    },
    {
        name: "LAF 11",
        id: "laf_11"
    },
    {
        name: "LIN 11",
        id: "lin_11"
    },
    {
        name: "IME 11",
        id: "ime_11"
    },
    {
        name: "IFI 11",
        id: "ifi_11"
    },
    {
        name: "IQP 11",
        id: "iqp_11"
    },
    {
        name: "IIA 11",
        id: "iia_11"
    },
    {
        name: "IMT 11",
        id: "imt_11"
    },
    {
        name: "IQA 11",
        id: "iqa_11"
    },
    {
        name: "LEC 11",
        id: "lec_11"
    },
    {
        name: "IMA 11",
        id: "ima_11"
    },
    {
        name: "IID 12",
        id: "iid_12"
    },
    {
        name: "IID 17",
        id: "iid_17"
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
