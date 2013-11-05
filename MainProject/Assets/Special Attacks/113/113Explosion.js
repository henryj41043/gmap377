#pragma strict

private var damage : float;

function Damage (receivedDamage : float) {
	damage = receivedDamage;
}

function ExplosionWidth (receivedExplosionWidth : float) {
	transform.localScale = Vector3(receivedExplosionWidth, receivedExplosionWidth, receivedExplosionWidth);
}

function ExplosionDuration (receivedExplosionDuration : float) {
	Invoke("DestroySelf", receivedExplosionDuration);
}

function OnTriggerEnter (object : Collider) {
	if (object.tag == "Enemy") {
		object.SendMessage("ApplyDamage", damage);
	}
}

function DestroySelf () {
	Destroy(gameObject);
}