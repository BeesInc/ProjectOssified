var picTree = "Tree.jpg";
var picTreeSelect = "TreeBright.jpg";
var picFire = "Fire.jpg";
var picFireSelect = "FireBright.jpg";
var picDirt = "Dirt.jpg";
var picDirtSelect = "DirtBright.jpg";
var cTile = 1000;

var pSelect = 1000;
var pState = "";

var EnergyNum = []; //Energy Number Object
var tile = {};

getObjectLiteral();
genLocOrigin();

function genLocOrigin() {
	var LocOrigin = [];
	var p1Object = "<img style = \"height:75px;width:75px\" onclick = \"";
	var p2Object ="\" src = ";
	var EndObject = ">";
	var fTree = "placeholder";
	var fFire = "placeholder";
	var fDirt = "placeholder";
	var fRoman = "placeholder";
	
	for (var i = 0; i < 49; i++) {
		LocOrigin[i] ="LocOrigin" + i;
	}
	document.getElementById("LocOrigin").innerHTML = printLocOrigin(LocOrigin);
	
	for (var i = 0; i < 49; i++) {
		fTree = p1Object + "selectTile(" + i + ", 'new')" + p2Object + picTree + " id = picTree" + i + EndObject;
		fFire = p1Object + "selectTile(" + i + ", 'new')" + p2Object + picFire + " id = picFire" + i + EndObject;
		fDirt = p1Object + "selectTile(" + i + ", 'new')" + p2Object + picDirt + " id = picDirt" + i + EndObject;
		fRoman = "<img src = " + EnergyNum[0] + " class = 'Roman0' id =" + i + "Roman>";
		switch(i) {
			case 24: {
				document.getElementById("LocOrigin"+ i).innerHTML = fFire + fRoman;
				tile.State24 = "Fire";
				tile.Fertility24 = "Ignited";
				break;
			}
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
			case 48: {
				document.getElementById("LocOrigin" + i).innerHTML = fTree + fRoman;
				tile["State" + i] = "Tree";
				tile["Fertility" + i] = "Lush";
				break;
			}
			default: {
				document.getElementById("LocOrigin" + i).innerHTML = fDirt + fRoman;
				tile["State" + i] = "Dirt";
				tile["Fertility" + i] = "Rocky";
				break;
			}
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
function selectTile(i, choice) {
	cTile = i;
	switch(tile["State" + i]) {
		case "Tree": document.getElementById("picTree" + i).src = picTreeSelect; break;
		case "Fire": document.getElementById("picFire" + i).src = picFireSelect; break;
		case "Dirt": document.getElementById("picDirt" + i).src = picDirtSelect; break;
	}
	document.getElementById("PopUp").style.visibility = "visible";
	document.getElementById("PopUpTitle").innerHTML = "Now viewing Tile #" + (i+1) + "'s stats";
	document.getElementById("TileState").innerHTML = tile["State" + i];
	document.getElementById("TileEnergy").innerHTML = tile["Energy" + i];
	document.getElementById("TileFertility").innerHTML = tile["Fertility" + i];
	switch(tile["Energy" + i]) {
		case 10: {
			document.getElementById("EnergyAButton").innerHTML = "<button onclick = \"alert('Maximum Energy')\"> Max Energy </button>"; 
			document.getElementById("EnergyRButton").innerHTML = "<button onclick = \"modEnergy('r')\"> Remove Energy </button>";
			break;
		}
		case 0: {
			document.getElementById("EnergyRButton").innerHTML = "<button onclick = \"alert('Cannot Remove Energy')\"> No Energy </button>"; 
			document.getElementById("EnergyAButton").innerHTML = "<button onclick = \"modEnergy('a')\"> Add Energy </button>";
			break;
		}
		default: {
			document.getElementById("EnergyAButton").innerHTML = "<button onclick = \"modEnergy('a')\"> Add Energy </button>";
			document.getElementById("EnergyRButton").innerHTML = "<button onclick = \"modEnergy('r')\"> Remove Energy </button>";
			break;
		}
	}
	if (choice == "new") {
		switch(pState) {
			case "Tree": document.getElementById("picTree" + pSelect).src = picTree; break;
			case "Fire": document.getElementById("picFire" + pSelect).src = picFire; break;
			case "Dirt": document.getElementById("picDirt" + pSelect).src = picDirt; break;
		}
	}
	pSelect = i;
	pState = tile["State" + i];
}
function getObjectLiteral() {
	for (var i = 0; i < 11; i++) {
		EnergyNum[i] = "Roman" + (i) + ".png"
	}
	for (var i = 0; i < 49; i++) {
		tile["State" + i] = "";
		tile["Energy" + i] = 0;
		tile["Fertility" + i] = "";
	}
}
function modEnergy(choice) {
	switch(choice) {
		case "a": {
			document.getElementById(cTile + "Roman").src = EnergyNum[tile["Energy" + cTile] + 1];
			document.getElementById(cTile + "Roman").className = "Roman" + (tile["Energy" + cTile]+1);
			tile["Energy" + cTile]++;
			break;
		}
		case "r": {
			document.getElementById(cTile + "Roman").src = EnergyNum[tile["Energy" + cTile] - 1];
			document.getElementById(cTile + "Roman").className = "Roman" + (tile["Energy" + cTile]-1);
			tile["Energy" + cTile]--; 
			break; 
		}
	}
	selectTile(cTile, "");
}