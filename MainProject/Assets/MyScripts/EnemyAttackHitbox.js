#pragma strict

private var damage : float;

function OnTriggerEnter (object : Collider) {
	if (object.tag == "Player") {
		object.SendMessage("ApplyDamage", damage);
	}
}

function Damage (receivedDamage : float) {
	damage = receivedDamage;
}