#pragma strict

var StickyTruffleSecondaryEffect : GameObject;

private var damage : float;
private var trailPlacementIntervals : float;
private var trailDamagePerTick : float;
private var trailTickInterval : float;
private var trailMovementSlow : float;
private var trailAttackSlow : float;
private var trailDuration : float;
private var trailWidth : float;

function Start () {
	Spawn();
}

function OnTriggerEnter (object : Collider) {
	if (object.tag == "Enemy") {
		object.SendMessage("ApplyDamage", damage);
	}
	if (object.name ==  "112LandingZonePrefab(Clone)") {
		Destroy(gameObject);
	}
}

function Spawn () {
	var StickyTruffleSecondaryEffect : GameObject = Instantiate(StickyTruffleSecondaryEffect, transform.position, transform.rotation);
	StickyTruffleSecondaryEffect.SendMessage("TrailMovementSlow", trailMovementSlow);
	StickyTruffleSecondaryEffect.SendMessage("TrailAttackSlow", trailAttackSlow);
	StickyTruffleSecondaryEffect.SendMessage("TrailDuration", trailDuration);
	StickyTruffleSecondaryEffect.SendMessage("TrailWidth", trailWidth);
	StickyTruffleSecondaryEffect.SendMessage("TrailDamagePerTick", trailDamagePerTick);
	StickyTruffleSecondaryEffect.SendMessage("TrailTickInterval", trailTickInterval);
	Invoke("Spawn", trailPlacementIntervals);
}

function Width (receivedWidth : float) {
	transform.localScale = Vector3(receivedWidth, receivedWidth, receivedWidth);
}

function Damage (receivedDamage : float) {
	damage = receivedDamage;
}

function TrailPlacementIntervals (receivedTrailPlacementIntervals : float) {
	trailPlacementIntervals = receivedTrailPlacementIntervals;
}

function TrailDamagePerTick (receivedTrailDamagePerTick : float) {
	trailDamagePerTick = receivedTrailDamagePerTick;
}

function TrailTickInterval (receivedTrailTickInterval : float) {
	trailTickInterval = receivedTrailTickInterval;
}

function TrailMovementSlow (receivedTrailMovementSlow : float) {
	trailMovementSlow = receivedTrailMovementSlow;
}

function TrailAttackSlow (receivedTrailAttackSlow : float) {
	trailAttackSlow = receivedTrailAttackSlow;
}

function TrailDuration (receivedTrailDuration : float) {
	trailDuration = receivedTrailDuration;
}

function TrailWidth (receivedTrailWidth : float) {
	trailWidth = receivedTrailWidth;
}