#pragma strict

private var movement : CharacterMotor;

private var phaseChange1 : float;
private var phaseChange2 : float;

private var travelSpeed : float;
private var recoverSpeed : int;

private var moveDirection : Vector3 = Vector3.zero;
private var controller : CharacterController;

private var dodging : boolean;

function StickySlidePhaseChange1(receivedPhaseChange1 : float) {
	phaseChange1 = receivedPhaseChange1;
}

function StickySlidePhaseChange2(receivedPhaseChange2 : float) {
	phaseChange2 = receivedPhaseChange2;
}

function StickySlideTravelSpeed(receivedTravelSpeed : float) {
	travelSpeed = receivedTravelSpeed;
}

function StickySlideRecoverSpeed(receivedRecoverSpeed : float) {
	recoverSpeed = receivedRecoverSpeed;
}

function Start () {
	controller = GetComponent(CharacterController);
}

function Update () {
	if (dodging == true) {
		controller.Move(moveDirection * Time.deltaTime * travelSpeed);
	}
}

function StickySlidePhase1 () {
	dodging = false;
	moveDirection = transform.forward;
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
	Physics.IgnoreLayerCollision(8, 9, false);
	dodging = false;
	movement = GetComponent(CharacterMotor);
	movement.enabled = true;
	BroadcastMessage("EndStickySlide");
}