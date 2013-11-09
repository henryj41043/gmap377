#pragma strict
//Movement parameters
var ableToMove : boolean;
var moveSpeed : float;
var moveForwardFactor : float;
var moveBackwardFactor : float;
var moveSidewaysFactor : float;
private var moveFactor : float;

//Attack parameters
var ableToAttack : boolean;
var hitbox : GameObject;
var baseAttackDamage : float;
var baseAttackRange : float;
var attackMovementSpeed : float;
var attackWindupPeriod : float;
var attackStrikingPeriod : float;
var attackCooldownPeriod : float;
var attackForwardFactor : float;
var attackBackwardFactor : float;
var attackSidewaysFactor : float;
var finalHit : int;
var currentHit : int;
private var attackDamage : float;
private var attackRange : float;
private var attackFactor : float;
private var attacking : boolean;

//Dodge parameters
var ableToDodge : boolean;
var dodgeMovementSpeed : float;
var dodgeWindupPeriod : float;
var dodgeMovementPeriod : float;
var dodgeCooldownPeriod : float;
var dodgeForwardFactor : float;
var dodgeBackwardFactor : float;
var dodgeSidewaysFactor : float;
private var dodgeFactor : float;
private var dodging : boolean;

//Special parameters
var ableToSpecial : boolean;

//Other parameters
var gravity : float;
var ableToRotate : boolean;
var cameraTarget : GameObject;
private var moveDirection : Vector3 = Vector3.zero;
private var controller : CharacterController;

function Start () {
	AbleToMove(true);
	AbleToAttack(true);
	AbleToDodge(true);
	AbleToSpecial(true);
	AbleToRotate(true);
	controller = GetComponent(CharacterController);
}

function Update () {
	//Receive rotational input from the other object and assign it to myself
	if (ableToRotate == true) {
		transform.rotation = cameraTarget.transform.rotation;
	}

	//Movement input
	if (ableToMove == true) {
		if (Input.GetKey(KeyCode.W)) {
			moveFactor = moveForwardFactor;
			moveDirection = Vector3(transform.forward.x, gravity, transform.forward.z);
			controller.Move(moveDirection * moveSpeed * moveFactor * Time.deltaTime);
		}
		if (Input.GetKey(KeyCode.S)) {
			moveFactor = moveBackwardFactor;
			moveDirection = Vector3(-transform.forward.x, gravity, -transform.forward.z);
			controller.Move(moveDirection * moveSpeed * moveFactor * Time.deltaTime);
		}
		if (Input.GetKey(KeyCode.D)) {
			moveFactor = moveSidewaysFactor;
			moveDirection = Vector3(transform.right.x, gravity, transform.right.z);
			controller.Move(moveDirection * moveSpeed * moveFactor * Time.deltaTime);
		}
		if (Input.GetKey(KeyCode.A)) {
			moveFactor = moveSidewaysFactor;
			moveDirection = Vector3(-transform.right.x, gravity, -transform.right.z);
			controller.Move(moveDirection * moveSpeed * moveFactor * Time.deltaTime);
		}
	}
	
	//Attack input
	if (ableToAttack == true && Input.GetMouseButtonDown(0)) {
		if (Input.GetKey(KeyCode.W)) {
			attackFactor = attackForwardFactor;
			moveDirection = Vector3(transform.forward.x, gravity, transform.forward.z);
			AttackWindupPhase();
		}
		else if (Input.GetKey(KeyCode.S)) {
			attackFactor = attackBackwardFactor;
			moveDirection = Vector3(-transform.forward.x, gravity, -transform.forward.z);
			AttackWindupPhase();
		}
		else if (Input.GetKey(KeyCode.D)) {
			attackFactor = attackSidewaysFactor;
			moveDirection = Vector3(transform.right.x, gravity, transform.right.z);
			AttackWindupPhase();
		}
		else if (Input.GetKey(KeyCode.A)) {
			attackFactor = attackSidewaysFactor;
			moveDirection = Vector3(-transform.right.x, gravity, -transform.right.z);
			AttackWindupPhase();
		}
		else {
			attackFactor = attackForwardFactor;
			moveDirection = Vector3(transform.forward.x, gravity, transform.forward.z);
			AttackWindupPhase();
		}		
	}
	
	if (attacking == true) {
		controller.Move(moveDirection * attackMovementSpeed * attackFactor * Time.deltaTime);
	}
	
	//Dodge input
	if (ableToDodge == true && Input.GetKeyDown("space")) {
		if (Input.GetKey(KeyCode.W)) {
			dodgeFactor = dodgeForwardFactor;
			moveDirection = Vector3(transform.forward.x, gravity, transform.forward.z);
			DodgeWindupPhase();
		}
		else if (Input.GetKey(KeyCode.S)) {
			dodgeFactor = dodgeBackwardFactor;
			moveDirection = Vector3(-transform.forward.x, gravity, -transform.forward.z);
			DodgeWindupPhase();
		}
		else if (Input.GetKey(KeyCode.D)) {
			dodgeFactor = dodgeSidewaysFactor;
			moveDirection = Vector3(transform.right.x, gravity, transform.right.z);
			DodgeWindupPhase();
		}
		else if (Input.GetKey(KeyCode.A)) {
			dodgeFactor = dodgeSidewaysFactor;
			moveDirection = Vector3(-transform.right.x, gravity, -transform.right.z);
			DodgeWindupPhase();
		}
		else {
			dodgeFactor = dodgeForwardFactor;
			moveDirection = Vector3(transform.forward.x, gravity, transform.forward.z);
			DodgeWindupPhase();
		}
	}
	
	if (dodging == true) {
		controller.Move(moveDirection * dodgeMovementSpeed * dodgeFactor * Time.deltaTime);
	}
	
	//Special input
	if (ableToSpecial == true) {
	
	}
}

//Movement functions

//Attack functions
function AttackWindupPhase () {
	CountCurrentHit();
	AbleToMove(false);
	AbleToAttack(false);
	AbleToDodge(false);
	AbleToSpecial(false);
	AbleToRotate(false);
	attacking = true;
	Invoke("AttackStrikingPhase", attackWindupPeriod);
}

function AttackStrikingPhase () {
	attacking = false;
	hitbox.SetActive(true);
	hitbox.SendMessage("Damage", attackDamage);
	if (currentHit == finalHit) {
		hitbox.SendMessage("FinalHit");
		currentHit = 0;
	}
	Invoke("AttackCooldownPhase", attackStrikingPeriod);
}

function AttackCooldownPhase () {
	hitbox.SetActive(false);
	Invoke("AttackEndPhase", attackCooldownPeriod);
}

function AttackEndPhase () {
	AbleToMove(true);
	AbleToAttack(true);
	AbleToDodge(true);
	AbleToSpecial(true);	
	AbleToRotate(true);
}

function CountCurrentHit () {
	if (currentHit < finalHit) {
		currentHit += 1;
	}
}

function IncreaseDamage (receivedDamageIncrease : float) {
	attackDamage = baseAttackDamage + receivedDamageIncrease;
}

function IncreaseDamageDuration (receivedDamageDuration : float) {
	Invoke("RevertDamage", receivedDamageDuration);
}

function IncreaseRange (receivedRangeIncrease : float) {
	attackRange = baseAttackRange + receivedRangeIncrease;
}

function IncreaseRangeDuration (receivedRangeDuration : float) {
	Invoke("RevertRange", receivedRangeDuration);
}

function RevertDamage () {
	attackDamage = baseAttackDamage;
}

function RevertRange () {
	attackRange = baseAttackRange;
}

//Dodge functions
function DodgeWindupPhase () {
	AbleToMove(false);
	AbleToAttack(false);
	AbleToDodge(false);
	AbleToSpecial(false);
	AbleToRotate(false);
	Invoke("DodgeMovementPhase", dodgeWindupPeriod);
}

function DodgeMovementPhase () {
	dodging = true;
	Physics.IgnoreLayerCollision(8, 9, true);
	Invoke("DodgeCooldownPhase", dodgeMovementPeriod);
}

function DodgeCooldownPhase () {
	dodging = false;
	Physics.IgnoreLayerCollision(8, 9, false);
	Invoke("DodgeEndPhase", dodgeCooldownPeriod);
}

function DodgeEndPhase () {
	AbleToMove(true);
	AbleToAttack(true);
	AbleToDodge(true);
	AbleToSpecial(true);	
	AbleToRotate(true);
}

//Special functions


//Boolean controllers
function AbleToMove (receivedInput : boolean) {
	ableToMove = receivedInput;
}

function AbleToAttack (receivedInput : boolean) {
	ableToAttack = receivedInput;
}

function AbleToDodge (receivedInput : boolean) {
	ableToDodge = receivedInput;
}

function AbleToSpecial (receivedInput : boolean) {
	ableToSpecial = receivedInput;
}

function AbleToRotate (receivedInput : boolean) {
	ableToRotate = receivedInput;
}