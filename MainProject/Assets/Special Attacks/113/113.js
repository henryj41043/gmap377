#pragma strict

var TruffleFragEffect : Rigidbody;
var TruffleFragLandingZone : GameObject;

var startingDistance : float;
var maximumDistance : float;
var speed : float;
var width : float;
var damage : float;
var explosionWidth : float;
var explosionDuration : float;

function TruffleFrag () {
	var TruffleFrag : Rigidbody = Instantiate(TruffleFragEffect, transform.position + (transform.forward * startingDistance), transform.rotation);
	TruffleFrag.velocity = transform.TransformDirection(Vector3(0, 0, speed));
	var TruffleFragLandingZone : GameObject = Instantiate(TruffleFragLandingZone, transform.position + (transform.forward * maximumDistance), transform.rotation);
	TruffleFrag.SendMessage("Width", width);
	TruffleFrag.SendMessage("Damage", damage);
	TruffleFrag.SendMessage("ExplosionWidth", explosionWidth);
	TruffleFrag.SendMessage("ExplosionDuration", explosionDuration);
}