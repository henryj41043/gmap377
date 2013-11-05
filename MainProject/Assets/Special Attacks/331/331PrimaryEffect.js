#pragma strict

var Explosion : GameObject;
var ChocolatePool : GameObject;

var distanceToGround : float;

private var damage : float;
private var damageRadius : float;
private var chocolateRadius : float;
private var movementSlow : float;
private var attackSlow : float;
private var tickInterval : float;
private var explosionDuration : float;
private var chocolateDuration : float;

function Update () {
	var hit : RaycastHit;
	if (Physics.Raycast(transform.position, Vector3.down, hit, distanceToGround) && hit.transform.tag == "Ground") {
		Explode();
	}
}

/*function OnCollisionEnter (object : Collision) {
	if (object.gameObject.tag == "Ground") {
		Explode();
	}
}*/

function Damage (receivedDamage : float) {
	damage = receivedDamage;
}

function DamageRadius (receivedDamageRadius : float) {
	damageRadius = receivedDamageRadius;
}

function FondueSize (receivedFondueSize : float) {
	transform.localScale = Vector3(receivedFondueSize, receivedFondueSize, receivedFondueSize);
}

function ChocolateRadius (receivedChocolateRadius : float) {
	chocolateRadius = receivedChocolateRadius;
}

function MovementSlow (receivedMovementSlow : float) {
	movementSlow = receivedMovementSlow;
}

function AttackSlow (receivedAttackSlow : float) {
	attackSlow = receivedAttackSlow;
}

function TickInterval (receivedTickInterval : float) {
	tickInterval = receivedTickInterval;
}

function ExplosionDuration (receivedExplosionDuration : float) {
	explosionDuration = receivedExplosionDuration;
}

function ChocolateDuration (receivedChocolateDuration : float) {
	chocolateDuration = receivedChocolateDuration;
}

function Explode () {
	var Explosion : GameObject = Instantiate(Explosion, transform.position, transform.rotation);
	Explosion.SendMessage("Damage", damage);
	Explosion.SendMessage("DamageRadius", damageRadius);
	Explosion.SendMessage("ExplosionDuration", explosionDuration);
	var ChocolatePool : GameObject = Instantiate(ChocolatePool, transform.position, transform.rotation);
	ChocolatePool.SendMessage("ChocolateRadius", chocolateRadius);
	ChocolatePool.SendMessage("MovementSlow", movementSlow);
	ChocolatePool.SendMessage("AttackSlow", attackSlow);
	ChocolatePool.SendMessage("TickInterval", tickInterval);
	ChocolatePool.SendMessage("ChocolateDuration", chocolateDuration);
	Destroy(gameObject);
}