var barWidthGreen = 0;
var barWidthBlue = 0;
var barWidthOrange = 99.75;
var barWidthPurple = 0;
var green = '#439630';
var color = "green";

$("button").on("click", (event) => {
	event.preventDefault();
})

// change the color of the buttons about to press
function changeColor(newColor){

	// color = newColor;
	document.getElementById("btnBLUE").style.border = "1px solid";
	document.getElementById("btnGREEN").style.border = "1px solid";
	document.getElementById("btnORANGE").style.border = "1px solid";
	document.getElementById("btnPURPLE").style.border = "1px solid";
	
	if(newColor == "blue"){
		document.getElementById("btnBLUE").style.border = "3px solid";
		color = newColor;
	}	
	else if(newColor == "orange"){
		document.getElementById("btnORANGE").style.border = "3px solid";
		color = newColor;
	}
	else if(newColor == "green"){
		document.getElementById("btnGREEN").style.border = "3px solid";
		color = green;
	}
	else if(newColor == "purple"){
		document.getElementById("btnPURPLE").style.border = "3px solid";
		color = newColor;
	}
}

// changes color of course and changes the progress bar
function clickCourse(btn) {
	
	if(color == "orange"){
		if(btn.style.backgroundColor != "orange"){
			barWidthOrange += (1.75);
			document.getElementById("myBarOrange").style.width = barWidthOrange + '%';		
			if(btn.style.backgroundColor == "green"){
				barWidthGreen -= (1.75);
	 			document.getElementById("myBarGreen").style.width = barWidthGreen + '%';
			}
			else if(btn.style.backgroundColor == "blue"){
				barWidthBlue -= (1.75);
	 			document.getElementById("myBarBlue").style.width = barWidthBlue + '%';
			}
			else if(btn.style.backgroundColor == "purple"){
				barWidthPurple -= (1.75);
	 			document.getElementById("myBarPurple").style.width = barWidthPurple + '%';
			}
		}
	}
	else if(color == "blue"){
		if(btn.style.backgroundColor != "blue"){
			barWidthBlue += (1.75);
			document.getElementById("myBarBlue").style.width = barWidthBlue + '%';		
			if(btn.style.backgroundColor == "green"){
				barWidthGreen -= (1.75);
	 			document.getElementById("myBarGreen").style.width = barWidthGreen + '%';
			}
			else if(btn.style.backgroundColor == "orange"){
				barWidthOrange -= (1.75);
	 			document.getElementById("myBarOrange").style.width = barWidthOrange + '%';
			}
			else if(btn.style.backgroundColor == "purple"){
				barWidthPurple -= (1.75);
	 			document.getElementById("myBarPurple").style.width = barWidthPurple + '%';
			}
		}
	}
	else if(color == "green"){
		if(btn.style.backgroundColor != "green"){
			barWidthGreen += (1.75);
			document.getElementById("myBarGreen").style.width = barWidthGreen + '%';		
			if(btn.style.backgroundColor == "blue"){
				barWidthBlue -= (1.75);
	 			document.getElementById("myBarBlue").style.width = barWidthBlue + '%';
			}
			else if(btn.style.backgroundColor == "orange"){
				barWidthOrange -= (1.75);
	 			document.getElementById("myBarOrange").style.width = barWidthOrange + '%';
			}
			else if(btn.style.backgroundColor == "purple"){
				barWidthPurple -= (1.75);
	 			document.getElementById("myBarPurple").style.width = barWidthPurple + '%';
			}
		}
	}
	else if(color == "purple"){
		if(btn.style.backgroundColor != "purple"){
			barWidthPurple += (1.75);
			document.getElementById("myBarPurple").style.width = barWidthPurple + '%';		
			if(btn.style.backgroundColor == "blue"){
				barWidthBlue -= (1.75);
	 			document.getElementById("myBarBlue").style.width = barWidthBlue + '%';
			}
			else if(btn.style.backgroundColor == "orange"){
				barWidthOrange -= (1.75);
	 			document.getElementById("myBarOrange").style.width = barWidthOrange + '%';
			}
			else if(btn.style.backgroundColor == "green"){
				barWidthGreen -= (1.75);
	 			document.getElementById("myBarGreen").style.width = barWidthGreen + '%';
			}
		}
	}

	btn.style.backgroundColor = color;

	// if you check a class, check if the semester button needs to turn green
	var bcheck = true;
	for(var i=1; i<=6; i++){
		if(document.getElementById("s" + btn.id[1] + "m" + i).style.backgroundColor != color){
			bcheck = false;
		}
	}

	if(btn.id[1] == '1' || btn.id[1] == '8' || btn.id[1] == '9'){
		if(document.getElementById("s" + btn.id[1] + "m7").style.backgroundColor != color){
			bcheck = false;
		}
	}

	if(bcheck){
		document.getElementById("s" + btn.id[1]).style.backgroundColor = color;
	}
	else{
		document.getElementById("s" + btn.id[1]).style.backgroundColor = "orange";
	}
} 


function clickSemester(btn) {

	btn.style.backgroundColor = color;

	// 1 to 6 course boxes
	for(var i = 1; i <= 6; i++){
		if(document.getElementById("s" + btn.id[1] + "m" + i).style.backgroundColor != color){
			clickCourse(document.getElementById("s" + btn.id[1] + "m" + i));
	 	}
	}

	// 7th box for semesters with 7 classes
	if(btn.id[1] == '1' || btn.id[1] == '8' || btn.id[1] == '9'){
		if(document.getElementById("s" + btn.id[1] + "m7").style.backgroundColor != color){
			clickCourse(document.getElementById("s" + btn.id[1] + "m7"));
	 	}
	}
}

document.addEventListener("keypress", function onEvent(event) {
    if (event.key === "1") {
        changeColor("orange");
    }
    else if (event.key === "2") {
        changeColor("blue");
    }
    else if (event.key === "3") {
        changeColor("green");
    }
    else if (event.key === "4") {
        changeColor("purple");
    }
});