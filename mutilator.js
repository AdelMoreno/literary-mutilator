function highlightAll() {
 	var string = document.getElementById("words").innerHTML;
 	var res = string.replace(/BORK/gi, "<span class='highlight'>bork</span>");
 	document.getElementById("words").innerHTML = res;
}

function replaceAll() {
	var r = /\w{5,}\b/gi;
	var string = document.getElementById("dog").innerHTML;
	var res = string.replace(r, "BORK");
	document.getElementById("dog").innerHTML = res;
}