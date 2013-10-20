#pragma strict

var movement : CharacterMotor;

var travelSpeed : float;
var travelDistance : float;
var damage : float;

var phaseChange1 : float;
var phaseChange2 : float;
var phaseChange3 : float;

function StickySlide () {
	Invoke("StickySlideMovement", phaseChange1);
	movement = GetComponent(CharacterMotor);
	movement.enabled = false;
}

function StickySlideMovement () {
	Invoke("StickySlideEnd", phaseChange2);
	transform.position = transform.position + (travelDistance * transform.forward);
}

function StickySlideEnd () {
	movement = GetComponent(CharacterMotor);
	movement.enabled = true;
}