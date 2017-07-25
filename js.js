
genLocOrigin();

function genLocOrigin() {
	var LocOrigin = [];
	for (var i = 0; i < 49; i++) {
		LocOrigin[i] ="LocOrigin" + i;
	}
	document.getElementById("LocOrigin").innerHTML = printLocOrigin(LocOrigin);
	
	displayLocOrigin();
}
function printLocOrigin(LocOrigin) {
	var p1Output = "<span id = \"";
	var p2Output = "\"></span>";
	var breakLine = "</br>";
	var finOutput = p1Output + LocOrigin[0] + p2Output;
	for (var i = 1; i < 49; i++) {
		finOutput += p1Output + LocOrigin[i] + p2Output;
		if ((i+1)%7 == 0) {
			finOutput += breakLine;
		}
	}
	return finOutput;
}
function displayLocOrigin() {
	var p1Button = "<button onclick = \"";
	var p2Button ="\">"
	var closeButton = "</button>"
	var fTree = p1Button + "harvestTree()" + p2Button + "T" + closeButton;
	var fFire = p1Button + "stokeFire()" + p2Button + "F" + closeButton;
	var fDirt = p1Button + "prepDirt()" + p2Button + "D" + closeButton;
	
	for (var i = 0; i < 49; i++) {
		switch(i) {
			case 24: document.getElementById("LocOrigin"+ i).innerHTML = fFire; break;
			case 0:
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 12:
			case 13:
			case 14:
			case 20:
			case 28:
			case 34:
			case 35:
			case 36:
			case 40:
			case 41:
			case 42:
			case 43:
			case 44:
			case 45:
			case 46:
			case 47:
			case 48: document.getElementById("LocOrigin" + i).innerHTML = fTree; break;
			default: document.getElementById("LocOrigin" + i).innerHTML = fDirt; break;
		}
	}
}
function harvestTree(){
	alert("Harvesting");
}
function stokeFire() {
	alert("Stoking");
}
function prepDirt() {
	alert("Preparing");
}