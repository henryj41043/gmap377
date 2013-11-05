#pragma strict

private var trailDamagePerTick : float;
private var damageTick : boolean;
private var trailTickInterval : float;

function Start () {
	damageTick = true;
}

function DamageTickIsOff () {
	Invoke("TurnDamageTickOn", trailTickInterval);
}

function TurnDamageTickOn () {
	damageTick = true;
}

function OnTriggerStay (object : Collider) {
	if (object.tag == "Enemy" && damageTick == true) {
		object.SendMessage("ApplyDamage", trailDamagePerTick);
		//Apply movement and attack slow to enemy here
		damageTick = false;
		DamageTickIsOff();
	}
}

function TrailWidth (receivedTrailWidth : float) {
	transform.localScale = Vector3(receivedTrailWidth, 1, receivedTrailWidth);
}

function TrailMovementSlow (receivedTrailMovementSlow : float) {
	
}

function TrailAttackSlow (receivedTrailAttackSlow : float) {

}

function TrailDamagePerTick (receivedTrailDamagePerTick : float) {
	trailDamagePerTick = receivedTrailDamagePerTick;
}

function TrailTickInterval (receivedTrailTickInterval : float) {
	trailTickInterval = receivedTrailTickInterval;
}

function TrailDuration (receivedTrailDuration : float) {
	Invoke("DestroySelf", receivedTrailDuration);
}

function DestroySelf () {
	Destroy(gameObject);
}