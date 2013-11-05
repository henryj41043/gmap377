#pragma strict

private var movement : CharacterMotor;

<<<<<<< HEAD
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
=======
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
>>>>>>> 447e36a73d7f1336fc81d92d936fdeb47c565cb7
	}
}

function DodgePhase1 () {
<<<<<<< HEAD
	Invoke("DodgePhase2", phaseChange);
=======
	Invoke("DodgePhase2", phaseChange1);
>>>>>>> 447e36a73d7f1336fc81d92d936fdeb47c565cb7
	movement = GetComponent(CharacterMotor);
	movement.enabled = false;
}

function DodgePhase2 () {
<<<<<<< HEAD
	Invoke("DodgePhase3", phaseChange);
	
	transform.position = transform.position + (travelDistance * transform.forward);
}

function DodgePhase3 () {
	movement = GetComponent(CharacterMotor);
	movement.enabled = true;
	readyToDodge = true;
=======
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
>>>>>>> 447e36a73d7f1336fc81d92d936fdeb47c565cb7
}