#pragma strict

function OnTriggerEnter(object : Collider) {
	if (object.tag == "Player") {
		Application.LoadLevel(2);
	}
}