#pragma strict

<<<<<<< HEAD
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
=======
var StickySlideEffect : GameObject;

var damage : float;
var damageRadius : float;
var phaseChange1 : float;
var phaseChange2 : float;
var travelSpeed : float;
var recoverSpeed : int;

function StickySlide () {
	SendMessageUpwards("StickySlidePhase1");
	var StickySlide : GameObject = Instantiate(StickySlideEffect, transform.position, transform.rotation);
	var StickySlideTransform = StickySlide.transform;
	StickySlideTransform.parent = transform;
	StickySlide.SendMessage("Damage", damage);
	StickySlide.SendMessage("DamageRadius", damageRadius);
	SendMessageUpwards("StickySlidePhaseChange1", phaseChange1);
	SendMessageUpwards("StickySlidePhaseChange2", phaseChange2);
	SendMessageUpwards("StickySlideTravelSpeed", travelSpeed);
	SendMessageUpwards("StickySlideRecoverSpeed", recoverSpeed);
>>>>>>> 447e36a73d7f1336fc81d92d936fdeb47c565cb7
}