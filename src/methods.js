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

let colorsHex = {
	Green: '#439630',
	Blue: "#2653AD",
	Orange: "#BF7913",
	Purple: "#633B8D",
}

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

// change the color of the buttons about to press

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

// changes color of course and changes the progress bar

function materiasBtns() {
	$(".materia").on("click", (event) => {
		event.preventDefault();

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
			let extra = ((event.target.id.length == 5) ? "s10" : `s${event.target.id[1]}`);

			for(let i = 1; bcheck && i <= 10; i++){
				if(document.getElementById(extra + "m" + i) != null && document.getElementById(extra + "m" + i).style.backgroundColor != colorsRGB[nameColors[currentColor]]){
					bcheck = false;
				}
			}

			document.getElementById(extra).style.backgroundColor = (bcheck) ? colorsHex[nameColors[currentColor]]: colorsHex.Orange;
			
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
			let extra = ((event.target.parentNode.id.length == 5) ? "s10" : `s${event.target.parentNode.id[1]}`);

			for(let i = 1; bcheck && i <= 10; i++){
				if(document.getElementById(extra + "m" + i) != null && document.getElementById(extra + "m" + i).style.backgroundColor != colorsRGB[nameColors[currentColor]]){
					bcheck = false;
				}
			}

			document.getElementById(extra).style.backgroundColor = (bcheck) ? colorsHex[nameColors[currentColor]]: colorsHex.Orange;
			
			progressBarRefresh();
		}
	});

	$(".semestre").on("click", (event) => {
		event.preventDefault();

		if (event.target.className == "semestre") {
			let extra = ((event.target.id.length == 5) ? "s10m" : `s${event.target.id[1]}m`);
			event.target.style.backgroundColor = colorsRGB[nameColors[currentColor]];
			for (let i = 1; i <= maxLength; i++) {
		
				let mat = document.getElementById(extra + i);
				
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
}

progressBarRefresh();

document.addEventListener("keypress", function onEvent(event) {
	if (event.key >= "0" && event.key <= "9") {
		changeColor(document.querySelector("#btn" + nameColors[event.key - 1]).childNodes[0]);
	}
});