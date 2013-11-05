#pragma strict

private var damage : float;

function Damage (receivedDamage : float) {
	damage = receivedDamage;
}

function Radius (receivedRadius : float) {
	transform.localScale = Vector3(receivedRadius, receivedRadius, receivedRadius);
}

function Duration (receivedExplosionDuration : float) {
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