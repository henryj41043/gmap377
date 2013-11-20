#pragma strict

var chocolateDrop : GameObject;
var gummyDrop : GameObject;
var lollipopDrop : GameObject;
var minimumDropRange : float;
var maximumDropRange : float;
private var candyDrop : int;

var ableToMove : boolean;
var moveSpeed : float;

var ableToAttack : boolean;
var hitbox : Rigidbody;
var baseAttackDamage : float;
var baseAttackRange : float;
var baseAttackDuration : float;
var baseAttackHitstunDuration : float;
var attackDetectionRange : float;
var attackMovementSpeed : float;
var attackWindupPeriod : float;
var attackStrikingPeriod : float;
var attackCooldownPeriod : float;

var ableToRotate : boolean;

var gravity : float;

var deathDuration : float;
var amIDead : boolean;

private var moveDirection : Vector3 = Vector3.zero;
private var controller : CharacterController;
private var player : GameObject;

function Start () {
	amIDead = false;
	AbleToMove(true);
	AbleToAttack(true);
	AbleToRotate(true);
	controller = GetComponent(CharacterController);
	player = GameObject.FindGameObjectWithTag("Player");
}

function Update () {
	transform.rotation.x = 0;
	if (ableToRotate == true) {
		transform.LookAt(player.transform);
	}
	
	if (ableToMove == true) {
		moveDirection = Vector3(transform.forward.x, gravity, transform.forward.z);
		controller.Move(moveDirection * Time.deltaTime * moveSpeed);
		BroadcastMessage("PlayMinerWalk");
	}

	if (ableToAttack == true) {
		if ((Vector3.Distance(transform.position, player.transform.position) < attackDetectionRange)) {
			AttackWindupPhase();
		}
	}
	
	if (amIDead == true) {
		AbleToMove(false);
		AbleToAttack(false);
		AbleToRotate(false);
	}
}

function AttackWindupPhase () {
	BroadcastMessage("PlayMinerAttack");
	AbleToMove(false);
	AbleToAttack(false);
	AbleToRotate(false);
	Invoke("AttackStrikingPhase", attackWindupPeriod);
}

function AttackStrikingPhase () {
	var hitbox : Rigidbody = Instantiate(hitbox, transform.position, transform.rotation);
	hitbox.velocity = transform.TransformDirection(Vector3(0, 0, baseAttackRange));
	hitbox.SendMessage("Damage", baseAttackDamage);
	hitbox.SendMessage("Duration", baseAttackDuration);
	hitbox.SendMessage("HitstunDuration", baseAttackHitstunDuration);
	Invoke("AttackCooldownPhase", attackStrikingPeriod);
}

function AttackCooldownPhase () {
	Invoke("AttackEndPhase", attackCooldownPeriod);
}

function AttackEndPhase () {
	AbleToMove(true);
	AbleToAttack(true);
	AbleToRotate(true);
}

function AbleToMove (receivedInput : boolean) {
	ableToMove = receivedInput;
}

function AbleToAttack (receivedInput : boolean) {
	ableToAttack = receivedInput;
}

function AbleToRotate (receivedInput : boolean) {
	ableToRotate = receivedInput;
}

function HitstunImmobilizationPhase(hitstunDuration : float) {
	BroadcastMessage("PlayMinerRecoil");
	CancelInvoke("HitstunRecoveryPhase");
	AbleToMove(false);
	AbleToAttack(false);
	AbleToRotate(false);
	Invoke("HitstunRecoveryPhase", hitstunDuration);
}

function HitstunRecoveryPhase () {
	AbleToMove(true);
	AbleToAttack(true);
	AbleToRotate(true);
}

function PlayMinerDeath () {
	amIDead = true;
	Destroy(gameObject, deathDuration);
}

/*function DropCandy() {
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
}*/