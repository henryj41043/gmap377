private var StandingOverCandyDrop : int;

private var DestroyCandy : boolean;

private var transformEnabled = false;
var candyBarSize = 10.0;
var cooldownTime = 10;
private var cooldown = 0;
private var candyCount = 0.0;
private var inCooldown = false;
var candyBarGUI : GUITexture;
private var candyBarGUIWidth = 0.0;

function Start () {
	candyBarGUIWidth = candyBarGUI.pixelInset.width;
}

function Update () {
		
		if (StandingOverCandyDrop == 1){
		
			addCandy();
			DestroyCandy = true;
		}
		
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

function TurnOffDestroyCandy() {
	DestroyCandy = false;
}

function ResetStanding () {
	StandingOverCandyDrop = 0;
}

function StandingOnChocolateDrop () {
	StandingOverCandyDrop = 1;
}

function StandingOnGummyDrop () {
	StandingOverCandyDrop = 1;
}

function StandingOnLollipopDrop () {
	StandingOverCandyDrop = 1;
}

function OnTriggerStay (object:Collider) {
	if (object.tag == "ChocolateDrop" || object.tag == "GummyDrop" || object.tag == "LollipopDrop") {
		if (DestroyCandy == true) {
			object.SendMessage("DestroyCandyDrop");
			DestroyCandy = false;
			ResetStanding();
		}
	}
}

function addCandy(){
	if(candyCount < candyBarSize){
		candyCount++;
	}
}

function updateCandyBarGUI(){
	var candyBarFraction = Mathf.Clamp01(candyCount / candyBarSize);
	candyBarGUI.pixelInset.xMax = candyBarGUI.pixelInset.xMin + (candyBarGUIWidth * candyBarFraction);
}