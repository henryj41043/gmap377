#pragma strict

private var damage : float;
private var finalHit : boolean;

function Start () {
	finalHit = false;
}

function OnTriggerEnter (object : Collider) {
	if (object.tag == "Enemy") {
		object.SendMessage("ApplyDamage", damage);
		if (finalHit == true) {
			object.SendMessage("DropCandy");
			finalHit = false;
		}
	}
}

function Damage (receivedDamage : float) {
	damage = receivedDamage;
}

function FinalHit () {
	finalHit = true;
}

function Duration (receivedAttackDuration : float) {
	Invoke("DestroySelf", receivedAttackDuration);
}

function DestroySelf () {
	Destroy(gameObject);
}