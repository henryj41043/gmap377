#pragma strict

function OnTriggerEnter (object : Collider) {
	if (object.name ==  "222Effect(Clone)") {
		Destroy(gameObject);
	}
}