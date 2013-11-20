#pragma strict

var enemies : GameObject;

function Start() {
	enemies.SetActive(false);
}

function OnTriggerEnter (object : Collider) {
	if (object.tag == "Player") {
		ActivateEnemies();
	}
}

function ActivateEnemies() {
	enemies.SetActive(true);
}