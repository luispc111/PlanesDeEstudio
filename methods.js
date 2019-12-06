var barWidthGreen = 0;
var barWidthBlue = 0;
var barWidthOrange = 100;
var barWidthPurple = 0;
var color = "green";

// change the color of the buttons about to press
function changeColor(newColor){
	color = newColor;
	document.getElementById("btnBLUE").style.border = "1px solid";
	document.getElementById("btnGREEN").style.border = "1px solid";
	document.getElementById("btnORANGE").style.border = "1px solid";
	document.getElementById("btnPURPLE").style.border = "1px solid";
	
	if(newColor == "blue"){
		document.getElementById("btnBLUE").style.border = "3px solid";
	}
	else if(newColor == "orange"){
		document.getElementById("btnORANGE").style.border = "3px solid";
	}
	else if(newColor == "green"){
		document.getElementById("btnGREEN").style.border = "3px solid";
	}
	else if(newColor == "purple"){
		document.getElementById("btnPURPLE").style.border = "3px solid";
	}
}

// changes color of course and changes the progress bar
function clickCourse(btn) {
	if(color == "orange"){
		if(btn.style.backgroundColor != "orange"){
			barWidthOrange += (100/57);
			document.getElementById("myBarOrange").style.width = barWidthOrange + '%';		
			if(btn.style.backgroundColor == "green"){
				barWidthGreen -= (100/57);
	 			document.getElementById("myBarGreen").style.width = barWidthGreen + '%';
			}
			else if(btn.style.backgroundColor == "blue"){
				barWidthBlue -= (100/57);
	 			document.getElementById("myBarBlue").style.width = barWidthBlue + '%';
			}
			else if(btn.style.backgroundColor == "purple"){
				barWidthPurple -= (100/57);
	 			document.getElementById("myBarPurple").style.width = barWidthPurple + '%';
			}
		}
	}
	else if(color == "blue"){
		if(btn.style.backgroundColor != "blue"){
			barWidthBlue += (100/57);
			document.getElementById("myBarBlue").style.width = barWidthBlue + '%';		
			if(btn.style.backgroundColor == "green"){
				barWidthGreen -= (100/57);
	 			document.getElementById("myBarGreen").style.width = barWidthGreen + '%';
			}
			else if(btn.style.backgroundColor == "orange"){
				barWidthOrange -= (100/57);
	 			document.getElementById("myBarOrange").style.width = barWidthOrange + '%';
			}
			else if(btn.style.backgroundColor == "purple"){
				barWidthPurple -= (100/57);
	 			document.getElementById("myBarPurple").style.width = barWidthPurple + '%';
			}
		}
	}
	else if(color == "green"){
		if(btn.style.backgroundColor != "green"){
			barWidthGreen += (100/57);
			document.getElementById("myBarGreen").style.width = barWidthGreen + '%';		
			if(btn.style.backgroundColor == "blue"){
				barWidthBlue -= (100/57);
	 			document.getElementById("myBarBlue").style.width = barWidthBlue + '%';
			}
			else if(btn.style.backgroundColor == "orange"){
				barWidthOrange -= (100/57);
	 			document.getElementById("myBarOrange").style.width = barWidthOrange + '%';
			}
			else if(btn.style.backgroundColor == "purple"){
				barWidthPurple -= (100/57);
	 			document.getElementById("myBarPurple").style.width = barWidthPurple + '%';
			}
		}
	}
	else if(color == "purple"){
		if(btn.style.backgroundColor != "purple"){
			barWidthPurple += (100/57);
			document.getElementById("myBarPurple").style.width = barWidthPurple + '%';		
			if(btn.style.backgroundColor == "blue"){
				barWidthBlue -= (100/57);
	 			document.getElementById("myBarBlue").style.width = barWidthBlue + '%';
			}
			else if(btn.style.backgroundColor == "orange"){
				barWidthOrange -= (100/57);
	 			document.getElementById("myBarOrange").style.width = barWidthOrange + '%';
			}
			else if(btn.style.backgroundColor == "green"){
				barWidthGreen -= (100/57);
	 			document.getElementById("myBarGreen").style.width = barWidthGreen + '%';
			}
		}
	}

	btn.style.backgroundColor = color;

	// if you check a class, check if the semester button needs to turn green
	// if(document.getElementById("s" + btn.id[1]).style.backgroundColor == "orange"){

	// 	bcheck = true;
	// 	if(btn.id[1] == '1' || btn.id[1] == '8' || btn.id[1] == '9'){
	// 		for(var i=1; i<=7; i++){
	// 			if(document.getElementById("s" + btn.id[1] + "m" + i).style.backgroundColor == "orange"){
	// 				bcheck = false;
	// 				break;
	// 			}
	// 		}
	// 		if(bcheck == true){
	// 			document.getElementById("s" + btn.id[1]).style.color = "white";
	// 			document.getElementById("s" + btn.id[1]).style.backgroundColor = color;
	// 		}
	// 	}
	// 	else{
	// 		for(var i=1; i<=6; i++){
	// 			if(document.getElementById("s" + btn.id[1] + "m" + i).style.backgroundColor == "orange"){
	// 				bcheck = false;
	// 				break;
	// 			}
	// 		}
	// 		if(bcheck == true){
	// 			document.getElementById("s" + btn.id[1]).style.color = "white";
	// 			document.getElementById("s" + btn.id[1]).style.backgroundColor = color;
	// 		}
	// 	}
	// }
} 

function clickSemester(btn) {

		btn.style.backgroundColor = color;

		// 1 to 6 course boxes
		for(var i = 1; i <= 6; i++){
			if(document.getElementById("s" + btn.id[1] + "m" + i).style.backgroundColor != color){
				//clickCourse(btn);
				clickCourse(document.getElementById("s" + btn.id[1] + "m" + i));
		 	}
		 	//document.getElementById("s" + btn.id[1] + "m" + i).style.backgroundColor = color;
		 	
		}

		// 7th box for semesters with 7 classes
		if(btn.id[1] == '1' || btn.id[1] == '8' || btn.id[1] == '9'){
			if(document.getElementById("s" + btn.id[1] + "m7").style.backgroundColor == color){
				//clickCourse(btn);
				clickCourse(document.getElementById("s" + btn.id[1] + "m" + i));
		 	}
		 	//document.getElementById("s" + btn.id[1] + "m7").style.backgroundColor = color;
		}

	// change semester box
	// if (btn.style.backgroundColor == "orange") {
	// 	btn.style.backgroundColor = color;

	// 	// 1 to 6 course boxes
	// 	for(var i = 1; i <= 6; i++){
	// 		if(document.getElementById("s" + btn.id[1] + "m" + i).style.backgroundColor == "orange"){
	// 			document.getElementById("s" + btn.id[1] + "m" + i).style.backgroundColor = color;
	// 			moveOneMore(btn);
	// 		}
	// 	}

	// 	// 7th box for semesters with 7 classes
	// 	if(btn.id[1] == '1' || btn.id[1] == '8' || btn.id[1] == '9'){
	// 		if(document.getElementById("s" + btn.id[1] + "m7").style.backgroundColor == "orange"){
	// 			document.getElementById("s" + btn.id[1] + "m7").style.backgroundColor = color;
	// 			moveOneMore(btn);
	// 		}
	// 	}
	// } 
	// else {

	// 	btn.style.backgroundColor = "orange";
	// 	btn.style.color = "black";

	// 	// 1 to 6 course boxes
	// 	for(var i = 1; i <= 6; i++){
	// 		if(document.getElementById("s" + btn.id[1] + "m" + i).style.backgroundColor == color){
	// 			document.getElementById("s" + btn.id[1] + "m" + i).style.color = "black";
	// 			document.getElementById("s" + btn.id[1] + "m" + i).style.backgroundColor = "orange";
	// 			moveOneLess();
	// 		}
	// 	}

	// 	// 7th box for semesters with 7 classes
	// 	if(btn.id[1] == '1' || btn.id[1] == '8' || btn.id[1] == '9'){
	// 		if(document.getElementById("s" + btn.id[1] + "m7").style.backgroundColor == color){
	// 			document.getElementById("s" + btn.id[1] + "m7").style.color = "black";
	// 			document.getElementById("s" + btn.id[1] + "m7").style.backgroundColor = "orange";
	// 			moveOneLess();
	// 		}
	// 	}
	// }
}



