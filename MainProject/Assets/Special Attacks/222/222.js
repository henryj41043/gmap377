﻿#pragma strict

<<<<<<< HEAD
function Start () {

}

function Update () {

=======
var GummyBindEffect : Rigidbody;
var GummyBindLandingZone : GameObject;

var startingDistance : float;
var maximumDistance : float;
var speed : float;
var pullStrength : float;
var pullRadius : float;
var pullDuration : float;

function GummyBind () {
	var GummyBind : Rigidbody = Instantiate(GummyBindEffect, transform.position + (transform.forward * startingDistance), transform.rotation);
	GummyBind.velocity = transform.TransformDirection(Vector3(0, 0, speed));
	var GummyBindLandingZone : GameObject = Instantiate(GummyBindLandingZone, transform.position + (transform.forward * maximumDistance), transform.rotation);
	GummyBind.SendMessage("PullStrength", pullStrength);
	GummyBind.SendMessage("PullRadius", pullRadius);
	GummyBind.SendMessage("PullDuration", pullDuration);
>>>>>>> 447e36a73d7f1336fc81d92d936fdeb47c565cb7
}