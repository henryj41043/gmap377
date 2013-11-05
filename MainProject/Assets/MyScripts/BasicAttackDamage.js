#pragma strict

var damage : int;
var range : int;

var AttackPhase2 : boolean;

var hitInfo : RaycastHit;

function Start () {
	AttackPhase2 = false;
}

function Update () {
	var fwd = transform.TransformDirection (Vector3.forward);
	if (Physics.Raycast (transform.position, fwd, hitInfo, range) && hitInfo.transform.tag == "Enemy" && AttackPhase2 == true) {
		Debug.Log("Dealing damage to enemy");
		hitInfo.collider.gameObject.SendMessage("TakeDamage", damage);
	}
}

function OnTriggerStay (object:Collider) {
	if (object.gameObject.tag == "Enemy" && AttackPhase2 == true) {
		Debug.Log("Dealing damage to enemy");
		object.SendMessage("TakeDamage", damage);
	}
}

function StartAttackPhase2 () {
	AttackPhase2 = true;
	Debug.Log("Start AP2");
}

function EndAttackPhase2 () {
	AttackPhase2 = false;
	Debug.Log("Start AP3");
}