var barWidth = 0;
var color = "green";

//console.log(color);

// change the color of the buttons about to press
function changeColor(newColor){
	color = newColor;
}

// add an extra "course" to the bar
function moveOneMore() {
 	barWidth += (100/57);
 	document.getElementById("myBar").style.width = barWidth + '%';
}

// remove a "course" from the bar
function moveOneLess() {
 	barWidth -= (100/57);
 	document.getElementById("myBar").style.width = barWidth + '%';

 	if(barWidth < 0){
		document.getElementById("myBar").style.width = "0%";
 	}
}

// function test(btn) {
// 	if (btn.style.backgroundColor == "orange") {
// 		btn.style.backgroundColor = color;
// 	} 
// 	else {
// 		btn.style.backgroundColor = "orange";
// 	}
// }

function clickCourse(btn) {
	if (btn.style.backgroundColor == "orange") {

		btn.style.backgroundColor = color;
		btn.style.color = "white";
		moveOneMore();

		// if you check a class, check if the semester button needs to turn green
		if(document.getElementById("s" + btn.id[1]).style.backgroundColor == "orange"){

			bcheck = true;
			if(btn.id[1] == '1' || btn.id[1] == '8' || btn.id[1] == '9'){
				for(var i=1; i<=7; i++){
					if(document.getElementById("s" + btn.id[1] + "m" + i).style.backgroundColor == "orange"){
						bcheck = false;
						break;
					}
				}
				if(bcheck == true){
					document.getElementById("s" + btn.id[1]).style.color = "white";
					document.getElementById("s" + btn.id[1]).style.backgroundColor = color;
				}
			}
			else{
				for(var i=1; i<=6; i++){
					if(document.getElementById("s" + btn.id[1] + "m" + i).style.backgroundColor == "orange"){
						bcheck = false;
						break;
					}
				}
				if(bcheck == true){
					document.getElementById("s" + btn.id[1]).style.color = "white";
					document.getElementById("s" + btn.id[1]).style.backgroundColor = color;
				}
			}
		}
	} 
	else {

		// quitarle a la barra de progreso
		moveOneLess();

		// change atributes of that class
		btn.style.color = "black";
		btn.style.backgroundColor = "orange";

		// if you uncheck a class, check if the semester button needs to be unchecked
		if(document.getElementById("s" + btn.id[1]).style.backgroundColor != "orange"){
			document.getElementById("s" + btn.id[1]).style.color = "black";
			document.getElementById("s" + btn.id[1]).style.backgroundColor = "orange";
		}
	}
}

function clickSemester(btn) {

	// change semester box
	if (btn.style.backgroundColor == "orange") {
		
		btn.style.backgroundColor = color;
		btn.style.color = "white";

		// 1 to 6 course boxes
		for(var i = 1; i <= 6; i++){
			if(document.getElementById("s" + btn.id[1] + "m" + i).style.backgroundColor == "orange"){
				document.getElementById("s" + btn.id[1] + "m" + i).style.color = "white";
				document.getElementById("s" + btn.id[1] + "m" + i).style.backgroundColor = color;
				moveOneMore();
			}
		}

		// 7th box for semesters with 7 classes
		if(btn.id[1] == '1' || btn.id[1] == '8' || btn.id[1] == '9'){
			if(document.getElementById("s" + btn.id[1] + "m7").style.backgroundColor == "orange"){
				document.getElementById("s" + btn.id[1] + "m7").style.color = "white";
				document.getElementById("s" + btn.id[1] + "m7").style.backgroundColor = color;
				moveOneMore();
			}
		}
	} 
	else {

		btn.style.backgroundColor = "orange";
		btn.style.color = "black";

		// 1 to 6 course boxes
		for(var i = 1; i <= 6; i++){
			if(document.getElementById("s" + btn.id[1] + "m" + i).style.backgroundColor == color){
				document.getElementById("s" + btn.id[1] + "m" + i).style.color = "black";
				document.getElementById("s" + btn.id[1] + "m" + i).style.backgroundColor = "orange";
				moveOneLess();
			}
		}

		// 7th box for semesters with 7 classes
		if(btn.id[1] == '1' || btn.id[1] == '8' || btn.id[1] == '9'){
			if(document.getElementById("s" + btn.id[1] + "m7").style.backgroundColor == color){
				document.getElementById("s" + btn.id[1] + "m7").style.color = "black";
				document.getElementById("s" + btn.id[1] + "m7").style.backgroundColor = "orange";
				moveOneLess();
			}
		}
	}
}


