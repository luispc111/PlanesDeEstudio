//test alerts
alert("te an jakeado");

// checking classes
function checking(id) {

	var aux0 = "b" + id;
	if(document.getElementById(aux0).checked == true){

		document.getElementById(id).style.color = "white";
		document.getElementById(id).style.backgroundColor = "green";

		// if you check a class, check if the semester button needs to turn green
		if(document.getElementById("bsem" + id[1]).checked == false){

			bcheck = true;
			if(id[1] == '1' || id[1] == '8' || id[1] == '9'){	
				for(var i=1; i<=7; i++){
					if(document.getElementById("bs" + id[1] + "m" + i).checked == false){
						bcheck = false;
						break;
					}
				}
				if(bcheck == true){
					document.getElementById("bsem" + id[1]).checked = true;
					document.getElementById("sem" + id[1]).style.color = "white";
					document.getElementById("sem" + id[1]).style.backgroundColor = "green";
				}
			}
			else{
				for(var i=1; i<=6; i++){
					if(document.getElementById("bs" + id[1] + "m" + i).checked == false){
						bcheck = false;
						break;
					}
				}
				if(bcheck == true){
					document.getElementById("bsem" + id[1]).checked = true;
					document.getElementById("sem" + id[1]).style.color = "white";
					document.getElementById("sem" + id[1]).style.backgroundColor = "green";
				}
			}
		}
	}
	else{
		// change atributes of that class
		document.getElementById(id).style.color = "black";
		document.getElementById(id).style.backgroundColor = "orange";

		// if you uncheck a class, check if the semester button needs to be unchecked
		var auxS = "sem" + id[1];
		if(document.getElementById("b" + auxS).checked == true){
			document.getElementById("b" + auxS).checked = false;
			document.getElementById(auxS).style.color = "black";
			document.getElementById(auxS).style.backgroundColor = "orange";
		}
	}	
}

// checking semesters
function checkingSemester(id) {
	
	// id 	== 	sem1
	// auxB == 	bsem1
	// id[3] == 1

	var auxB = "b" + id;
	if(document.getElementById(auxB).checked == true){
		document.getElementById(id).style.color = "white";
		document.getElementById(id).style.backgroundColor = "green";
		
		for(var i = 1; i <= 6; i++){
			document.getElementById("s" + id[3] "m" + i).style.color = "white";
			document.getElementById("s" + id[3] "m" + i).style.backgroundColor = "green";
			document.getElementById("bs" + id[3] "m" + i).checked = true;
		}

		if(id[3] == '1' || id[3] == '8' || id[3] == '9'){
			document.getElementById("s" + id[3] + "m7").style.color = "white";
			document.getElementById("s" + id[3] + "m7").style.backgroundColor = "green";
			document.getElementById("bs" + id[3] + "m7").checked = true;
		}
	}
	else{
		document.getElementById(id).style.color = "black";
		document.getElementById(id).style.backgroundColor = "orange";
		
		for(var i = 1; i <= 6; i++){
			document.getElementById("s" + id[3] "m" + i).style.color = "black";
			document.getElementById("s" + id[3] "m" + i).style.backgroundColor = "orange";
			document.getElementById("bs" + id[3] "m" + i).checked = false;
		}

		if(id[3] == '1' || id[3] == '8' || id[3] == '9'){
			document.getElementById("s" + id[3] + "m7").style.color = "black";
			document.getElementById("s" + id[3] + "m7").style.backgroundColor = "orange";
			document.getElementById("bs" + id[3] + "m7").checked = false;
		}
	}
}