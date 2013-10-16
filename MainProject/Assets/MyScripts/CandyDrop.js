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
		player.SendMessage("StandingOnChocolateDrop");
	}
	if (candyIdentifier == 2) {
		player.SendMessage("StandingOnGummyDrop");
	}
	if (candyIdentifier == 3) {
		player.SendMessage("StandingOnLollipopDrop");
	}
}

function OnTriggerExit (player:Collider) {
	IsThePlayerStandingOnMe = false;
	player.SendMessage("ResetStanding");
}

function DestroyCandyDrop () {
	if (IsThePlayerStandingOnMe == true) {
		player.SendMessage("ResetStanding");
		Destroy(gameObject);
	}
}