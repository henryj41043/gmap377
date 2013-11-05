#pragma strict

var damageIncrease : float;
var rangeIncrease : float;
var damageDuration : float;
var rangeDuration : float;

function CakePopPolearm () {
	SendMessageUpwards("IncreaseDamage", damageIncrease);
	SendMessageUpwards("IncreaseRange", rangeIncrease);
	SendMessageUpwards("IncreaseDamageDuration", damageDuration);
	SendMessageUpwards("IncreaseRangeDuration", rangeDuration);
}