var tileAgain = false;
var cTile = 1000;
var pSelect = 1000;
var pState = "";

var EnergyNum = [];
var tile = {};
var pic = {
	Tree: "Tree.jpg",
	TreeS: "TreeBright.jpg",
	Fire: "Fire.jpg",
	FireS: "FireBright.jpg",
	Dirt: "Dirt.jpg",
	DirtS: "DirtBright.jpg"
};
var resource = {Spark: 0, Heat: 0, EnergyF: 1, EnergyU: 0, Twig: 0, Log: 0, Charcoal: 0};
var burnTime = {Twig: 60, Log: 240, Charcoal: 480};
var minEnergy = {Twig: 1, Log: 4, Charcoal: 8};
var sparkOutput = {Twig: 10, Log: 80, Charcoal: 200};
var byProduct = {Default: "Ash", Twig: "null", Log: "Charcoal", Charcoal: "null"};

setupObjectLiteral();
genLocOrigin();
updateData();
function tickGame() {
	
	setTimeout(tickGame,1000);
}
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
		fTree = p1Object + "selectTile(" + i + ", 'new')" + p2Object + pic.Tree + " id = picTree" + i + EndObject;
		fFire = p1Object + "selectTile(" + i + ", 'new')" + p2Object + pic.Fire + " id = picFire" + i + EndObject;
		fDirt = p1Object + "selectTile(" + i + ", 'new')" + p2Object + pic.Dirt + " id = picDirt" + i + EndObject;
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
function selectTile(tileNum, choice) {
	cTile = tileNum;
	genJobs();
	switch(tile["State" + tileNum]) {
		case "Tree": document.getElementById("picTree" + tileNum).src = pic.TreeS; break;
		case "Fire": document.getElementById("picFire" + tileNum).src = pic.FireS; break;
		case "Dirt": document.getElementById("picDirt" + tileNum).src = pic.DirtS; break;
	}
	document.getElementById("PopUp").style.visibility = "visible";
	document.getElementById("PopUpTitle").innerHTML = "Now viewing Tile #" + (tileNum+1) + "'s stats";
	document.getElementById("TileState").innerHTML = tile["State" + tileNum];
	document.getElementById("TileEnergy").innerHTML = tile["Energy" + tileNum];
	document.getElementById("TileFertility").innerHTML = tile["Fertility" + tileNum];
	switch(tile["Energy" + tileNum]) {
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
			case "Tree": document.getElementById("picTree" + pSelect).src = pic.Tree; break;
			case "Fire": document.getElementById("picFire" + pSelect).src = pic.Fire; break;
			case "Dirt": document.getElementById("picDirt" + pSelect).src = pic.Dirt; break;
		}
	}
	if (pSelect == tileNum && choice != "update") {
		if (!tileAgain) {
			document.getElementById("PopUp").style.visibility = "hidden";
			tileAgain = true;
		}
		else {
			switch(tile["State" + tileNum]) {
				case "Tree": document.getElementById("picTree" + tileNum).src = pic.TreeS; break;
				case "Fire": document.getElementById("picFire" + tileNum).src = pic.FireS; break;
				case "Dirt": document.getElementById("picDirt" + tileNum).src = pic.DirtS; break;
			}
			tileAgain = false;
		}
	}
	pSelect = tileNum;
	pState = tile["State" + tileNum];
}
function setupObjectLiteral() {
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
			if (resource.EnergyF > 0) {
				document.getElementById(cTile + "Roman").src = EnergyNum[tile["Energy" + cTile] + 1];
				document.getElementById(cTile + "Roman").className = "Roman" + (tile["Energy" + cTile]+1);
				tile["Energy" + cTile]++;
				resource.EnergyF--;
				resource.EnergyU++;
			}
			else {
				alert("All energy is already in use");
			}
			break;
		}
		case "r": {
			document.getElementById(cTile + "Roman").src = EnergyNum[tile["Energy" + cTile] - 1];
			document.getElementById(cTile + "Roman").className = "Roman" + (tile["Energy" + cTile]-1);
			tile["Energy" + cTile]--;
			resource.EnergyF++;
			resource.EnergyU--;
			break; 
		}
	}
	selectTile(cTile, "update");
	updateData();
}
function updateData() {
	document.getElementById("SparkNum").innerHTML = resource.Spark;
	document.getElementById("HeatNum").innerHTML = resource.Heat;
	document.getElementById("EnergyFNum").innerHTML = resource.EnergyF;
	document.getElementById("EnergyUNum").innerHTML = resource.EnergyU;
}
function genJobs() {
	var job1 = "";
	var job2 = "";
	var header = "<tr class = 'Jobs'><th> Name </th><th> Input </th><th> Time </th><th> Min Energy </th><th> Output </th><th> By-Product </th></tr>";
	switch(tile["State" + cTile]) {
		case "Fire": {
			job1 = "<tr class = 'Jobs' onclick = \"alert('Stoking Fire')\"><td> Stoke Fire </td><td> N/A </td><td> 1 Second </td><td> 1 Energy </td><td> 5°F/Energy </td><td> Heat Vis = .1% </td></tr>";
			job2 = "<tr class = 'Jobs' onclick = \"alert('Burning Fuel')\"><td> Burn Fuel </td><td> Choosen </td><td> Dependent </td><td> Dependent </td><td> Dependent </td><td> Dependent </td></tr>";
			break;
		}
		case "Tree": {
			
			break;
		}
		case "Dirt": {
			
			break;
		}
	}
	document.getElementById("Jobs").innerHTML = header + job1 + job2;
}
