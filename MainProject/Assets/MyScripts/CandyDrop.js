#pragma strict

var player : GameObject;
private var IsThePlayerStandingOnMe : boolean;

var candyIdentifier : int;

function Start () {
	IsThePlayerStandingOnMe = false;
}

function OnTriggerEnter (player:Collider) {
	IsThePlayerStandingOnMe = true;
	if (candyIdentifier == 1) {
		player.SendMessage("StandingOnChocolateDrop", SendMessageOptions.DontRequireReceiver);
	}
	if (candyIdentifier == 2) {
		player.SendMessage("StandingOnGummyDrop", SendMessageOptions.DontRequireReceiver);
	}
	if (candyIdentifier == 3) {
		player.SendMessage("StandingOnLollipopDrop", SendMessageOptions.DontRequireReceiver);
	}
}

function OnTriggerExit (player:Collider) {
	IsThePlayerStandingOnMe = false;
	player.SendMessage("ResetStanding", SendMessageOptions.DontRequireReceiver);
}

function DestroyCandyDrop () {
	if (IsThePlayerStandingOnMe == true) {
		//player.SendMessage("ResetStanding");
		Destroy(gameObject);
	}
}