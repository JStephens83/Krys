
window.onload = function(){
	window.setTimeout(getSmall, 500);

	window.setTimeout(fadeOut, 700);
	window.setTimeout(remove, 1500);

	window.setTimeout(appearTwo, 1600);
	window.setTimeout(showSmall, 1000);
	window.setTimeout(fadeOutTwo, 4500);
	window.setTimeout(removeTwo, 5500);

	window.setTimeout(appearThree, 5600);
	window.setTimeout(fadeOutThree, 9000);
	window.setTimeout(removeThree, 10000);


	window.setTimeout(fadeOutSmall, 9000);
	window.setTimeout(removeSmall, 10000);

	window.setTimeout(appearFour, 10000);
	window.setTimeout(fadeInEleven, 10400);
	window.setTimeout(fadeInTwelve, 10800);
	window.setTimeout(fadeInThirteen, 11200);


	window.setTimeout(removeVid, 12500);
	window.setTimeout(showMap, 11500);
}

//animaiton logo Krys:
function getSmall(){
	var logoElm = document.getElementById("logoK");
	logoElm.style.width = "30%";
	logoElm.style.transitionDuration = "1s";
	logoElm.style.transform = "translate(-120%, -20%)";
}

// Fondu premier praragraphe: 
function fadeOut(){
	var rentreElm = document.getElementById("rentre");
	rentreElm.style.transitionDuration = "1s";
	rentreElm.style.opacity = "0";
}
// Disparition premier praragraphe:
function remove(){
	var rentreElm = document.getElementById("rentre");
	rentreElm.classList.add("byebye");
}


//Apparition second paragraphe:
function appearTwo(){
	var packElm = document.getElementById("pack");
	packElm.classList.remove("byebye2");
}
// Fondu second praragraphe:
function fadeOutTwo(){
	var packElm = document.getElementById("pack");
	packElm.style.transitionDuration = "1s";
	packElm.style.opacity = "1";
}
//Disparition second praragraphe:
function removeTwo(){
	var packElm = document.getElementById("pack");
	packElm.classList.add("byebye2");
}


//Apparition smallLines:
function showSmall(){
	var smallElm = document.getElementById("smallLines");
	smallElm.classList.remove("byebyeSmall");
}
//Fondu smallLines:
function fadeOutSmall(){
	var smallElm = document.getElementById("smallLines");
	smallElm.style.transitionDuration = "1s";
	smallElm.style.opacity = "0";
}
//Disparition smallLines:
function removeSmall(){
	var smallElm = document.getElementById("smallLines");
	smallElm.classList.add("byebyeSmall");
}


//Apparition troisième paragraphe:
function appearThree(){
	var opticElm = document.getElementById("optic");
	opticElm.classList.remove("byebye3");
}
// Fondu troisième praragraphe:
function fadeOutThree(){
	var opticElm = document.getElementById("optic");
	opticElm.style.transitionDuration = "1s";
	opticElm.style.opacity = "0";
}
// Disparition troisième praragraphe:
function removeThree(){
	var opticElm = document.getElementById("optic");
	opticElm.classList.add("byebye3");
}


//Apparition quatrième paragraphe:
function appearFour(){
	var planElm = document.getElementById("plan");
	planElm.classList.remove("byebye4");
}
// Fondu 1èreligne adresse:
function fadeInEleven(){
	var LineOneElm = document.getElementById("elevenP");
	LineOneElm.style.transitionDuration = "1s";
	LineOneElm.style.opacity = "1";
}
// Fondu 2èmeligne adresse:
function fadeInTwelve(){
	var LineTwoElm = document.getElementById("twelveP");
	LineTwoElm.style.transitionDuration = "1s";
	LineTwoElm.style.opacity = "1";
}
// Fondu 3èmeligne adresse:
function fadeInThirteen(){
	var LineThreeElm = document.getElementById("thirteenP");
	LineThreeElm.style.transitionDuration = "1s";
	LineThreeElm.style.opacity = "1";
}


// Disparition video:
function removeVid(){
	var vidElm = document.getElementById("video");
	vidElm.classList.add("byebye4");
}


//Apparition Map:
function showMap(){
	var mapElm = document.getElementById("map");
	mapElm.classList.remove("byeMap");
}