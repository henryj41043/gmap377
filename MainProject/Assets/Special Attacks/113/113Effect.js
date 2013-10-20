#pragma strict

var TruffleFragExplosion : GameObject;

private var damage : float;
private var explosionWidth : float;
private var explosionDuration : float;

function OnTriggerEnter (object : Collider) {
	if (object.tag == "Enemy") {
		Explode();
	}
	if (object.name ==  "113LandingZonePrefab(Clone)") {
		Destroy(gameObject);
	}
}

function Width (receivedWidth : float) {
	transform.localScale = Vector3(receivedWidth, receivedWidth, receivedWidth);
}

function Damage (receivedDamage : float) {
	damage = receivedDamage;
}

function ExplosionWidth (receivedExplosionWidth : float) {
	explosionWidth = receivedExplosionWidth;
}

function ExplosionDuration (receivedExplosionDuration : float) {
	explosionDuration = receivedExplosionDuration;
}

function Explode () {
	var TruffleFragExplosion : GameObject = Instantiate(TruffleFragExplosion, transform.position, transform.rotation);
	TruffleFragExplosion.SendMessage("ExplosionWidth", explosionWidth);
	TruffleFragExplosion.SendMessage("Damage", damage);
	TruffleFragExplosion.SendMessage("ExplosionDuration", explosionDuration);
	Destroy(gameObject);
}