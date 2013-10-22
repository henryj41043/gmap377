#pragma strict

private var movement : CharacterMotor;

private var currentHit : int;
var phaseChange : float;
private var ReadyToAttack : boolean;

var hitbox : GameObject;

var damage : float;
private var baseDamage : float;
var range : float;
private var baseRange : float;
var windupMovementSpeed : float;

private var hitInfo : RaycastHit;

private var moveDirection : Vector3 = Vector3.zero;

function Start () {
	baseDamage = damage;
	baseRange = range;
	currentHit = 0;
	ReadyToAttack = true;
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

function Update () {
	if (Input.GetMouseButtonDown(0) && ReadyToAttack == true) {
		AttackPhase1();
		ReadyToAttack = false;
	}
}

function AttackPhase1 () {
	Invoke("AttackPhase2", phaseChange);
	movement = GetComponent(CharacterMotor);
	movement.enabled = false;
}

function AttackPhase2 () {
	//Striking phase, deal damage
	Invoke("AttackPhase3", phaseChange);
	//hitbox.SetActive(true);
	
	
	var fwd = transform.TransformDirection (Vector3.forward);
	if (Physics.Raycast (transform.position, fwd, hitInfo, range) && hitInfo.transform.tag == "Enemy") {
		//Debug.Log("Dealing damage to enemy");
		hitInfo.collider.gameObject.SendMessage("ApplyDamage", damage);
	}
}

function AttackPhase3 () {
	movement = GetComponent(CharacterMotor);
	movement.enabled = true;
	ReadyToAttack = true;
	//hitbox.SetActive(false);
}