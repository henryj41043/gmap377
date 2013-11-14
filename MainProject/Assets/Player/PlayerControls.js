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
var baseAttackDamageL0 : float;
var baseAttackRangeL0 : float;
var baseAttackDurationL0 : float;
var attackMovementSpeedL0 : float;
var attackWindupPeriodL0 : float;
var attackStrikingPeriodL0 : float;
var attackCooldownPeriodL0 : float;
var attackForwardFactorL0 : float;
var attackBackwardFactorL0 : float;
var attackSidewaysFactorL0 : float;
var finalHitL0 : int;
var currentHitL0 : int;
private var attackFactorL0 : float;
private var attackingL0 : boolean;
var baseAttackDamageR0 : float;
var baseAttackRangeR0 : float;
var baseAttackDurationR0 : float;
var attackWindupPeriodR0 : float;
var attackStrikingPeriodR0 : float;
var attackCooldownPeriodR0 : float;

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
var hitboxL0 : Rigidbody;
var hitboxR0 : Rigidbody;

//Health parameters
var hitstunDuration : float;

//Other parameters
private var playerTransformation : int = 0;
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
	if (ableToAttack == true) {
		if (playerTransformation == 0) {
			if (Input.GetMouseButtonDown(0)) {
				if (Input.GetKey(KeyCode.W)) {
					attackFactorL0 = attackForwardFactorL0;
					moveDirection = Vector3(transform.forward.x, gravity, transform.forward.z);
					AttackWindupPhaseL0();
				}
				else if (Input.GetKey(KeyCode.S)) {
					attackFactorL0 = attackBackwardFactorL0;
					moveDirection = Vector3(-transform.forward.x, gravity, -transform.forward.z);
					AttackWindupPhaseL0();
				}
				else if (Input.GetKey(KeyCode.D)) {
					attackFactorL0 = attackSidewaysFactorL0;
					moveDirection = Vector3(transform.right.x, gravity, transform.right.z);
					AttackWindupPhaseL0();
				}
				else if (Input.GetKey(KeyCode.A)) {
					attackFactorL0 = attackSidewaysFactorL0;
					moveDirection = Vector3(-transform.right.x, gravity, -transform.right.z);
					AttackWindupPhaseL0();
				}
				else {
					attackFactorL0 = attackForwardFactorL0;
					moveDirection = Vector3(transform.forward.x, gravity, transform.forward.z);
					AttackWindupPhaseL0();
				}
			}
			if (Input.GetMouseButtonDown(1)) {
				if (Input.GetKey(KeyCode.W)) {
					AttackWindupPhaseR0();
				}
				else if (Input.GetKey(KeyCode.S)) {
					AttackWindupPhaseR0();
				}
				else if (Input.GetKey(KeyCode.D)) {
					AttackWindupPhaseR0();
				}
				else if (Input.GetKey(KeyCode.A)) {
					AttackWindupPhaseR0();
				}
				else {
					AttackWindupPhaseR0();
				}
			}
		}
		
		if (playerTransformation == 1) {
			if (Input.GetMouseButtonDown(0)) {
				if (Input.GetKey(KeyCode.W)) {
					attackFactorL0 = attackForwardFactorL0;
					moveDirection = Vector3(transform.forward.x, gravity, transform.forward.z);
					AttackWindupPhaseL0();
				}
				else if (Input.GetKey(KeyCode.S)) {
					attackFactorL0 = attackBackwardFactorL0;
					moveDirection = Vector3(-transform.forward.x, gravity, -transform.forward.z);
					AttackWindupPhaseL0();
				}
				else if (Input.GetKey(KeyCode.D)) {
					attackFactorL0 = attackSidewaysFactorL0;
					moveDirection = Vector3(transform.right.x, gravity, transform.right.z);
					AttackWindupPhaseL0();
				}
				else if (Input.GetKey(KeyCode.A)) {
					attackFactorL0 = attackSidewaysFactorL0;
					moveDirection = Vector3(-transform.right.x, gravity, -transform.right.z);
					AttackWindupPhaseL0();
				}
				else {
					attackFactorL0 = attackForwardFactorL0;
					moveDirection = Vector3(transform.forward.x, gravity, transform.forward.z);
					AttackWindupPhaseL0();
				}
			}
			if (Input.GetMouseButtonDown(1)) {
				GetComponentInChildren(FondueStrike).FondueStrike();
			}
		}
		
		if (playerTransformation == 2) {
			if (Input.GetMouseButtonDown(0)) {
				if (Input.GetKey(KeyCode.W)) {
					attackFactorL0 = attackForwardFactorL0;
					moveDirection = Vector3(transform.forward.x, gravity, transform.forward.z);
					AttackWindupPhaseL0();
				}
				else if (Input.GetKey(KeyCode.S)) {
					attackFactorL0 = attackBackwardFactorL0;
					moveDirection = Vector3(-transform.forward.x, gravity, -transform.forward.z);
					AttackWindupPhaseL0();
				}
				else if (Input.GetKey(KeyCode.D)) {
					attackFactorL0 = attackSidewaysFactorL0;
					moveDirection = Vector3(transform.right.x, gravity, transform.right.z);
					AttackWindupPhaseL0();
				}
				else if (Input.GetKey(KeyCode.A)) {
					attackFactorL0 = attackSidewaysFactorL0;
					moveDirection = Vector3(-transform.right.x, gravity, -transform.right.z);
					AttackWindupPhaseL0();
				}
				else {
					attackFactorL0 = attackForwardFactorL0;
					moveDirection = Vector3(transform.forward.x, gravity, transform.forward.z);
					AttackWindupPhaseL0();
				}
			}
			if (Input.GetMouseButtonDown(1)) {
				GetComponentInChildren(StickySlide).StickySlide();
			}
		}
		
		if (playerTransformation == 3) {
			if (Input.GetMouseButtonDown(0)) {
				if (Input.GetKey(KeyCode.W)) {
					attackFactorL0 = attackForwardFactorL0;
					moveDirection = Vector3(transform.forward.x, gravity, transform.forward.z);
					AttackWindupPhaseL0();
				}
				else if (Input.GetKey(KeyCode.S)) {
					attackFactorL0 = attackBackwardFactorL0;
					moveDirection = Vector3(-transform.forward.x, gravity, -transform.forward.z);
					AttackWindupPhaseL0();
				}
				else if (Input.GetKey(KeyCode.D)) {
					attackFactorL0 = attackSidewaysFactorL0;
					moveDirection = Vector3(transform.right.x, gravity, transform.right.z);
					AttackWindupPhaseL0();
				}
				else if (Input.GetKey(KeyCode.A)) {
					attackFactorL0 = attackSidewaysFactorL0;
					moveDirection = Vector3(-transform.right.x, gravity, -transform.right.z);
					AttackWindupPhaseL0();
				}
				else {
					attackFactorL0 = attackForwardFactorL0;
					moveDirection = Vector3(transform.forward.x, gravity, transform.forward.z);
					AttackWindupPhaseL0();
				}
			}
			if (Input.GetMouseButtonDown(1)) {
				GetComponentInChildren(TruffleFrag).TruffleFrag();
			}
		}
	}
	
	if (attackingL0 == true) {
		controller.Move(moveDirection * attackMovementSpeedL0 * attackFactorL0 * Time.deltaTime);
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
function AttackWindupPhaseL0 () {
	CountCurrentHit();
	AbleToMove(false);
	AbleToAttack(false);
	AbleToDodge(false);
	AbleToSpecial(false);
	AbleToRotate(false);
	attackingL0 = true;
	Invoke("AttackStrikingPhaseL0", attackWindupPeriodL0);
}

function AttackStrikingPhaseL0 () {
	attackingL0 = false;
	var hitboxL0 : Rigidbody = Instantiate(hitboxL0, transform.position, transform.rotation);
	hitboxL0.velocity = transform.TransformDirection(Vector3(0, 0, baseAttackRangeL0));
	hitboxL0.SendMessage("Damage", baseAttackDamageL0);
	hitboxL0.SendMessage("Duration", baseAttackDurationL0);
	if (currentHitL0 == finalHitL0) {
		hitboxL0.SendMessage("FinalHit");
		currentHitL0 = 0;
	}
	Invoke("AttackCooldownPhaseL0", attackStrikingPeriodL0);
}

function AttackCooldownPhaseL0 () {
	Invoke("AttackEndPhaseL0", attackCooldownPeriodL0);
}

function AttackEndPhaseL0 () {
	AbleToMove(true);
	AbleToAttack(true);
	AbleToDodge(true);
	AbleToSpecial(true);	
	AbleToRotate(true);
}

function AttackWindupPhaseR0 () {
	AbleToMove(false);
	AbleToAttack(false);
	AbleToDodge(false);
	AbleToSpecial(false);
	AbleToRotate(false);
	Invoke("AttackStrikingPhaseR0", attackWindupPeriodR0);
}

function AttackStrikingPhaseR0 () {
	var hitboxR0 : Rigidbody = Instantiate(hitboxR0, transform.position, transform.rotation);
	hitboxR0.velocity = transform.TransformDirection(Vector3(0, 0, baseAttackRangeR0));
	hitboxR0.SendMessage("Damage", baseAttackDamageR0);
	hitboxR0.SendMessage("Duration", baseAttackDurationR0);
	Invoke("AttackCooldownPhaseR0", attackStrikingPeriodR0);
}

function AttackCooldownPhaseR0 () {
	Invoke("AttackEndPhaseR0", attackCooldownPeriodR0);
}

function AttackEndPhaseR0 () {
	AbleToMove(true);
	AbleToAttack(true);
	AbleToDodge(true);
	AbleToSpecial(true);	
	AbleToRotate(true);
}

function CountCurrentHit () {
	if (currentHitL0 < finalHitL0) {
		currentHitL0 += 1;
	}
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


//Health functions
function HitstunImmobilizationPhase() {
	AbleToMove(false);
	AbleToAttack(false);
	AbleToDodge(false);
	AbleToSpecial(false);
	AbleToRotate(false);
	Invoke("HitstunRecoveryPhase", hitstunDuration);
}

function HitstunRecoveryPhase () {
	AbleToMove(true);
	AbleToAttack(true);
	AbleToDodge(true);
	AbleToSpecial(true);	
	AbleToRotate(true);
}

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

function CurrentTransformation (receivedInput : int) {
	playerTransformation = receivedInput;
}
