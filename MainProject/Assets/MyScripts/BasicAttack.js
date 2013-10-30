#pragma strict

private var movement : CharacterMotor;

var phaseChange1 : float;
var phaseChange2 : float;
var readyToAttack : boolean;

var hitbox : GameObject;
var currentHit : int;
var finalHit : int;

var damage : float;
private var baseDamage : float;
var range : float;
private var baseRange : float;
var windupMovementSpeed : float;

private var hitInfo : RaycastHit;

private var moveDirection : Vector3 = Vector3.zero;
private var controller : CharacterController;

private var windupMovement : boolean;

function Start () {
	currentHit = 0;
	//add para here for testing
	damage = OnStartGame.paraArray[2];
	//
	baseDamage = damage;
	baseRange = range;
	ReadyToAttack();
	controller = GetComponent(CharacterController);
	windupMovement = false;
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

function CountCurrentHit () {
	if (currentHit < finalHit) {
		currentHit += 1;
	}
}

function Update () {
	if (Input.GetMouseButtonDown(0) && readyToAttack == true) {
		CountCurrentHit();
		if (currentHit == 1) {
			BroadcastMessage("PlayAttack1");
		}
		if (currentHit == 2) {
			BroadcastMessage("PlayAttack2");
		}
		if (currentHit == 3) {
			BroadcastMessage("PlayAttack3");
		}
		AttackPhase1();
		NotReadyToAttack();
	}
	if (windupMovement == true) {
		controller.Move(moveDirection * Time.deltaTime * windupMovementSpeed);	
	}
}

function AttackPhase1 () {
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
	if (currentHit == finalHit) {
		hitbox.SendMessage("FinalHit");
		currentHit = 0;
	}
	/*var fwd = transform.TransformDirection (Vector3.forward);
	if (Physics.Raycast (transform.position, fwd, hitInfo, range) && hitInfo.transform.tag == "Enemy") {
		//Debug.Log("Dealing damage to enemy");
		hitInfo.collider.gameObject.SendMessage("ApplyDamage", damage);
	}*/
}

function AttackPhase3 () {
	movement = GetComponent(CharacterMotor);
	movement.enabled = true;
	ReadyToAttack();
	hitbox.SetActive(false);
}