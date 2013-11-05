#pragma strict

var FondueStrikePrimaryEffect : Rigidbody;

var distance : float;
var height : float;
var damage : float;
var damageRadius : float;
var fondueSize : float;
var speed : float;
var chocolateRadius : float;
var movementSlow : float;
var attackSlow : float;
var tickInterval : float;
var explosionDuration : float;
var chocolateDuration : float;

function FondueStrike () {
	var FondueStrikePrimaryEffect : Rigidbody = Instantiate(FondueStrikePrimaryEffect, transform.position + (transform.forward * distance) + (transform.up * height), transform.rotation);
	FondueStrikePrimaryEffect.velocity = Vector3(0, -speed, 0);
	FondueStrikePrimaryEffect.SendMessage("Damage", damage);
	FondueStrikePrimaryEffect.SendMessage("DamageRadius", damageRadius);
	FondueStrikePrimaryEffect.SendMessage("FondueSize", fondueSize);
	FondueStrikePrimaryEffect.SendMessage("ChocolateRadius", chocolateRadius);
	FondueStrikePrimaryEffect.SendMessage("MovementSlow", movementSlow);
	FondueStrikePrimaryEffect.SendMessage("AttackSlow", attackSlow);
	FondueStrikePrimaryEffect.SendMessage("TickInterval", tickInterval);
	FondueStrikePrimaryEffect.SendMessage("ExplosionDuration", explosionDuration);
	FondueStrikePrimaryEffect.SendMessage("ChocolateDuration", chocolateDuration);
}