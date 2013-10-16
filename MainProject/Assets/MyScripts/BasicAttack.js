#pragma strict

private var movement : CharacterMotor;

private var currentHit : int;
var phaseChange : float;
private var ReadyToAttack : boolean;

var hitbox : GameObject;

var damage : int;
var range : int;
var windupMovementSpeed : int;

private var hitInfo : RaycastHit;

private var moveDirection : Vector3 = Vector3.zero;

function Start () {
	currentHit = 0;
	ReadyToAttack = true;
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
		Debug.Log("Dealing damage to enemy");
		hitInfo.collider.gameObject.SendMessage("TakeDamage", damage);
	}
}

function AttackPhase3 () {
	movement = GetComponent(CharacterMotor);
	movement.enabled = true;
	ReadyToAttack = true;
	//hitbox.SetActive(false);
}