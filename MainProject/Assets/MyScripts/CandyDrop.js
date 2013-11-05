#pragma strict

var player : GameObject;
<<<<<<< HEAD
var IsThePlayerStandingOnMe : boolean;
=======
private var IsThePlayerStandingOnMe : boolean;
>>>>>>> 447e36a73d7f1336fc81d92d936fdeb47c565cb7

var candyIdentifier : int;

function Start () {
	IsThePlayerStandingOnMe = false;
}

function OnTriggerEnter (player:Collider) {
	IsThePlayerStandingOnMe = true;
	if (candyIdentifier == 1) {
<<<<<<< HEAD
		player.SendMessage("StandingOnChocolateDrop");
	}
	if (candyIdentifier == 2) {
		player.SendMessage("StandingOnGummyDrop");
	}
	if (candyIdentifier == 3) {
		player.SendMessage("StandingOnLollipopDrop");
=======
		player.SendMessage("StandingOnChocolateDrop", SendMessageOptions.DontRequireReceiver);
	}
	if (candyIdentifier == 2) {
		player.SendMessage("StandingOnGummyDrop", SendMessageOptions.DontRequireReceiver);
	}
	if (candyIdentifier == 3) {
		player.SendMessage("StandingOnLollipopDrop", SendMessageOptions.DontRequireReceiver);
>>>>>>> 447e36a73d7f1336fc81d92d936fdeb47c565cb7
	}
}

function OnTriggerExit (player:Collider) {
	IsThePlayerStandingOnMe = false;
<<<<<<< HEAD
	player.SendMessage("ResetStanding");
=======
	player.SendMessage("ResetStanding", SendMessageOptions.DontRequireReceiver);
>>>>>>> 447e36a73d7f1336fc81d92d936fdeb47c565cb7
}

function DestroyCandyDrop () {
	if (IsThePlayerStandingOnMe == true) {
<<<<<<< HEAD
		player.SendMessage("ResetStanding");
=======
		//player.SendMessage("ResetStanding");
>>>>>>> 447e36a73d7f1336fc81d92d936fdeb47c565cb7
		Destroy(gameObject);
	}
}