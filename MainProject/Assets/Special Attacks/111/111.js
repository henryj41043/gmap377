#pragma strict

var MeltingPotEffect : GameObject;

var distance : float;
var radius : float;
var movementSlow : float;
var attackSlow : float;
var damagePerTick : float;
var tickInterval : float;
var duration : float;

function MeltingPot () {
	var MeltingPot : GameObject = Instantiate(MeltingPotEffect, transform.position + (transform.forward * distance), transform.rotation);
	MeltingPot.SendMessage("Radius", radius);
	MeltingPot.SendMessage("MovementSlow", movementSlow);
	MeltingPot.SendMessage("AttackSlow", attackSlow);
	MeltingPot.SendMessage("DamagePerTick", damagePerTick);
	MeltingPot.SendMessage("TickInterval", tickInterval);
	MeltingPot.SendMessage("Duration", duration);
}