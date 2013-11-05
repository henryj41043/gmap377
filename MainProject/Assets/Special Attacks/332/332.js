#pragma strict

var SweetFrostEffect : GameObject;

var radius : float;
var movementSlow : float;
var attackSlow : float;
var damagePerTick : float;
var tickInterval : float;
var duration : float;

function SweetFrost () {
	var SweetFrost : GameObject = Instantiate(SweetFrostEffect, transform.position + (transform.forward), transform.rotation);
	SweetFrost.SendMessage("Radius", radius);
	SweetFrost.SendMessage("MovementSlow", movementSlow);
	SweetFrost.SendMessage("AttackSlow", attackSlow);
	SweetFrost.SendMessage("DamagePerTick", damagePerTick);
	SweetFrost.SendMessage("TickInterval", tickInterval);
	SweetFrost.SendMessage("Duration", duration);
}