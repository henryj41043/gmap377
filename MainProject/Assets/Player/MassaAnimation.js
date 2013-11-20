#pragma strict
var idle : AudioClip;
var run : AudioClip;
var attack1 : AudioClip;
var attack2 : AudioClip;
var attack3 : AudioClip;
var dodge : AudioClip;
var death : AudioClip;
var recoil : AudioClip;
var specialAttack : AudioClip;


function PlayMassaIdle() {
	if (!animation.IsPlaying("Death")) {
		animation.Play("Idle");
		audio.clip = idle;
		audio.Play();
	}
}

function PlayMassaRun() {
	if (!animation.IsPlaying("Death")) {
		animation.Play("Run");
		audio.clip = run;
		if(!audio.isPlaying)
		{		
			audio.Play();
		}
	}
}

function PlayMassaAttack1() {
	if (!animation.IsPlaying("Death")) {
		animation.Play("Attack1");
		audio.clip = attack1;
		audio.Play();
	}
}

function PlayMassaAttack2() {
	if (!animation.IsPlaying("Death")) {
		animation.Play("Attack2");
		audio.clip = attack2;
		audio.Play();
	}
}

function PlayMassaAttack3() {
	if (!animation.IsPlaying("Death")) {
		animation.Play("Attack3");
		audio.clip = attack3;
		audio.Play();
	}
}

function PlayMassaDeath() {
	if (!animation.IsPlaying("Death")) {
		animation.Play("Death");
		audio.clip = death;
		audio.Play();
	}
}

function PlayMassaDodge() {
	if (!animation.IsPlaying("Death")) {
		animation.Play("Dodge");
		audio.clip = dodge;
		audio.Play();
	}
}

function PlayMassaRecoil() {
	if (!animation.IsPlaying("Death")) {
		animation.Play("Recoil");
		audio.clip = recoil;
		audio.Play();
	}
}

function PlayMassaSpecialAttack() {
	if (!animation.IsPlaying("Death")) {
		animation.Play("SpecialAttack");
		audio.clip = specialAttack;
		audio.Play();
	}
}