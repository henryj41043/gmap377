#pragma strict

private var movement : CharacterMotor;

var phaseChange1 : float;
var phaseChange2 : float;
private var readyToDodge : boolean;

var travelSpeed : float;
var recoverSpeed : float;
var forwardDodgeFactor : float;
var backwardDodgeFactor : float;
var sidewaysDodgeFactor : float;
private var dodgeFactor : float;

private var moveDirection : Vector3 = Vector3.zero;
private var controller : CharacterController;

private var dodging : boolean;

function Start () {
	dodgeFactor = 0;
	ReadyToDodge();
	dodging = false;
	controller = GetComponent(CharacterController);
}

function ReadyToDodge () {
	readyToDodge = true;
}

function NotReadyToDodge() {
	readyToDodge = false;
}

function Update () {
	if (Input.GetKeyDown("space") && readyToDodge == true) {
		if (Input.GetKey(KeyCode.S)) {
			moveDirection = transform.forward * -1;
			dodgeFactor = backwardDodgeFactor;
			DodgePhase1();
			NotReadyToDodge();
		}
		if (Input.GetKey(KeyCode.A)) {
			moveDirection = transform.right * -1;
			dodgeFactor = sidewaysDodgeFactor;
			DodgePhase1();
			NotReadyToDodge();
		}
		if (Input.GetKey(KeyCode.D)) {
			moveDirection = transform.right;
			dodgeFactor = sidewaysDodgeFactor;
			DodgePhase1();
			NotReadyToDodge();
		}
		if (Input.GetKey(KeyCode.W)) {	
			moveDirection = transform.forward;
			dodgeFactor = forwardDodgeFactor;
			DodgePhase1();
			NotReadyToDodge();
		}
	}
	if (dodging == true) {
		controller.Move(moveDirection * Time.deltaTime * travelSpeed * dodgeFactor);
	}
}

function DodgePhase1 () {
	Invoke("DodgePhase2", phaseChange1);
	movement = GetComponent(CharacterMotor);
	movement.enabled = false;
}

function DodgePhase2 () {
	dodging = true;
	Physics.IgnoreLayerCollision(8, 9, true);
	Invoke("DodgePhase3", phaseChange2);
}

function DodgePhase3 () {
	dodgeFactor = 0;
	Physics.IgnoreLayerCollision(8, 9, false);
	dodging = false;
	Invoke("DodgeEnd", recoverSpeed);
}

function DodgeEnd () {
	movement = GetComponent(CharacterMotor);
	movement.enabled = true;
	ReadyToDodge();
}