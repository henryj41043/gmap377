#pragma strict

var chocolateDrop : GameObject;
var gummyDrop : GameObject;
var lollipopDrop : GameObject;
<<<<<<< HEAD
var candyDrop : int;

var maximumHealth : int;
var currentHealth : int;

var damage : int;
=======
var manager : GameObject;
private var candyDrop : int;

var maximumHealth : int;
private var currentHealth : int;
>>>>>>> 447e36a73d7f1336fc81d92d936fdeb47c565cb7

function Start () {
	currentHealth = maximumHealth;
}

function Update () {
	if (currentHealth <= 0) {
		KillSelf();
	}
}

<<<<<<< HEAD
function TakeDamage (damage : int) {
=======
function ApplyDamage (damage : int) {
>>>>>>> 447e36a73d7f1336fc81d92d936fdeb47c565cb7
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