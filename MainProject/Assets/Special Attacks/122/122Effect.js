#pragma strict

private var damage : float;

function Damage (receivedDamage : float) {
	damage = receivedDamage;
}

function DamageRadius (receivedDamageRadius : float) {
	transform.localScale = Vector3(receivedDamageRadius, receivedDamageRadius, receivedDamageRadius);
}

function OnTriggerEnter (object : Collider) {
	if (object.tag == "Enemy") {
		object.SendMessage("ApplyDamage", damage);
	}
}

function EndStickySlide () {
	Destroy(gameObject);
}