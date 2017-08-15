var points = 0;
var picTree = "Tree.jpg";
var picTreeSelect = "TreeBright.jpg";
var picFire = "Fire.jpg";
var picFireSelect = "FireBright.jpg";
var picDirt = "Dirt.jpg";
var picDirtSelect = "DirtBright.jpg";
var pSelect = 0;
var pState = "";
var tile = {};
for (var i = 0; i < 49; i++) {
	tile["State" + i] = "";
	tile["Energy" + i] = 0;
	tile["Fertility" + i] = "";
	tile["Output" + i] = "";
	tile["Time" + i] = 0;
}

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
		fTree = p1Object + "selectTile(" + i + ")" + p2Object + picTree + " id = picTree" + i + EndObject;
		fFire = p1Object + "selectTile(" + i + ")" + p2Object + picFire + " id = picFire" + i + EndObject;
		fDirt = p1Object + "selectTile(" + i + ")" + p2Object + picDirt + " id = picDirt" + i + EndObject;
		switch(i) {
			case 24: {
				document.getElementById("LocOrigin"+ i).innerHTML = fFire;
				tile.State24 = "Fire";
				tile.Energy24 = "Not required";
				tile.Fertility24 = "Ignited";
				tile.Output24 = "1 Spark";
				tile.Time24 = "1 Second";
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
				document.getElementById("LocOrigin" + i).innerHTML = fTree;
				tile["State" + i] = "Tree";
				tile["Fertility" + i] = "Lush";
				tile["Output" + i] = "5 logs & 10 sticks";
				tile["Time" + i] = "60 Seconds at 1 Energy";
				break;
			}
			default: {
				document.getElementById("LocOrigin" + i).innerHTML = fDirt;
				tile["State" + i] = "Dirt";
				tile["Fertility" + i] = "Rocky";
				tile["Output" + i] = "5 soil & 3 pebbles";
				tile["Time" + i] = "60 Seconds at 1 Energy";
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
function selectTile(i) {
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
	document.getElementById("TileOutput").innerHTML = tile["Output" + i];
	document.getElementById("TileTime").innerHTML = tile["Time" + i];
	switch(pState) {
		case "Tree": document.getElementById("picTree" + pSelect).src = picTree; break;
		case "Fire": document.getElementById("picFire" + pSelect).src = picFire; break;
		case "Dirt": document.getElementById("picDirt" + pSelect).src = picDirt; break;
	}
	pSelect = i;
	pState = tile["State" + i];
}
