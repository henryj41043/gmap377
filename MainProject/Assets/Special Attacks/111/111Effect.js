#pragma strict

private var damagePerTick : float;
private var damageTick : boolean;
private var tickInterval : float;

function Start () {
	damageTick = true;
}
	
function DamageTickIsOff () {
	Invoke("TurnDamageTickOn", tickInterval);
}

function TurnDamageTickOn () {
	damageTick = true;
}

function OnTriggerStay (object : Collider) {
	if (object.tag == "Enemy" && damageTick == true) {
		object.SendMessage("ApplyDamage", damagePerTick);
		//Apply movement and attack slow to enemy here
		damageTick = false;
		DamageTickIsOff();
	}
}

function Radius (receivedRadius : float) {
	transform.localScale = Vector3(receivedRadius, 1, receivedRadius);
}

function MovementSlow (receivedMovementSlow : float) {
	
}

function AttackSlow (receivedAttackSlow : float) {

}

function DamagePerTick (receivedDamagePerTick : float) {
	damagePerTick = receivedDamagePerTick;
}

function TickInterval (receivedTickInterval : float) {
	tickInterval = receivedTickInterval;
}

function Duration (receivedDuration : float) {
	Invoke("DestroySelf", receivedDuration);
}

function DestroySelf () {
	Destroy(gameObject);
}