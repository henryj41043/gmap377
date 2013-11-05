#pragma strict

var chocolateDrop : GameObject;
var gummyDrop : GameObject;
var lollipopDrop : GameObject;
var candyDrop : int;

var maximumHealth : int;
var currentHealth : int;

var damage : int;

function Start () {
	currentHealth = maximumHealth;
}

function Update () {
	if (currentHealth <= 0) {
		KillSelf();
	}
}

function TakeDamage (damage : int) {
	currentHealth -= damage;
}

function KillSelf() {
	DropCandy();
	Destroy(gameObject);
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