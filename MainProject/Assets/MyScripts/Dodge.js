#pragma strict

private var movement : CharacterMotor;

var phaseChange : float;
private var readyToDodge : boolean;

var travelDistance : float;
var recoverSpeed : int;

private var moveDirection : Vector3 = Vector3.zero;

function Start () {
	readyToDodge = true;
}

function Update () {
	if (Input.GetKeyDown("space") && readyToDodge == true) {
		DodgePhase1();
		readyToDodge = false;
	}
}

function DodgePhase1 () {
	Invoke("DodgePhase2", phaseChange);
	movement = GetComponent(CharacterMotor);
	movement.enabled = false;
}

function DodgePhase2 () {
	Invoke("DodgePhase3", phaseChange);
	
	transform.position = transform.position + (travelDistance * transform.forward);
}

function DodgePhase3 () {
	movement = GetComponent(CharacterMotor);
	movement.enabled = true;
	readyToDodge = true;
}