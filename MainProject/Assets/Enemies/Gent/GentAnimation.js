#pragma strict
var walk : AudioClip;
var attack : AudioClip;
var death : AudioClip;

function PlayGentWalk() {
	if (!animation.IsPlaying("Death")) {
		animation.Play("Walk");
		audio.clip = walk;
		audio.Play();
	}
}

function PlayGentAttack() {
	if (!animation.IsPlaying("Death")) {
		animation.Play("Attack");
		audio.clip = attack;
		audio.Play();
	}
}

function PlayGentDeath() {
	if (!animation.IsPlaying("Death")) {
		animation.Play("Death");
		audio.clip = death;
		audio.Play();
	}
}