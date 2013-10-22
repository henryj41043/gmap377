#pragma strict

var YumYumShieldEffect : GameObject;

var pushStrength : float;
var pushRadius : float;
var duration : float;

function YumYumShield () {
	var YumYumShield : GameObject = Instantiate(YumYumShieldEffect, transform.position, transform.rotation);
	YumYumShield.SendMessage("PushStrength", pushStrength);
	YumYumShield.SendMessage("PushRadius", pushRadius);
	YumYumShield.SendMessage("Duration", duration);
}