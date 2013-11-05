#pragma strict

function OnTriggerEnter (object : Collider) {
	if (object.name ==  "112PrimaryEffectPrefab(Clone)") {
		Destroy(gameObject);
	}
}