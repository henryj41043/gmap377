#pragma strict

var chocolateDrop : GameObject;
var gummyDrop : GameObject;
var lollipopDrop : GameObject;
var minimumDropRange : float;
var maximumDropRange : float;
var manager : GameObject;
private var candyDrop : int;

var maximumHealth : int;
private var currentHealth : int;

var moveSpeed : float;
var attackRange : float;
var damage : int;
var phaseChange1 : float;
var phaseChange2 : float;
var hitbox : GameObject;
var gravity : float;
private var readyToAttack : boolean;
private var moveDirection : Vector3 = Vector3.zero;
private var rotationLock : boolean;

var movementSlow : float;
var attackSlow : float;

private var playerPositionX : float;
private var playerPositionY : float;
private var playerPositionZ : float;
private var myPositionX : float;
private var myPositionY : float;
private var myPositionZ : float;

function Start () {
	ReadyToAttack();
	currentHealth = maximumHealth;
	rotationLock = false;
}

function Update () {
	var controller : CharacterController = GetComponent(CharacterController);
	var target : GameObject = GameObject.FindGameObjectWithTag("Player");
	transform.rotation.x = 0;
	if (rotationLock == false) {
		transform.LookAt(target.transform);
	}
	if (Vector3.Distance(this.transform.position, target.transform.position) >= attackRange) {
		moveDirection = Vector3(transform.forward.x, gravity, transform.forward.z);
		controller.Move(moveDirection * Time.deltaTime * moveSpeed);
	}
	if (readyToAttack == true && (Vector3.Distance(this.transform.position, target.transform.position) < attackRange)) {
		AttackPhase1();
		NotReadyToAttack();
	}
	if (currentHealth <= 0) {
		KillSelf();
	}
}

function ReadyToAttack () {
	readyToAttack = true;
}

function NotReadyToAttack () {
	readyToAttack = false;
}

function AttackPhase1 () {
	rotationLock = true;
	Invoke("AttackPhase2", phaseChange1 * attackSlow);
}

function AttackPhase2 () {
	Invoke("AttackPhase3", phaseChange2);
	hitbox.SetActive(true);
	hitbox.SendMessage("Damage", damage);
}

function AttackPhase3 () {
	rotationLock = false;
	ReadyToAttack();
	hitbox.SetActive(false);
}

function MovementSlow (receivedMovementSlow : float) {
	if (receivedMovementSlow < movementSlow) {
		movementSlow = receivedMovementSlow;
		CancelInvoke("RevertSlows");
		Invoke("RevertSlows", 0.5);
	}
}

function AttackSlow (receivedAttackSlow : float) {
	if (receivedAttackSlow < attackSlow) {
		attackSlow = receivedAttackSlow;
		CancelInvoke("RevertSlows");
		Invoke("RevertSlows", 0.5);
	}
}

function RevertSlows () {
	movementSlow = 1;
	attackSlow = 1;
}

function ApplyDamage (damage : int) {
	currentHealth -= damage;
}

function KillSelf() {
	DropCandy();
	Destroy(gameObject);
}

function DropCandy() {
	candyDrop = Random.Range(1, 4);
	if (candyDrop == 1) {
		Instantiate(chocolateDrop, Vector3(transform.position.x + Random.Range(minimumDropRange, maximumDropRange), transform.position.y, transform.position.z + Random.Range(minimumDropRange, maximumDropRange)), transform.rotation);
	}
	if (candyDrop == 2) {
		Instantiate(gummyDrop, Vector3(transform.position.x + Random.Range(minimumDropRange, maximumDropRange), transform.position.y, transform.position.z + Random.Range(minimumDropRange, maximumDropRange)), transform.rotation);
	}
	if (candyDrop == 3) {
		Instantiate(lollipopDrop, Vector3(transform.position.x + Random.Range(minimumDropRange, maximumDropRange), transform.position.y, transform.position.z + Random.Range(minimumDropRange, maximumDropRange)), transform.rotation);
	}
}