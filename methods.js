
// checking classes
function checking(id) {

	var aux0 = "b" + id;
	if(document.getElementById(aux0).checked == true){

		// añadir a la barra de progreso
		moveOneMore();

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

		// quitarle a la barra de progreso
		moveOneLess();

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

	var auxB = "b" + id;
	if(document.getElementById(auxB).checked == true){

		moveOneMoreSemester(id);

		//semester box
		document.getElementById(id).style.color = "white";
		document.getElementById(id).style.backgroundColor = "green";
		
		// classes boxes
		for(var i = 1; i <= 6; i++){
			document.getElementById("s" + id[3] + "m" + i).style.color = "white";
			document.getElementById("s" + id[3] + "m" + i).style.backgroundColor = "green";
			document.getElementById("bs" + id[3] + "m" + i).checked = true;
		}

		//7th box for semesters with 7 classes
		if(id[3] == '1' || id[3] == '8' || id[3] == '9'){
			document.getElementById("s" + id[3] + "m7").style.color = "white";
			document.getElementById("s" + id[3] + "m7").style.backgroundColor = "green";
			document.getElementById("bs" + id[3] + "m7").checked = true;
		}
	}
	else{

		moveOneLessSemester(id);

		//semester box
		document.getElementById(id).style.color = "black";
		document.getElementById(id).style.backgroundColor = "orange";
		
		// classes boxes
		for(var i = 1; i <= 6; i++){
			document.getElementById("s" + id[3] + "m" + i).style.color = "black";
			document.getElementById("s" + id[3] + "m" + i).style.backgroundColor = "orange";
			document.getElementById("bs" + id[3] + "m" + i).checked = false;
		}

		// 7th box for semesters with 7 classes
		if(id[3] == '1' || id[3] == '8' || id[3] == '9'){
			document.getElementById("s" + id[3] + "m7").style.color = "black";
			document.getElementById("s" + id[3] + "m7").style.backgroundColor = "orange";
			document.getElementById("bs" + id[3] + "m7").checked = false;
		}
	}
}


var barWidth = 0;
	width = 100/57;

function moveOneMore() {
 	var elem = document.getElementById("myBar"); 
 	barWidth += width;
 	elem.style.width = barWidth + '%';
}

function moveOneLess() {
 	var elem = document.getElementById("myBar"); 
 	barWidth -= width;
 	elem.style.width = barWidth + '%';
}

function moveOneMoreSemester(id) {
 	var elem = document.getElementById("myBar"); 
 	if(id[3] == '1' || id[3] == '8' || id[3] == '9'){
 		barWidth += (width * 7);
 	}
 	else{
 		barWidth += (width * 6);
 	}	
 	elem.style.width = barWidth + '%';
}

function moveOneLessSemester(id) {
 	var elem = document.getElementById("myBar"); 
 	if(id[3] == '1' || id[3] == '8' || id[3] == '9'){
 		barWidth -= (width * 7);
 	}
 	else{
 		barWidth -= (width * 6);
 	}	
 	elem.style.width = barWidth + '%';
}