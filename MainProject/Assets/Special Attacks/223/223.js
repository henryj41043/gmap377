#pragma strict

<<<<<<< HEAD
function Start () {

}

function Update () {

=======
var YumYumShieldEffect : GameObject;

var pushStrength : float;
var pushRadius : float;
var duration : float;

function YumYumShield () {
	var YumYumShield : GameObject = Instantiate(YumYumShieldEffect, transform.position, transform.rotation);
	YumYumShield.SendMessage("PushStrength", pushStrength);
	YumYumShield.SendMessage("PushRadius", pushRadius);
	YumYumShield.SendMessage("Duration", duration);
>>>>>>> 447e36a73d7f1336fc81d92d936fdeb47c565cb7
}