let barWidthGreen = 0;
let barWidthBlue = 0;
let barWidthOrange = 99.75;
let barWidthPurple = 0;

let barWidths = {
	Green: 0,
	Blue: 0,
	Orange: 99.75,
	Purple: 0
}

let materia = 1.75;

let currentColor = 1;
let nameColors = [
	"Orange", "Green", "Blue", "Purple"
]

let color = '#439630';
let green = '#439630';
let blue = "#2653AD";
let orange = "#BF7913";
let purple = "#633B8D";

let colorsHex = {
	Green: '#439630',
	Blue: "#2653AD",
	Orange: "#BF7913",
	Purple: "#633B8D",
}

let colorRGB = "rgb(67, 150, 48)";
let greenRGB = "rgb(67, 150, 48)";
let blueRGB = "rgb(38, 83, 173)";
let orangeRGB = "rgb(191, 121, 19)";
let purpleRGB = "rgb(99, 59, 141)";

let colorsRGB = {
	Green: "rgb(67, 150, 48)",
	Blue: "rgb(38, 83, 173)",
	Orange: "rgb(191, 121, 19)",
	Purple: "rgb(99, 59, 141)"
}


function sendMethodsJS(cantMaterias){
	materia = 99.75 / cantMaterias;
	// materia = materia.toFixed(2);
	barWidths.Orange = materia*cantMaterias;
	document.getElementById("myBarOrange").style.width = barWidths.Orange + '%';
}

// const isOnId = (path,id) => path.some(element => element.id === id);

// document.addEventListener('click', function(e) {
// 	if(isOnId(e.path, 'goback')) {
// 	  	barWidthGreen = 0;
// 		barWidthBlue = 0;
// 		barWidthOrange = 99.75;
// 		barWidthPurple = 0;

// 		document.getElementById("myBarOrange").style.width = barWidthOrange + '%';		
// 		document.getElementById("myBarGreen").style.width = barWidthGreen + '%';
// 		document.getElementById("myBarBlue").style.width = barWidthBlue + '%';
// 		document.getElementById("myBarPurple").style.width = barWidthPurple + '%';

// 		progressBarRefresh();
// 	}
// });

// create buttons to change color
for (let i = 0; i < nameColors.length; i++) {
	console.log("new color btn");
	$(".colorBtns").append(`
	<button id="btn${nameColors[i]}" class="colorBtn" value="${nameColors[i]}"><kbd class="key">${i+1}</kbd></button>
	`);
}

$(".colorBtn").on("click", (event) => {
	event.preventDefault();

	// checks if the event is the color button itself and not the key things because the event listener is added to both nodes
	if (event.target.className == "colorBtn") {
		// changes the border of all buttons to 1px
		for (let i = 0; i < nameColors.length; i++) {
			document.getElementById("btn" + nameColors[i]).style.border = "1px solid";
		}
	
		// changes the border of the selected button to 3px, signaling it was selected
		// also it saves the colorHex and colorRBG of the button selected
		document.getElementById("btn" + event.target.value).style.border = "3px solid";
		color = colorsHex[event.target.value];
		colorRGB = colorsRGB[event.target.value];

		for (let i = 0; i < nameColors.length; i++) {
			if (event.target.value == nameColors[i]) {
				currentColor = i;
			}
		}
	}
})

$(".key").on("click", (event) => {
	event.preventDefault();
	changeColor(event.target);
})

function changeColor(target) {
	// changes the border of all buttons to 1px
	for (let i = 0; i < nameColors.length; i++) {
		document.getElementById("btn" + nameColors[i]).style.border = "1px solid";
	}

	// changes the border of the selected button to 3px, signaling it was selected
	// also it saves the colorHex and colorRBG of the button selected
	target.parentNode.style.border = "3px solid";
	color = colorsHex[target.parentNode.value];
	colorRGB = colorsRGB[target.parentNode.value];

	for (let i = 0; i < nameColors.length; i++) {
		if (target.parentNode.value == nameColors[i]) {
			currentColor = i;
		}
	}
}

// change the color of the buttons about to press
// function changeColor(newColor){

// 	for (let i = 0; i < nameColors.length; i++) {
// 		document.getElementById("btn" + nameColors[i]).style.border = "1px solid";
// 	}

// 	// color = newColor;
// 	document.getElementById("btnBLUE").style.border = "1px solid";
// 	document.getElementById("btnGREEN").style.border = "1px solid";
// 	document.getElementById("btnORANGE").style.border = "1px solid";
// 	document.getElementById("btnPURPLE").style.border = "1px solid";

// 	document.getElementById("btn" + newColor).style.border = "3px solid";
// 	color = colorsHex[newColor];
// 	colorRGB = colorsRGB[newColor];
	
// 	if(newColor == "blue"){
// 		document.getElementById("btnBLUE").style.border = "3px solid";
// 		color = blue;
// 		colorRGB = blueRGB;
// 	}	
// 	else if(newColor == "orange"){
// 		document.getElementById("btnORANGE").style.border = "3px solid";
// 		color = orange;
// 		colorRGB = orangeRGB;
// 	}
// 	else if(newColor == "green"){
// 		document.getElementById("btnGREEN").style.border = "3px solid";
// 		color = green;
// 		colorRGB = greenRGB;
// 	}
// 	else if(newColor == "purple"){
// 		document.getElementById("btnPURPLE").style.border = "3px solid";
// 		color = purple;
// 		colorRGB = purpleRGB;
// 	}
// 	// console.log("change to color " + color);
// }

// changes color of course and changes the progress bar

function materiasBtns() {
	$(".materia").on("click", (event) => {
		event.preventDefault();

		// console.log(event.target.className);

		if (event.target.className == "materia") {
			let rgb = event.target.style.backgroundColor;
			let pos;
			for (let i = 0; i < nameColors.length; i++) {
				if (rgb == colorsRGB[nameColors[i]]) {
					pos = i;
				}
			}

			if (rgb != colorsRGB[nameColors[currentColor]]) {

				barWidths[nameColors[currentColor]] += materia;
				document.querySelector("#myBar" + nameColors[currentColor]).style.width = barWidths[nameColors[currentColor]] + '%';
				barWidths[nameColors[pos]] -= materia;
				document.querySelector("#myBar" + nameColors[pos]).style.width = barWidths[nameColors[pos]] + '%';

				event.target.style.backgroundColor = colorsRGB[nameColors[currentColor]];
			} else{

				// edge case para cuando se pica dos veces

				// barWidthOrange -= (materia);
				// document.getElementById("myBarOrange").style.width = barWidths.Orange + '%';
				// event.target.style.backgroundColor = orange;
			}

			let bcheck = true;

			if (event.target.id.length == 5) {

			} else {

			}
			// if(btn.id[1] === '1' && btn.id[2] === '0'){
			// 	for(let i = 1; i <= 10; i++){
			// 		if(document.getElementById("s10m" + i) != null){
			// 			if(document.getElementById("s10m" + i).style.backgroundColor != colorRGB){
			// 				bcheck = false;
			// 			}
			// 		}
			// 	}	
			// 	if(bcheck){
			// 		document.getElementById("s10").style.backgroundColor = color;
			// 	}
			// 	else{
			// 		document.getElementById("s10").style.backgroundColor = orange;
			// 	}
			// }
			// else{
			// 	for(let i = 1; i <= 10; i++){
			// 		if(document.getElementById("s" + btn.id[1] + "m" + i) != null){
			// 			if(document.getElementById("s" + btn.id[1] + "m" + i).style.backgroundColor != colorRGB){
			// 				bcheck = false;
			// 			}
			// 		}
			// 	}	
			// 	if(bcheck){
			// 		document.getElementById("s" + btn.id[1]).style.backgroundColor = color;
			// 	}
			// 	else{
			// 		document.getElementById("s" + btn.id[1]).style.backgroundColor = orange;
			// 	}
			// }
			
			progressBarRefresh();
		}
	});

	$(".labelMateria").on("click", (event) => {
		event.preventDefault();

		console.log(event.target.parentNode);

		if (event.target.parentNode.className == "materia") {
			let rgb = event.target.parentNode.style.backgroundColor;
			let pos;
			for (let i = 0; i < nameColors.length; i++) {
				if (rgb == colorsRGB[nameColors[i]]) {
					pos = i;
				}
			}

			if (rgb != colorsRGB[nameColors[currentColor]]) {

				barWidths[nameColors[currentColor]] += materia;
				document.querySelector("#myBar" + nameColors[currentColor]).style.width = barWidths[nameColors[currentColor]] + '%';
				barWidths[nameColors[pos]] -= materia;
				document.querySelector("#myBar" + nameColors[pos]).style.width = barWidths[nameColors[pos]] + '%';

				event.target.parentNode.style.backgroundColor = colorsRGB[nameColors[currentColor]];
			} else{

				// edge case para cuando se pica dos veces

				// barWidthOrange -= (materia);
				// document.getElementById("myBarOrange").style.width = barWidths.Orange + '%';
				// event.target.style.backgroundColor = orange;
			}

			let bcheck = true;
			if (event.target.parentNode.id.length == 5) {

			} else {

			}
			// if(btn.id[1] === '1' && btn.id[2] === '0'){
			// 	for(let i = 1; i <= 10; i++){
			// 		if(document.getElementById("s10m" + i) != null){
			// 			if(document.getElementById("s10m" + i).style.backgroundColor != colorRGB){
			// 				bcheck = false;
			// 			}
			// 		}
			// 	}	
			// 	if(bcheck){
			// 		document.getElementById("s10").style.backgroundColor = color;
			// 	}
			// 	else{
			// 		document.getElementById("s10").style.backgroundColor = orange;
			// 	}
			// }
			// else{
			// 	for(let i = 1; i <= 10; i++){
			// 		if(document.getElementById("s" + btn.id[1] + "m" + i) != null){
			// 			if(document.getElementById("s" + btn.id[1] + "m" + i).style.backgroundColor != colorRGB){
			// 				bcheck = false;
			// 			}
			// 		}
			// 	}	
			// 	if(bcheck){
			// 		document.getElementById("s" + btn.id[1]).style.backgroundColor = color;
			// 	}
			// 	else{
			// 		document.getElementById("s" + btn.id[1]).style.backgroundColor = orange;
			// 	}
			// }
			
			progressBarRefresh();
		}
	});

	$(".semestre").on("click", (event) => {
		event.preventDefault();
	
		console.log("semestre");
	
		// if(document.getElementById("s10m" + i) != null)
		// 	if(document.getElementById("s10m" + i).style.backgroundColor != color)

		if (event.target.className == "semestre") {
			let extra = ((event.target.id.length == 5) ? "s10m" : `s${event.target.id[1]}m`);
			console.log("extra", extra);
			event.target.style.backgroundColor = colorsRGB[nameColors[currentColor]];
			for (let i = 1; i <= maxLength; i++) {
		
				let mat = document.getElementById(extra + i);
				
				console.log("mat", mat);
				// console.log("back", mat.style.backgroundColor);
				
				if (mat != null && mat.style.backgroundColor != color && event.target.className == "semestre") {
					let rgb = mat.style.backgroundColor;
					let pos;
					for (let i = 0; i < nameColors.length; i++) {
						if (rgb == colorsRGB[nameColors[i]]) {
							pos = i;
						}
					}
			
					if (rgb != colorsRGB[nameColors[currentColor]]) {
			
						barWidths[nameColors[currentColor]] += materia;
						document.querySelector("#myBar" + nameColors[currentColor]).style.width = barWidths[nameColors[currentColor]] + '%';
						barWidths[nameColors[pos]] -= materia;
						document.querySelector("#myBar" + nameColors[pos]).style.width = barWidths[nameColors[pos]] + '%';
			
						mat.style.backgroundColor = colorsRGB[nameColors[currentColor]];
					} else {
						
					}
					
					progressBarRefresh();
				}
			}
		}
	});

	$(".labelSemestre").on("click", (event) => {
		event.preventDefault();

		let extra = ((event.target.parentNode.id.length == 5) ? "s10m" : `s${event.target.parentNode.id[1]}m`);
		event.target.parentNode.style.backgroundColor = colorsRGB[nameColors[currentColor]];
		for (let i = 1; i <= maxLength; i++) {
	
			let mat = document.getElementById(extra + i);
			
			console.log("mat", mat);
			// console.log("back", mat.style.backgroundColor);
			
			if (mat != null && mat.style.backgroundColor != color) {
				let rgb = mat.style.backgroundColor;
				let pos;
				for (let i = 0; i < nameColors.length; i++) {
					if (rgb == colorsRGB[nameColors[i]]) {
						pos = i;
					}
				}
		
				if (rgb != colorsRGB[nameColors[currentColor]]) {
		
					barWidths[nameColors[currentColor]] += materia;
					document.querySelector("#myBar" + nameColors[currentColor]).style.width = barWidths[nameColors[currentColor]] + '%';
					barWidths[nameColors[pos]] -= materia;
					document.querySelector("#myBar" + nameColors[pos]).style.width = barWidths[nameColors[pos]] + '%';
		
					mat.style.backgroundColor = colorsRGB[nameColors[currentColor]];
				} else {
					
				}
				
				progressBarRefresh();
			}
		}
	});
}

// function clickCourse(btn) {

// 	console.log("course");
	
	// if(color === orange){
	// 	if(btn.style.backgroundColor != orangeRGB){
	// 		barWidthOrange += (materia);
	// 		document.getElementById("myBarOrange").style.width = barWidthOrange + '%';		
	// 		if(btn.style.backgroundColor === greenRGB){
	// 			barWidthGreen -= (materia);
	//  			document.getElementById("myBarGreen").style.width = barWidthGreen + '%';
	// 		}
	// 		else if(btn.style.backgroundColor === blueRGB){
	// 			barWidthBlue -= (materia);
	//  			document.getElementById("myBarBlue").style.width = barWidthBlue + '%';
	// 		}
	// 		else if(btn.style.backgroundColor === purpleRGB){
	// 			barWidthPurple -= (materia);
	//  			document.getElementById("myBarPurple").style.width = barWidthPurple + '%';
	// 		}
	// 		btn.style.backgroundColor = color;
	// 	}
	// 	else{
	// 		// barWidthOrange -= (materia);
	// 		document.getElementById("myBarOrange").style.width = barWidthOrange + '%';
	// 		btn.style.backgroundColor = orange;
	// 	}
	// }
	// else if(color === blue){
	// 	if(btn.style.backgroundColor != blueRGB){
	// 		barWidthBlue += (materia);
	// 		document.getElementById("myBarBlue").style.width = barWidthBlue + '%';		
	// 		if(btn.style.backgroundColor === greenRGB){
	// 			barWidthGreen -= (materia);
	//  			document.getElementById("myBarGreen").style.width = barWidthGreen + '%';
	// 		}
	// 		else if(btn.style.backgroundColor === orangeRGB){
	// 			barWidthOrange -= (materia);
	//  			document.getElementById("myBarOrange").style.width = barWidthOrange + '%';
	// 		}
	// 		else if(btn.style.backgroundColor === purpleRGB){
	// 			barWidthPurple -= (materia);
	//  			document.getElementById("myBarPurple").style.width = barWidthPurple + '%';
	// 		}
	// 		btn.style.backgroundColor = color;
	// 	}
	// 	else{
	// 		barWidthBlue -= (materia);
	// 		document.getElementById("myBarBlue").style.width = barWidthBlue + '%';
	// 		barWidthOrange += (materia);
	// 		document.getElementById("myBarOrange").style.width = barWidthOrange + '%';
	// 		btn.style.backgroundColor = orange;
	// 	}
	// }
	// else if(color === green){
	// 	if(btn.style.backgroundColor != greenRGB){
	// 		barWidthGreen += (materia);
	// 		document.getElementById("myBarGreen").style.width = barWidthGreen + '%';		
	// 		if(btn.style.backgroundColor === blueRGB){
	// 			barWidthBlue -= (materia);
	//  			document.getElementById("myBarBlue").style.width = barWidthBlue + '%';
	// 		}
	// 		else if(btn.style.backgroundColor === orangeRGB){
	// 			barWidthOrange -= (materia);
	//  			document.getElementById("myBarOrange").style.width = barWidthOrange + '%';
	// 		}
	// 		else if(btn.style.backgroundColor === purpleRGB){
	// 			barWidthPurple -= (materia);
	//  			document.getElementById("myBarPurple").style.width = barWidthPurple + '%';
	// 		}
	// 		btn.style.backgroundColor = color;
	// 	}
	// 	else{
	// 		barWidthGreen -= (materia);
	// 		document.getElementById("myBarGreen").style.width = barWidthGreen + '%';
	// 		barWidthOrange += (materia);
	// 		document.getElementById("myBarOrange").style.width = barWidthOrange + '%';
	// 		btn.style.backgroundColor = orange;
	// 	}
	// }
	// else if(color === purple){
	// 	if(btn.style.backgroundColor != purpleRGB){
	// 		barWidthPurple += (materia);
	// 		document.getElementById("myBarPurple").style.width = barWidthPurple + '%';		
	// 		if(btn.style.backgroundColor === blueRGB){
	// 			barWidthBlue -= (materia);
	//  			document.getElementById("myBarBlue").style.width = barWidthBlue + '%';
	// 		}
	// 		else if(btn.style.backgroundColor === orangeRGB){
	// 			barWidthOrange -= (materia);
	//  			document.getElementById("myBarOrange").style.width = barWidthOrange + '%';
	// 		}
	// 		else if(btn.style.backgroundColor === greenRGB){
	// 			barWidthGreen -= (materia);
	//  			document.getElementById("myBarGreen").style.width = barWidthGreen + '%';
	// 		}
	// 		btn.style.backgroundColor = color;
	// 	}
	// 	else{
	// 		barWidthPurple -= (materia);
	// 		document.getElementById("myBarPurple").style.width = barWidthPurple + '%';
	// 		barWidthOrange += (materia);
	// 		document.getElementById("myBarOrange").style.width = barWidthOrange + '%';
	// 		btn.style.backgroundColor = orange;
	// 	}
	// }
	
	// let bcheck = true;
	// if(btn.id[1] === '1' && btn.id[2] === '0'){
	// 	for(let i = 1; i <= 10; i++){
	// 		if(document.getElementById("s10m" + i) != null){
	// 			if(document.getElementById("s10m" + i).style.backgroundColor != colorRGB){
	// 				bcheck = false;
	// 			}
	// 		}
	// 	}	
	// 	if(bcheck){
	// 		document.getElementById("s10").style.backgroundColor = color;
	// 	}
	// 	else{
	// 		document.getElementById("s10").style.backgroundColor = orange;
	// 	}
	// }
	// else{
	// 	for(let i = 1; i <= 10; i++){
	// 		if(document.getElementById("s" + btn.id[1] + "m" + i) != null){
	// 			if(document.getElementById("s" + btn.id[1] + "m" + i).style.backgroundColor != colorRGB){
	// 				bcheck = false;
	// 			}
	// 		}
	// 	}	
	// 	if(bcheck){
	// 		document.getElementById("s" + btn.id[1]).style.backgroundColor = color;
	// 	}
	// 	else{
	// 		document.getElementById("s" + btn.id[1]).style.backgroundColor = orange;
	// 	}
	// }
	
	// progressBarRefresh();
// } 

// function CourseCheck(btn) {
	
// 	if(color === orange){
// 		if(btn.style.backgroundColor != orangeRGB){
// 			barWidthOrange += (materia);
// 			document.getElementById("myBarOrange").style.width = barWidthOrange + '%';		
// 			if(btn.style.backgroundColor === greenRGB){
// 				barWidthGreen -= (materia);
// 	 			document.getElementById("myBarGreen").style.width = barWidthGreen + '%';
// 			}
// 			else if(btn.style.backgroundColor === blueRGB){
// 				barWidthBlue -= (materia);
// 	 			document.getElementById("myBarBlue").style.width = barWidthBlue + '%';
// 			}
// 			else if(btn.style.backgroundColor === purpleRGB){
// 				barWidthPurple -= (materia);
// 	 			document.getElementById("myBarPurple").style.width = barWidthPurple + '%';
// 			}
// 			btn.style.backgroundColor = color;
// 		}
// 		else{
// 		}
// 	}
// 	else if(color === blue){
// 		if(btn.style.backgroundColor != blueRGB){
// 			barWidthBlue += (materia);
// 			document.getElementById("myBarBlue").style.width = barWidthBlue + '%';		
// 			if(btn.style.backgroundColor === greenRGB){
// 				barWidthGreen -= (materia);
// 	 			document.getElementById("myBarGreen").style.width = barWidthGreen + '%';
// 			}
// 			else if(btn.style.backgroundColor === orangeRGB){
// 				barWidthOrange -= (materia);
// 	 			document.getElementById("myBarOrange").style.width = barWidthOrange + '%';
// 			}
// 			else if(btn.style.backgroundColor === purpleRGB){
// 				barWidthPurple -= (materia);
// 	 			document.getElementById("myBarPurple").style.width = barWidthPurple + '%';
// 			}
// 			btn.style.backgroundColor = color;
// 		}
// 		else{
// 		}
// 	}
// 	else if(color === green){
// 		if(btn.style.backgroundColor != greenRGB){
// 			barWidthGreen += (materia);
// 			document.getElementById("myBarGreen").style.width = barWidthGreen + '%';		
// 			if(btn.style.backgroundColor === blueRGB){
// 				barWidthBlue -= (materia);
// 	 			document.getElementById("myBarBlue").style.width = barWidthBlue + '%';
// 			}
// 			else if(btn.style.backgroundColor === orangeRGB){
// 				barWidthOrange -= (materia);
// 	 			document.getElementById("myBarOrange").style.width = barWidthOrange + '%';
// 			}
// 			else if(btn.style.backgroundColor === purpleRGB){
// 				barWidthPurple -= (materia);
// 	 			document.getElementById("myBarPurple").style.width = barWidthPurple + '%';
// 			}
// 			btn.style.backgroundColor = color;
// 		}
// 		else{
// 		}
// 	}
// 	else if(color === purple){
// 		if(btn.style.backgroundColor != purpleRGB){
// 			barWidthPurple += (materia);
// 			document.getElementById("myBarPurple").style.width = barWidthPurple + '%';		
// 			if(btn.style.backgroundColor === blueRGB){
// 				barWidthBlue -= (materia);
// 	 			document.getElementById("myBarBlue").style.width = barWidthBlue + '%';
// 			}
// 			else if(btn.style.backgroundColor === orangeRGB){
// 				barWidthOrange -= (materia);
// 	 			document.getElementById("myBarOrange").style.width = barWidthOrange + '%';
// 			}
// 			else if(btn.style.backgroundColor === greenRGB){
// 				barWidthGreen -= (materia);
// 	 			document.getElementById("myBarGreen").style.width = barWidthGreen + '%';
// 			}
// 			btn.style.backgroundColor = color;
// 		}
// 		else{
// 		}
// 		progressBarRefresh();
// 	}
// }

// function clickSemester(btn) {

// 	// console.log("clicked on semester btn");
// 	btn.style.backgroundColor = color;

// 	if(btn.id[1] === '1' && btn.id[2] === '0'){
// 		for(let i = 1; i <= 10; i++){
// 			if(document.getElementById("s10m" + i) != null){
// 				if(document.getElementById("s10m" + i).style.backgroundColor != color){
// 					CourseCheck(document.getElementById("s10m" + i));
// 			 	}
// 		 	}
// 		}
// 	}
// 	else{
// 		for(let i = 1; i <= 10; i++){
// 			if(document.getElementById("s" + btn.id[1] + "m" + i) != null){
// 				if(document.getElementById("s" + btn.id[1] + "m" + i).style.backgroundColor != color){
// 					CourseCheck(document.getElementById("s" + btn.id[1] + "m" + i));
// 			 	}
// 			}
// 		}
// 	}
// 	progressBarRefresh();
// }

function progressBarRefresh(){

	for (let i = 0; i < nameColors.length; i++) {
		if(barWidths[nameColors[i]] != 0){
			var myDiv = document.getElementById("myBar" + nameColors[i]);
			  myDiv.innerHTML = (barWidths[nameColors[i]]*(1.002506266)).toFixed(2) + "%";
		}
		else{
			var myDiv = document.getElementById("myBar" + nameColors[i]);
			  myDiv.innerHTML = "";
		}
	}

	// if(barWidthOrange != 0){
	// 	var myDiv = document.getElementById("myBarOrange");
  	// 	myDiv.innerHTML = (barWidthOrange*(1.002506266)).toFixed(2) + "%";
	// }
	// else{
	// 	var myDiv = document.getElementById("myBarOrange");
  	// 	myDiv.innerHTML = "";
	// }

	// if(barWidthGreen != 0){
	// 	var myDiv = document.getElementById("myBarGreen");
	//   	myDiv.innerHTML = (barWidthGreen*(1.002506266)).toFixed(2) + "%";
	// }
	// else{
	// 	var myDiv = document.getElementById("myBarGreen");
  	// 	myDiv.innerHTML = "";
	// }

	// if(barWidthBlue != 0){
	//   	var myDiv = document.getElementById("myBarBlue");
	//   	myDiv.innerHTML = (barWidthBlue*(1.002506266)).toFixed(2) + "%";
	// }	
	// else{
	// 	var myDiv = document.getElementById("myBarBlue");
  	// 	myDiv.innerHTML = "";
	// }

	// if(barWidthPurple != 0){
  	// 	var myDiv = document.getElementById("myBarPurple");
	//   	myDiv.innerHTML = (barWidthPurple*(1.002506266)).toFixed(2) + "%";
	// }
	// else{
	// 	var myDiv = document.getElementById("myBarPurple");
  	// 	myDiv.innerHTML = "";
	// }
}

progressBarRefresh();

document.addEventListener("keypress", function onEvent(event) {
	if (event.key >= "0" && event.key <= "9") {
		changeColor(document.querySelector("#btn" + nameColors[event.key - 1]).childNodes[0]);
	}
	// if (event.key === "1") {
    //     changeColor("orange");
    // }
    // else if (event.key === "2") {
    //     changeColor("green");
    // }
    // else if (event.key === "3") {
    //     changeColor("blue");
    // }
    // else if (event.key === "4") {
    //     changeColor("purple");
    // }
});