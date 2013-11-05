#pragma strict

function Update() {
	if (!animation.isPlaying){
		animation.Play("Idle");
	}
}

function PlayIdle() {
	animation.Play("Idle");
}

function PlayAttack1() {
	animation.Play("Attack1");
}

function PlayAttack2() {
	animation.Play("Attack2");
}

function PlayAttack3() {
	animation.Play("Attack3");
}

function PlayDeath() {
	animation.Play("Death");
}

function PlaySpecialAttack() {
	animation.Play("SpecialAttack");
}