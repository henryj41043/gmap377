#pragma strict

private var movement : CharacterMotor;

var phaseChange1 : float;
var phaseChange2 : float;
private var readyToDodge : boolean;

var travelSpeed : float;
var recoverSpeed : int;

private var moveDirection : Vector3 = Vector3.zero;
private var controller : CharacterController;

private var dodging : boolean;

function Start () {
	readyToDodge = true;
	dodging = false;
	controller = GetComponent(CharacterController);
}

function Update () {
	if (Input.GetKeyDown("space") && readyToDodge == true) {
		DodgePhase1();
		readyToDodge = false;
	}
	if (dodging == true) {
		controller.Move(moveDirection * Time.deltaTime * travelSpeed);
	}
}

function DodgePhase1 () {
	moveDirection = transform.forward;
	Invoke("DodgePhase2", phaseChange1);
	movement = GetComponent(CharacterMotor);
	movement.enabled = false;
}

function DodgePhase2 () {
	dodging = true;
	Invoke("DodgePhase3", phaseChange2);
}

function DodgePhase3 () {
	dodging = false;
	movement = GetComponent(CharacterMotor);
	movement.enabled = true;
	readyToDodge = true;
}