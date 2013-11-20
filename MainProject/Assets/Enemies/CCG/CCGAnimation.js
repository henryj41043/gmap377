#pragma strict
var walk : AudioClip;
var shoot : AudioClip;
var recoil : AudioClip;
var death : AudioClip;

function PlayCCGWalk() {
	if (!animation.IsPlaying("Death")) {
		animation.Play("Walk");
		audio.clip = walk;
		audio.Play();
	}
}

function PlayCCGShoot() {
	if (!animation.IsPlaying("Death")) {
		animation.Play("Shoot");
		audio.clip = shoot;
		audio.Play();
	}
}

function PlayCCGRecoil() {
	if (!animation.IsPlaying("Death")) {
		animation.Play("Recoil");
		audio.clip = recoil;
		audio.Play();
	}
}

function PlayCCGDeath () {
	if (!animation.IsPlaying("Death")) {
		animation.Play("Death");
		audio.clip = death;
		audio.Play();
	}
}