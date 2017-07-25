alert("start");
document.getElementById("LocOrigin").innerHTML = "Complete";

genLocOrigin();

function genLocOrigin() {
	alert("test");
	for (var i = 0; i < 49; i++) {
		var LocOrigin[i] ="LocOrigin" + i;
	}
	alert("complet");
	document.getElementById("LocOrigin").innerHTML = printLocOrigin(LocOrigin);
}
function printLocOrigin(var LocOrigin) {
	var p1Output = "<span id = \"";
	var p2Output = "\"></span>";
	var breakLine = "</br>";
	var finOutput = p1Output + LocOrigin[0] + p2Output;
	for (var i = 1; i < 49; i++) {
		finOutput += p1Output + LocOrigin[1] + p2Output;
		if ((i+1)%7 == 0) {
			finOutput += breakLine;
		}
	}
	return finOutput;
}
for (var i = 0; i < 49; i++) {
	document.getElementById("LocOrigin" + i).innerHTML = i;
}
