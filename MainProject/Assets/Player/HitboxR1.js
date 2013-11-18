#pragma strict

private var damage : float;

function Range (receivedRange : float) {
	transform.localScale = Vector3(receivedRange, receivedRange, receivedRange);
}

function OnTriggerEnter (object : Collider) {
	if (object.tag == "Enemy") {
		object.SendMessage("ApplyDamage", damage);
		object.SendMessage("DropCandy");
	}
}

function Damage (receivedDamage : float) {
	damage = receivedDamage;
}