//test alerts
alert("sup good boi");

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

// Semestre 1 Materia 1
document.getElementById("bs1m1").onclick = function(){
	if(document.getElementById("bs1m1").checked == true){
		document.getElementById("s1m1").style.color = "white";
		document.getElementById("s1m1").style.backgroundColor = "green";
	}
	else{
		document.getElementById("s1m1").style.color = "black";
		document.getElementById("s1m1").style.backgroundColor = "orange";
		
		if(document.getElementById("bsem1").checked == true){
			document.getElementById("bsem1").checked = false;
			document.getElementById("sem1").style.color = "black";
			document.getElementById("sem1").style.backgroundColor = "orange";
		}
	}
}

// Semestre 1 Materia 2
document.getElementById("bs1m2").onclick = function(){
	if(document.getElementById("bs1m2").checked == true){
		document.getElementById("s1m2").style.color = "white";
		document.getElementById("s1m2").style.backgroundColor = "green";
	}
	else{
		document.getElementById("s1m2").style.color = "black";
		document.getElementById("s1m2").style.backgroundColor = "orange";

		if(document.getElementById("bsem1").checked == true){
			document.getElementById("bsem1").checked = false;
			document.getElementById("sem1").style.color = "black";
			document.getElementById("sem1").style.backgroundColor = "orange";
		}
	}
}

// Semestre 1 Materia 3
document.getElementById("bs1m3").onclick = function(){
	if(document.getElementById("bs1m3").checked == true){
		document.getElementById("s1m3").style.color = "white";
		document.getElementById("s1m3").style.backgroundColor = "green";
	}
	else{
		document.getElementById("s1m3").style.color = "black";
		document.getElementById("s1m3").style.backgroundColor = "orange";

		if(document.getElementById("bsem1").checked == true){
			document.getElementById("bsem1").checked = false;
			document.getElementById("sem1").style.color = "black";
			document.getElementById("sem1").style.backgroundColor = "orange";
		}

	}
}

// Semestre 1 Materia 4
document.getElementById("bs1m4").onclick = function(){
	if(document.getElementById("bs1m4").checked == true){
		document.getElementById("s1m4").style.color = "white";
		document.getElementById("s1m4").style.backgroundColor = "green";
	}
	else{
		document.getElementById("s1m4").style.color = "black";
		document.getElementById("s1m4").style.backgroundColor = "orange";

		if(document.getElementById("bsem1").checked == true){
			document.getElementById("bsem1").checked = false;
			document.getElementById("sem1").style.color = "black";
			document.getElementById("sem1").style.backgroundColor = "orange";
		}

	}
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