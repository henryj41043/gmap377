#pragma strict

<<<<<<< HEAD
function Start () {

}

function Update () {

=======
var ExplosionEffect : GameObject;

var damageIncrease : float;
var earlyExplodeDamage : float;
var earlyExplodeRadius : float;
var earlyExplodeDuration : float;
var durationToFullExplode : float;
var fullExplodeDamage : float;
var fullExplodeRadius : float;
var fullExplodeDuration : float;

private var RockCandyArmorOn : boolean;

function Start () {
	RockCandyArmorOn = false;
}

function RockCandyArmor () {
	SendMessageUpwards("IncreaseDamage", damageIncrease);
	Invoke("FullExplode", durationToFullExplode);
	RockCandyArmorOn = true;
}

function ApplyDamage () {
	if (RockCandyArmorOn == true) {
		SendMessageUpwards("RevertDamage");
		CancelInvoke();
		EarlyExplode();
	}
}

function EarlyExplode() {
	var Explosion : GameObject = Instantiate(ExplosionEffect, transform.position, transform.rotation);
	Explosion.SendMessage("Damage", earlyExplodeDamage);
	Explosion.SendMessage("Radius", earlyExplodeRadius);
	Explosion.SendMessage("Duration", earlyExplodeDuration);
	RockCandyArmorOn = false;
}

function FullExplode() {
	var Explosion : GameObject = Instantiate(ExplosionEffect, transform.position, transform.rotation);
	Explosion.SendMessage("Damage", fullExplodeDamage);
	Explosion.SendMessage("Radius", fullExplodeRadius);
	Explosion.SendMessage("Duration", fullExplodeDuration);
	RockCandyArmorOn = false;
>>>>>>> 447e36a73d7f1336fc81d92d936fdeb47c565cb7
}