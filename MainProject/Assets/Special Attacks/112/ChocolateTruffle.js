#pragma strict

var StickyTrufflePrimaryEffect : Rigidbody;
var StickyTruffleLandingZone : GameObject;

public static var startingDistance : float;
public static var distance : float;
public static var speed : float;
public static var width : float;
public static var damage : float;
var trailPlacementIntervals : float;
var trailDamagePerTick : float;
var trailTickInterval : float;
var trailMovementSlow : float;
var trailAttackSlow : float;
var trailDuration : float;
var trailWidth : float;

function StickyTruffle () {
	var StickyTruffle : Rigidbody = Instantiate(StickyTrufflePrimaryEffect, transform.position + (transform.forward * startingDistance), transform.rotation);
	StickyTruffle.velocity = transform.TransformDirection(Vector3(0, 0, speed));
	var StickyTruffleLandingZone : GameObject = Instantiate(StickyTruffleLandingZone, transform.position + (transform.forward * distance), transform.rotation);
	StickyTruffle.SendMessage("Width", width);
	StickyTruffle.SendMessage("Damage", damage);
	StickyTruffle.SendMessage("Damage", damage);
	StickyTruffle.SendMessage("TrailPlacementIntervals", trailPlacementIntervals);
	StickyTruffle.SendMessage("TrailDamagePerTick", trailDamagePerTick);
	StickyTruffle.SendMessage("TrailTickInterval", trailTickInterval);
	StickyTruffle.SendMessage("TrailMovementSlow", trailMovementSlow);
	StickyTruffle.SendMessage("TrailAttackSlow", trailAttackSlow);
	StickyTruffle.SendMessage("TrailDuration", trailDuration);
	StickyTruffle.SendMessage("TrailWidth", trailWidth);
}