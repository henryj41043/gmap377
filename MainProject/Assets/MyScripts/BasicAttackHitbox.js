#pragma strict

private var damage : float;

function OnTriggerEnter (object : Collider) {
	if (object.tag == "Enemy") {
		object.SendMessage("ApplyDamage", damage);
	}
}

function Damage (receivedDamage : float) {
	damage = receivedDamage;
}