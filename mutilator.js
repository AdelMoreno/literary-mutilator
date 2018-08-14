function highlightAll() {
 	var string = document.getElementById("words").innerHTML;
 	var result = string.replace(/BORK/gi, "<span class='highlight'>BORK</span>");
 	document.getElementById("words").innerHTML = result;
}

function replaceAll() {
	var r = /\w{5,}\b/gi;
	var string = document.getElementById("dog").innerHTML;
	var result = string.replace(r, "BORK");
	document.getElementById("dog").innerHTML = result;
}

function color() {
	document.getElementById("words").style.color ="red";
}

function font() {
	document.getElementById("words").style.fontFamily="Brush Script MT";
	document.getElementById("words").style.fontSize="150%"
}