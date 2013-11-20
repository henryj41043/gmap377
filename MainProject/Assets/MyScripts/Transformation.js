#pragma strict
private var transformEnabled = false;
var candyBarSize = 10;
var cooldownTime = 10;
private var cooldown = 0;
private var candyCount = 0;
private var inCooldown = false;
var candyBarGUI : GUITexture;
var cooldownBar : GUITexture;
private var cooldownBarWidth = 0.0;
private var candyBarGUIWidth = 0.0;

function Start () {
	candyBarGUIWidth = candyBarGUI.pixelInset.width;
	cooldownBarWidth = cooldownBar.pixelInset.width;
}

function Update () {
	if(transformEnabled){
		if(Input.GetKeyDown("1")){
			//PlayerControls.CurrentTransformation(1);
			inCooldown = true;
			transformEnabled = false;
		}
		if(Input.GetKeyDown("2")){
			//PlayerControls.CurrentTransformation(2);
			inCooldown = true;
			transformEnabled = false;
		}
		if(Input.GetKeyDown("3")){
			//PlayerControls.CurrentTransformation(3);
			inCooldown = true;
			transformEnabled = false;
		}
	}
	
	if(candyCount == candyBarSize && cooldown == 0){
		transformEnabled = true;
	}
	
	updateCandyBarGUI();
}

function addCandy(){
	if(candyCount < candyBarSize){
		candyCount++;
	}
}

function resetCandyCount(){
	candyCount = 0;
}

function updateCandyBarGUI(){
	var candyBarFraction = Mathf.Clamp01(candyCount / candyBarSize);
	candyBarGUI.pixelInset.xMax = candyBarGUI.pixelInset.xMin + candyBarGUIWidth * candyBarFraction;
}
