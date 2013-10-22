#pragma strict

var GummyBindExplosion : GameObject;

private var pullStrength : float;
private var pullRadius : float;
private var pullDuration : float;

function OnTriggerEnter (object : Collider) {
	if (object.name ==  "222LandingZone(Clone)") {
		Explode();
		Destroy(gameObject);
	}
}

function PullStrength (receivedPullStrength : float) {
	pullStrength = receivedPullStrength;
}

function PullRadius (receivedPullRadius : float) {
	pullRadius = receivedPullRadius;
}

function PullDuration (receivedPullDuration : float) {
	pullDuration = receivedPullDuration;
}

function Explode () {
	var GummyBindExplosion : GameObject = Instantiate(GummyBindExplosion, transform.position, transform.rotation);
	GummyBindExplosion.SendMessage("PullStrength", pullStrength);
	GummyBindExplosion.SendMessage("PullRadius", pullRadius);
	GummyBindExplosion.SendMessage("PullDuration", pullDuration);
	Destroy(gameObject);
}