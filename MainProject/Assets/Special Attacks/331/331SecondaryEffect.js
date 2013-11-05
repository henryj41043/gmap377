#pragma strict
private var tickInterval : float;
private var damageTick : boolean;

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
		//object.SendMessage("ApplyDamage", damagePerTick);
		//Apply movement and attack slow to enemy here
		damageTick = false;
		DamageTickIsOff();
	}
}

function ChocolateRadius (receivedChocolateRadius : float) {
	transform.localScale = Vector3(receivedChocolateRadius, 1, receivedChocolateRadius);
}

function MovementSlow (receivedMovementSlow : float) {
	
}

function AttackSlow (receivedAttackSlow : float) {

}

function TickInterval (receivedTickInterval : float) {
	tickInterval = receivedTickInterval;
}

function ChocolateDuration (receivedChocolateDuration : float) {
	Invoke("DestroySelf", receivedChocolateDuration);
}

function DestroySelf () {
	Destroy(gameObject);
}