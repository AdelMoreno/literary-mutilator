function replaceAll() {
	var string = document.getElementById("words").innerHTML;
	var res = string.replace(/bork/gi, "BORK");
	document.getElementById("words").innerHTML = res;
}
