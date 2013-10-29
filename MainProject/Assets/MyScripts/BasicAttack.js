#pragma strict

private var movement : CharacterMotor;

private var currentHit : int;
var phaseChange1 : float;
var phaseChange2 : float;
private var readyToAttack : boolean;

var hitbox : GameObject;

var damage : float;
private var baseDamage : float;
var range : float;
private var baseRange : float;
var windupMovementSpeed : float;

private var hitInfo : RaycastHit;

private var moveDirection : Vector3 = Vector3.zero;
private var rotationDirection : Quaternion;
private var rotationLock : boolean;
private var controller : CharacterController;

private var windupMovement : boolean;

function Start () {

	//add para here for testing
	//damage = OnStartGame.paraArray[2];
	//
	baseDamage = damage;
	baseRange = range;
	currentHit = 0;
	ReadyToAttack();
	controller = GetComponent(CharacterController);
	windupMovement = false;
	rotationLock = false;
}

function IncreaseDamage (receivedDamageIncrease : float) {
	damage = baseDamage + receivedDamageIncrease;
}

function IncreaseDamageDuration (receivedDamageDuration : float) {
	Invoke("RevertDamage", receivedDamageDuration);
}

function IncreaseRange (receivedRangeIncrease : float) {
	range = baseRange + receivedRangeIncrease;
}

function IncreaseRangeDuration (receivedRangeDuration : float) {
	Invoke("RevertRange", receivedRangeDuration);
}

function RevertDamage () {
	damage = baseDamage;
}

function RevertRange () {
	range = baseRange;
}

function ReadyToAttack () {
	readyToAttack = true;
}

function NotReadyToAttack () {
	readyToAttack = false;
}

function Update () {
	if (Input.GetMouseButtonDown(0) && readyToAttack == true) {
		AttackPhase1();
		rotationDirection = transform.rotation;
		NotReadyToAttack();
	}
	if (windupMovement == true) {
		controller.Move(moveDirection * Time.deltaTime * windupMovementSpeed);	
	}
	if (rotationLock == true) {
		transform.rotation = rotationDirection;
	}
}

function AttackPhase1 () {
	rotationLock = true;
	windupMovement = true;
	moveDirection = transform.forward;
	Invoke("AttackPhase2", phaseChange1);
	movement = GetComponent(CharacterMotor);
	movement.enabled = false;
}

function AttackPhase2 () {
	windupMovement = false;
	//Striking phase, deal damage
	Invoke("AttackPhase3", phaseChange2);
	hitbox.SetActive(true);
	hitbox.SendMessage("Damage", damage);
	/*var fwd = transform.TransformDirection (Vector3.forward);
	if (Physics.Raycast (transform.position, fwd, hitInfo, range) && hitInfo.transform.tag == "Enemy") {
		//Debug.Log("Dealing damage to enemy");
		hitInfo.collider.gameObject.SendMessage("ApplyDamage", damage);
	}*/
}

function AttackPhase3 () {
	rotationLock = false;
	movement = GetComponent(CharacterMotor);
	movement.enabled = true;
	ReadyToAttack();
	hitbox.SetActive(false);
}