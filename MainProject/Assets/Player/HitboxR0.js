#pragma strict

private var damage : float;
private var hitstunDuration : float;

function OnTriggerEnter (object : Collider) {
	if (object.tag == "Enemy") {
		object.SendMessage("ApplyDamage", damage);
		object.SendMessage("DropCandy");
		object.SendMessage("HitstunImmobilizationPhase", hitstunDuration);
	}
}

function Damage (receivedDamage : float) {
	damage = receivedDamage;
}

function HitstunDuration (receivedHitstunDuration : float) {
	hitstunDuration = receivedHitstunDuration;
}

function Duration (receivedAttackDuration : float) {
	Invoke("DestroySelf", receivedAttackDuration);
}

function DestroySelf () {
	Destroy(gameObject);
}