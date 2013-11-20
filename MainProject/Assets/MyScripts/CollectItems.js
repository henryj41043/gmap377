private var StandingOverCandyDrop : int;

private var DestroyCandy : boolean;
private var time : double = 0.0;

private var transformEnabled = false;
private var candyBarSize = 5.0;
private var cooldownTime = 5.0;
private var cooldown = 0.0;
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
			GetComponent(PlayerControls).CurrentTransformation(1);
			inCooldown = true;
			transformEnabled = false;
		}
		if(Input.GetKeyDown("2")){
			GetComponent(PlayerControls).CurrentTransformation(2);
			inCooldown = true;
			transformEnabled = false;
		}
		if(Input.GetKeyDown("3")){
			GetComponent(PlayerControls).CurrentTransformation(3);
			inCooldown = true;
			transformEnabled = false;
		}
	}
	
	if(candyCount == candyBarSize && cooldown == 0.0){
		cooldown = cooldownTime;
		transformEnabled = true;
	}
	
	if(cooldown == 0.0){
		inCooldown = false;
		GetComponent(PlayerControls).CurrentTransformation(0);
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
		candyCount = candyCount + 1.0;
	}
}

function updateCandyBarGUI(){
	if(inCooldown == false){
		var candyBarFraction = Mathf.Clamp01(candyCount / candyBarSize);
		candyBarGUI.pixelInset.xMax = candyBarGUI.pixelInset.xMin + (candyBarGUIWidth * candyBarFraction);
	}
	if(inCooldown == true){
		time += Time.deltaTime;
		if(time >= 1.0){
			time -= 1.0;
			cooldown = cooldown - 1.0;
			var cooldownFraction = Mathf.Clamp01(cooldown / cooldownTime);
			candyBarGUI.pixelInset.xMax = candyBarGUI.pixelInset.xMin + (candyBarGUIWidth * cooldownFraction);
		}
		if(cooldown == 0.0){
			candyCount = 0.0;
		}
	}
}