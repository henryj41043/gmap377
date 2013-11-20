#pragma strict

var chocolateDrop : GameObject;
var gummyDrop : GameObject;
var lollipopDrop : GameObject;
var manager : GameObject;
private var candyDrop : int;

var maximumHealth : int;
private var currentHealth : int;

function Start () {
	currentHealth = maximumHealth;
}

function ApplyDamage (damage : int) {
	currentHealth -= damage;
	if (currentHealth <= 0) {
		KillSelf();
	}
}

function KillSelf() {
	BroadcastMessage("PlayGentDeath");
	DropCandy();
}

function DropCandy() {
	candyDrop = Random.Range(1, 4);
	if (candyDrop == 1) {
		Instantiate(chocolateDrop, transform.position, transform.rotation);
	}
	if (candyDrop == 2) {
		Instantiate(gummyDrop, transform.position, transform.rotation);
	}
	if (candyDrop == 3) {
		Instantiate(lollipopDrop, transform.position, transform.rotation);
	}
}