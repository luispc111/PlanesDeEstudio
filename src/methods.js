var barWidthGreen = 0;
var barWidthBlue = 0;
var barWidthOrange = 99.75;
var barWidthPurple = 0;

var materia = 1.75;

var color = '#439630';
var green = '#439630';
var blue = "#2653AD";
var orange = "#BF7913";
var purple = "#633B8D";

var colorRGB = "rgb(67, 150, 48)";
var greenRGB = "rgb(67, 150, 48)";
var blueRGB = "rgb(38, 83, 173)";
var orangeRGB = "rgb(191, 121, 19)";
var purpleRGB = "rgb(99, 59, 141)";

function sendMethodsJS(cantMaterias){
	
	var materia = 99.75 / cantMaterias;
	var materia = materia.toFixed(2);
	var barWidthOrange = materia*cantMaterias;
	document.getElementById("myBarOrange").style.width = barWidthOrange + '%';

	console.log(cantMaterias);
	console.log(materia);
	console.log(barWidthOrange);
}

const isOnId = (path,id) => path.some(element => element.id === id);

document.addEventListener('click', function(e) {
	if(isOnId(e.path, 'goback')) {
	  	barWidthGreen = 0;
		barWidthBlue = 0;
		barWidthOrange = 99.75;
		barWidthPurple = 0;

		document.getElementById("myBarOrange").style.width = barWidthOrange + '%';		
		document.getElementById("myBarGreen").style.width = barWidthGreen + '%';
		document.getElementById("myBarBlue").style.width = barWidthBlue + '%';
		document.getElementById("myBarPurple").style.width = barWidthPurple + '%';
	}
});

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
		color = blue;
		colorRGB = blueRGB;
	}	
	else if(newColor == "orange"){
		document.getElementById("btnORANGE").style.border = "3px solid";
		color = orange;
		colorRGB = orangeRGB;
	}
	else if(newColor == "green"){
		document.getElementById("btnGREEN").style.border = "3px solid";
		color = green;
		colorRGB = greenRGB;
	}
	else if(newColor == "purple"){
		document.getElementById("btnPURPLE").style.border = "3px solid";
		color = purple;
		colorRGB = purpleRGB;
	}
	// console.log("change to color " + color);
}

// changes color of course and changes the progress bar
function clickCourse(btn) {
	
	if(color === orange){
		if(btn.style.backgroundColor != orangeRGB){
			barWidthOrange += (materia);
			document.getElementById("myBarOrange").style.width = barWidthOrange + '%';		
			if(btn.style.backgroundColor === greenRGB){
				barWidthGreen -= (materia);
	 			document.getElementById("myBarGreen").style.width = barWidthGreen + '%';
			}
			else if(btn.style.backgroundColor === blueRGB){
				barWidthBlue -= (materia);
	 			document.getElementById("myBarBlue").style.width = barWidthBlue + '%';
			}
			else if(btn.style.backgroundColor === purpleRGB){
				barWidthPurple -= (materia);
	 			document.getElementById("myBarPurple").style.width = barWidthPurple + '%';
			}
			btn.style.backgroundColor = color;
		}
		else{
			// barWidthOrange -= (materia);
			document.getElementById("myBarOrange").style.width = barWidthOrange + '%';
			btn.style.backgroundColor = orange;
		}
	}
	else if(color === blue){
		if(btn.style.backgroundColor != blueRGB){
			barWidthBlue += (materia);
			document.getElementById("myBarBlue").style.width = barWidthBlue + '%';		
			if(btn.style.backgroundColor === greenRGB){
				barWidthGreen -= (materia);
	 			document.getElementById("myBarGreen").style.width = barWidthGreen + '%';
			}
			else if(btn.style.backgroundColor === orangeRGB){
				barWidthOrange -= (materia);
	 			document.getElementById("myBarOrange").style.width = barWidthOrange + '%';
			}
			else if(btn.style.backgroundColor === purpleRGB){
				barWidthPurple -= (materia);
	 			document.getElementById("myBarPurple").style.width = barWidthPurple + '%';
			}
			btn.style.backgroundColor = color;
		}
		else{
			barWidthBlue -= (materia);
			document.getElementById("myBarBlue").style.width = barWidthBlue + '%';
			barWidthOrange += (materia);
			document.getElementById("myBarOrange").style.width = barWidthOrange + '%';
			btn.style.backgroundColor = orange;
		}
	}
	else if(color === green){
		if(btn.style.backgroundColor != greenRGB){
			barWidthGreen += (materia);
			document.getElementById("myBarGreen").style.width = barWidthGreen + '%';		
			if(btn.style.backgroundColor === blueRGB){
				barWidthBlue -= (materia);
	 			document.getElementById("myBarBlue").style.width = barWidthBlue + '%';
			}
			else if(btn.style.backgroundColor === orangeRGB){
				barWidthOrange -= (materia);
	 			document.getElementById("myBarOrange").style.width = barWidthOrange + '%';
			}
			else if(btn.style.backgroundColor === purpleRGB){
				barWidthPurple -= (materia);
	 			document.getElementById("myBarPurple").style.width = barWidthPurple + '%';
			}
			btn.style.backgroundColor = color;
		}
		else{
			barWidthGreen -= (materia);
			document.getElementById("myBarGreen").style.width = barWidthGreen + '%';
			barWidthOrange += (materia);
			document.getElementById("myBarOrange").style.width = barWidthOrange + '%';
			btn.style.backgroundColor = orange;
		}
	}
	else if(color === purple){
		if(btn.style.backgroundColor != purpleRGB){
			barWidthPurple += (materia);
			document.getElementById("myBarPurple").style.width = barWidthPurple + '%';		
			if(btn.style.backgroundColor === blueRGB){
				barWidthBlue -= (materia);
	 			document.getElementById("myBarBlue").style.width = barWidthBlue + '%';
			}
			else if(btn.style.backgroundColor === orangeRGB){
				barWidthOrange -= (materia);
	 			document.getElementById("myBarOrange").style.width = barWidthOrange + '%';
			}
			else if(btn.style.backgroundColor === greenRGB){
				barWidthGreen -= (materia);
	 			document.getElementById("myBarGreen").style.width = barWidthGreen + '%';
			}
			btn.style.backgroundColor = color;
		}
		else{
			barWidthPurple -= (materia);
			document.getElementById("myBarPurple").style.width = barWidthPurple + '%';
			barWidthOrange += (materia);
			document.getElementById("myBarOrange").style.width = barWidthOrange + '%';
			btn.style.backgroundColor = orange;
		}
	}
	
	var bcheck = true;
	if(btn.id[1] === '1' && btn.id[2] === '0'){
		for(var i = 1; i <= 10; i++){
			if(document.getElementById("s10m" + i) != null){
				if(document.getElementById("s10m" + i).style.backgroundColor != colorRGB){
					bcheck = false;
				}
			}
		}	
		if(bcheck){
			document.getElementById("s10").style.backgroundColor = color;
		}
		else{
			document.getElementById("s10").style.backgroundColor = orange;
		}
	}
	else{
		for(var i = 1; i <= 10; i++){
			if(document.getElementById("s" + btn.id[1] + "m" + i) != null){
				if(document.getElementById("s" + btn.id[1] + "m" + i).style.backgroundColor != colorRGB){
					bcheck = false;
				}
			}
		}	
		if(bcheck){
			document.getElementById("s" + btn.id[1]).style.backgroundColor = color;
		}
		else{
			document.getElementById("s" + btn.id[1]).style.backgroundColor = orange;
		}
	}

	console.log(barWidthGreen);	

} 

function CourseCheck(btn) {
	
	if(color === orange){
		if(btn.style.backgroundColor != orangeRGB){
			barWidthOrange += (materia);
			document.getElementById("myBarOrange").style.width = barWidthOrange + '%';		
			if(btn.style.backgroundColor === greenRGB){
				barWidthGreen -= (materia);
	 			document.getElementById("myBarGreen").style.width = barWidthGreen + '%';
			}
			else if(btn.style.backgroundColor === blueRGB){
				barWidthBlue -= (materia);
	 			document.getElementById("myBarBlue").style.width = barWidthBlue + '%';
			}
			else if(btn.style.backgroundColor === purpleRGB){
				barWidthPurple -= (materia);
	 			document.getElementById("myBarPurple").style.width = barWidthPurple + '%';
			}
			btn.style.backgroundColor = color;
		}
		else{
		}
	}
	else if(color === blue){
		if(btn.style.backgroundColor != blueRGB){
			barWidthBlue += (materia);
			document.getElementById("myBarBlue").style.width = barWidthBlue + '%';		
			if(btn.style.backgroundColor === greenRGB){
				barWidthGreen -= (materia);
	 			document.getElementById("myBarGreen").style.width = barWidthGreen + '%';
			}
			else if(btn.style.backgroundColor === orangeRGB){
				barWidthOrange -= (materia);
	 			document.getElementById("myBarOrange").style.width = barWidthOrange + '%';
			}
			else if(btn.style.backgroundColor === purpleRGB){
				barWidthPurple -= (materia);
	 			document.getElementById("myBarPurple").style.width = barWidthPurple + '%';
			}
			btn.style.backgroundColor = color;
		}
		else{
		}
	}
	else if(color === green){
		if(btn.style.backgroundColor != greenRGB){
			barWidthGreen += (materia);
			document.getElementById("myBarGreen").style.width = barWidthGreen + '%';		
			if(btn.style.backgroundColor === blueRGB){
				barWidthBlue -= (materia);
	 			document.getElementById("myBarBlue").style.width = barWidthBlue + '%';
			}
			else if(btn.style.backgroundColor === orangeRGB){
				barWidthOrange -= (materia);
	 			document.getElementById("myBarOrange").style.width = barWidthOrange + '%';
			}
			else if(btn.style.backgroundColor === purpleRGB){
				barWidthPurple -= (materia);
	 			document.getElementById("myBarPurple").style.width = barWidthPurple + '%';
			}
			btn.style.backgroundColor = color;
		}
		else{
		}
	}
	else if(color === purple){
		if(btn.style.backgroundColor != purpleRGB){
			barWidthPurple += (materia);
			document.getElementById("myBarPurple").style.width = barWidthPurple + '%';		
			if(btn.style.backgroundColor === blueRGB){
				barWidthBlue -= (materia);
	 			document.getElementById("myBarBlue").style.width = barWidthBlue + '%';
			}
			else if(btn.style.backgroundColor === orangeRGB){
				barWidthOrange -= (materia);
	 			document.getElementById("myBarOrange").style.width = barWidthOrange + '%';
			}
			else if(btn.style.backgroundColor === greenRGB){
				barWidthGreen -= (materia);
	 			document.getElementById("myBarGreen").style.width = barWidthGreen + '%';
			}
			btn.style.backgroundColor = color;
		}
		else{
		}
	}
} 

function clickSemester(btn) {

	// console.log("clicked on semester btn");
	btn.style.backgroundColor = color;

	if(btn.id[1] === '1' && btn.id[2] === '0'){
		for(var i = 1; i <= 10; i++){
			if(document.getElementById("s10m" + i) != null){
				if(document.getElementById("s10m" + i).style.backgroundColor != color){
					CourseCheck(document.getElementById("s10m" + i));
			 	}
		 	}
		}
	}
	else{
		for(var i = 1; i <= 10; i++){
			if(document.getElementById("s" + btn.id[1] + "m" + i) != null){
				if(document.getElementById("s" + btn.id[1] + "m" + i).style.backgroundColor != color){
					CourseCheck(document.getElementById("s" + btn.id[1] + "m" + i));
			 	}
			}
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