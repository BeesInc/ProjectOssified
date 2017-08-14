var points = 0;
var picTree = "Tree.jpg";
var picTreeUse = "TreeBright.jpg";
var picFire = "Fire.jpg";
var picDirt = "Dirt.jpg";
var Selected = false;
var currentSelected = 0;
genLocOrigin();

function genLocOrigin() {
	var LocOrigin = [];
	var p1Object = "<img style = \"height:75px;width:75px\" onclick = \"";
	var p2Object ="\" src = ";
	var EndObject = ">";
	var fTree = "placeholder";
	var fFire = "placeholder";
	var fDirt = "placeholer";
	
	for (var i = 0; i < 49; i++) {
		LocOrigin[i] ="LocOrigin" + i;
	}
	document.getElementById("LocOrigin").innerHTML = printLocOrigin(LocOrigin);
	
	for (var i = 0; i < 49; i++) {
		fTree = p1Object + "harvestTree(" + i + ")" + p2Object + picTree + " id = picTree" + i + EndObject;
		fFire = p1Object + "stokeFire()" + p2Object + picFire + " id = picFire" + i + EndObject;
		fDirt = p1Object + "prepDirt()" + p2Object + picDirt + " id = picDirt" + i + EndObject;
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
function printLocOrigin(LocOrigin) {
	var p1Output = "<div class=\"LocOrigin\" id = \"";
	var p2Output = "\"></div>";
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
function harvestTree(i){
	if (Boolean(Selected)){
		if (i == currentSelected) {
			document.getElementById("picTree" + i).src = picTree;
			document.getElementById("PopUp").style.visibility = "hidden";
			Selected = false;
		}
	}
	else {
		document.getElementById("picTree" + i).src = picTreeUse;
		document.getElementById("PopUp").style.visibility = "visible";
		document.getElementById("PopUp").innerHTML = "Now viewing Tree #" + (i+1) + "'s stats";
		Selected = true;
		currentSelected = i;
	}
}
function stokeFire() {
	alert("Stoking");
}
function prepDirt() {
	alert("Preparing");
}
