#pragma strict

function OnTriggerEnter (object : Collider) {
	if (object.name ==  "113Prefab(Clone)") {
		Destroy(gameObject);
	}
}