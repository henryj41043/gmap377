#pragma strict

private var damage : float;
private var hitstunDuration : float;

function OnTriggerEnter (object : Collider) {
	if (object.tag == "Player") {
		object.SendMessage("ApplyDamage", damage);
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