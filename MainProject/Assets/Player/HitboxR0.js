#pragma strict

private var damage : float;

function OnTriggerEnter (object : Collider) {
	if (object.tag == "Enemy") {
		object.SendMessage("ApplyDamage", damage);
		object.SendMessage("DropCandy");
	}
}

function Damage (receivedDamage : float) {
	damage = receivedDamage;
}

function Duration (receivedAttackDuration : float) {
	Invoke("DestroySelf", receivedAttackDuration);
}

function DestroySelf () {
	Destroy(gameObject);
}