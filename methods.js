//test alerts
alert("sup good boi");

function checking(id) {

	var aux0 = "b" + id;
	if(document.getElementById(aux0).checked == true){
		document.getElementById(id).style.color = "white";
		document.getElementById(id).style.backgroundColor = "green";

		// if you check a class, check if the semester button needs to turn green
		// MISSING CODE
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

// SEMESTRE BUTTONS

// Semestre 1
document.getElementById("bsem1").onclick = function(){
	if(document.getElementById("bsem1").checked == true){

		document.getElementById("sem1").style.color = "white";
		document.getElementById("sem1").style.backgroundColor = "green";

		document.getElementById("s1m1").style.color = "white";
		document.getElementById("s1m1").style.backgroundColor = "green";
		document.getElementById("bs1m1").checked = true;

		document.getElementById("s1m2").style.color = "white";
		document.getElementById("s1m2").style.backgroundColor = "green";
		document.getElementById("bs1m2").checked = true;

		document.getElementById("s1m3").style.color = "white";
		document.getElementById("s1m3").style.backgroundColor = "green";
		document.getElementById("bs1m3").checked = true;

		document.getElementById("s1m4").style.color = "white";
		document.getElementById("s1m4").style.backgroundColor = "green";
		document.getElementById("bs1m4").checked = true;

		document.getElementById("s1m5").style.color = "white";
		document.getElementById("s1m5").style.backgroundColor = "green";
		document.getElementById("bs1m5").checked = true;

		document.getElementById("s1m6").style.color = "white";
		document.getElementById("s1m6").style.backgroundColor = "green";
		document.getElementById("bs1m6").checked = true;

		document.getElementById("s1m7").style.color = "white";
		document.getElementById("s1m7").style.backgroundColor = "green";
		document.getElementById("bs1m7").checked = true;
	}
	else{
		document.getElementById("sem1").style.color = "black";
		document.getElementById("sem1").style.backgroundColor = "orange";

		document.getElementById("s1m1").style.color = "black";
		document.getElementById("s1m1").style.backgroundColor = "orange";
		document.getElementById("bs1m1").checked = false;

		document.getElementById("s1m2").style.color = "black";
		document.getElementById("s1m2").style.backgroundColor = "orange";
		document.getElementById("bs1m2").checked = false;	

		document.getElementById("s1m3").style.color = "black";
		document.getElementById("s1m3").style.backgroundColor = "orange";
		document.getElementById("bs1m3").checked = false;

		document.getElementById("s1m4").style.color = "black";
		document.getElementById("s1m4").style.backgroundColor = "orange";
		document.getElementById("bs1m4").checked = false;

		document.getElementById("s1m5").style.color = "black";
		document.getElementById("s1m5").style.backgroundColor = "orange";
		document.getElementById("bs1m5").checked = false;

		document.getElementById("s1m6").style.color = "black";
		document.getElementById("s1m6").style.backgroundColor = "orange";
		document.getElementById("bs1m6").checked = false;

		document.getElementById("s1m7").style.color = "black";
		document.getElementById("s1m7").style.backgroundColor = "orange";
		document.getElementById("bs1m7").checked = false;
	}
}

// Semestre 2
document.getElementById("bsem2").onclick = function(){
	if(document.getElementById("bsem2").checked == true){

		document.getElementById("sem2").style.color = "white";
		document.getElementById("sem2").style.backgroundColor = "green";

		document.getElementById("s2m1").style.color = "white";
		document.getElementById("s2m1").style.backgroundColor = "green";
		document.getElementById("bs2m1").checked = true;

		document.getElementById("s2m2").style.color = "white";
		document.getElementById("s2m2").style.backgroundColor = "green";
		document.getElementById("bs2m2").checked = true;

		document.getElementById("s2m3").style.color = "white";
		document.getElementById("s2m3").style.backgroundColor = "green";
		document.getElementById("bs2m3").checked = true;

		document.getElementById("s2m4").style.color = "white";
		document.getElementById("s2m4").style.backgroundColor = "green";
		document.getElementById("bs2m4").checked = true;

		document.getElementById("s2m5").style.color = "white";
		document.getElementById("s2m5").style.backgroundColor = "green";
		document.getElementById("bs2m5").checked = true;

		document.getElementById("s2m6").style.color = "white";
		document.getElementById("s2m6").style.backgroundColor = "green";
		document.getElementById("bs2m6").checked = true;
	}
	else{
		document.getElementById("sem2").style.color = "black";
		document.getElementById("sem2").style.backgroundColor = "orange";

		document.getElementById("s2m1").style.color = "black";
		document.getElementById("s2m1").style.backgroundColor = "orange";
		document.getElementById("bs2m1").checked = false;

		document.getElementById("s2m2").style.color = "black";
		document.getElementById("s2m2").style.backgroundColor = "orange";
		document.getElementById("bs2m2").checked = false;	

		document.getElementById("s2m3").style.color = "black";
		document.getElementById("s2m3").style.backgroundColor = "orange";
		document.getElementById("bs2m3").checked = false;

		document.getElementById("s2m4").style.color = "black";
		document.getElementById("s2m4").style.backgroundColor = "orange";
		document.getElementById("bs2m4").checked = false;

		document.getElementById("s2m5").style.color = "black";
		document.getElementById("s2m5").style.backgroundColor = "orange";
		document.getElementById("bs2m5").checked = false;

		document.getElementById("s2m6").style.color = "black";
		document.getElementById("s2m6").style.backgroundColor = "orange";
		document.getElementById("bs2m6").checked = false;
	}
}

// -----------------------------------------------------------------------------------
// MATERIAS BUTTONS

// Semestre 1 Materia 1
document.getElementById("bs1m1").onclick = function(){
	checking("s1m1");
}

// Semestre 1 Materia 2
document.getElementById("bs1m2").onclick = function(){
	checking("s1m2");
}

// Semestre 1 Materia 3
document.getElementById("bs1m3").onclick = function(){
	checking("s1m3");
}

// Semestre 1 Materia 4
document.getElementById("bs1m4").onclick = function(){
	checking("s1m4");
}

// Semestre 1 Materia 5
document.getElementById("bs1m5").onclick = function(){
	if(document.getElementById("bs1m5").checked == true){
		document.getElementById("s1m5").style.color = "white";
		document.getElementById("s1m5").style.backgroundColor = "green";
	}
	else{
		document.getElementById("s1m5").style.color = "black";
		document.getElementById("s1m5").style.backgroundColor = "orange";

		if(document.getElementById("bsem1").checked == true){
			document.getElementById("bsem1").checked = false;
			document.getElementById("sem1").style.color = "black";
			document.getElementById("sem1").style.backgroundColor = "orange";
		}

	}
}

// Semestre 1 Materia 6
document.getElementById("bs1m6").onclick = function(){
	if(document.getElementById("bs1m6").checked == true){
		document.getElementById("s1m6").style.color = "white";
		document.getElementById("s1m6").style.backgroundColor = "green";
	}
	else{
		document.getElementById("s1m6").style.color = "black";
		document.getElementById("s1m6").style.backgroundColor = "orange";

		if(document.getElementById("bsem1").checked == true){
			document.getElementById("bsem1").checked = false;
			document.getElementById("sem1").style.color = "black";
			document.getElementById("sem1").style.backgroundColor = "orange";
		}

	}
}

// Semestre 1 Materia 7
document.getElementById("bs1m7").onclick = function(){
	if(document.getElementById("bs1m7").checked == true){
		document.getElementById("s1m7").style.color = "white";
		document.getElementById("s1m7").style.backgroundColor = "green";
	}
	else{
		document.getElementById("s1m7").style.color = "black";
		document.getElementById("s1m7").style.backgroundColor = "orange";

		if(document.getElementById("bsem1").checked == true){
			document.getElementById("bsem1").checked = false;
			document.getElementById("sem1").style.color = "black";
			document.getElementById("sem1").style.backgroundColor = "orange";
		}

	}
}


// Semestre 2 Materia 1
document.getElementById("bs2m1").onclick = function(){
	checking("s2m1");
}

// Semestre 2 Materia 2
document.getElementById("bs2m2").onclick = function(){
	if(document.getElementById("bs2m2").checked == true){
		document.getElementById("s2m2").style.color = "white";
		document.getElementById("s2m2").style.backgroundColor = "green";
	}
	else{
		document.getElementById("s2m2").style.color = "black";
		document.getElementById("s2m2").style.backgroundColor = "orange";
		
		if(document.getElementById("bsem2").checked == true){
			document.getElementById("bsem2").checked = false;
			document.getElementById("sem2").style.color = "black";
			document.getElementById("sem2").style.backgroundColor = "orange";
		}
	}
}

// Semestre 2 Materia 3
document.getElementById("bs2m3").onclick = function(){
	if(document.getElementById("bs2m3").checked == true){
		document.getElementById("s2m3").style.color = "white";
		document.getElementById("s2m3").style.backgroundColor = "green";
	}
	else{
		document.getElementById("s2m3").style.color = "black";
		document.getElementById("s2m3").style.backgroundColor = "orange";

		if(document.getElementById("bsem2").checked == true){
			document.getElementById("bsem2").checked = false;
			document.getElementById("sem2").style.color = "black";
			document.getElementById("sem2").style.backgroundColor = "orange";
		}

	}
}

// Semestre 2 Materia 4
document.getElementById("bs2m4").onclick = function(){
	if(document.getElementById("bs2m4").checked == true){
		document.getElementById("s2m4").style.color = "white";
		document.getElementById("s2m4").style.backgroundColor = "green";
	}
	else{
		document.getElementById("s2m4").style.color = "black";
		document.getElementById("s2m4").style.backgroundColor = "orange";

		if(document.getElementById("bsem2").checked == true){
			document.getElementById("bsem2").checked = false;
			document.getElementById("sem2").style.color = "black";
			document.getElementById("sem2").style.backgroundColor = "orange";
		}

	}
}

// Semestre 2 Materia 5
document.getElementById("bs2m5").onclick = function(){
	if(document.getElementById("bs2m5").checked == true){
		document.getElementById("s2m5").style.color = "white";
		document.getElementById("s2m5").style.backgroundColor = "green";
	}
	else{
		document.getElementById("s2m5").style.color = "black";
		document.getElementById("s2m5").style.backgroundColor = "orange";

		if(document.getElementById("bsem2").checked == true){
			document.getElementById("bsem2").checked = false;
			document.getElementById("sem2").style.color = "black";
			document.getElementById("sem2").style.backgroundColor = "orange";
		}

	}
}

// Semestre 2 Materia 6
document.getElementById("bs2m6").onclick = function(){
	if(document.getElementById("bs2m6").checked == true){
		document.getElementById("s2m6").style.color = "white";
		document.getElementById("s2m6").style.backgroundColor = "green";
	}
	else{
		document.getElementById("s2m6").style.color = "black";
		document.getElementById("s2m6").style.backgroundColor = "orange";
		
		if(document.getElementById("bsem2").checked == true){
			document.getElementById("bsem2").checked = false;
			document.getElementById("sem2").style.color = "black";
			document.getElementById("sem2").style.backgroundColor = "orange";
		}

	}
}