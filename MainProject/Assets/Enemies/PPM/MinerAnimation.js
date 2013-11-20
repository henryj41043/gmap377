var walk : AudioClip;
var rolling : AudioClip;
var rollingHit : AudioClip;
var attack : AudioClip;
var recoil : AudioClip;
var death : AudioClip;

function PlayMinerWalk() {

	if (!animation.IsPlaying("Miner Death")) {
		animation.Play("Miner Walk");
		Debug.Log("walk");
		audio.clip = walk;
		audio.Play();
	}
}

function PlayMinerRoll() {
	if (!animation.IsPlaying("Miner Death")) {
		animation.Play("Miner Roll");
		Debug.Log("Roll");
		audio.clip = rolling;
		audio.Play();
	}
}

function PlayMinerRollHit() {
	if (!animation.IsPlaying("Miner Death")) {
		animation.Play("Miner Roll Hit");
		Debug.Log("Roll hit");
		audio.clip = rollingHit;
		audio.Play();
	}
}

function PlayMinerAttack() {
	if (!animation.IsPlaying("Miner Death")) {
		animation.Play("Miner Attack");
		Debug.Log("Attack");
		audio.clip = attack;
		audio.Play();
	}
}

function PlayMinerRecoil() {
	if (!animation.IsPlaying("Miner Death")) {
		animation.Play("Miner Recoil");
		Debug.Log("Recoil");
		audio.clip = recoil;
		audio.Play();
	}
}

function PlayMinerDeath() {
	if (!animation.IsPlaying("Miner Death")) {
		animation.Play("Miner Death");
		Debug.Log("Death");
		audio.clip = rollingHit;
		audio.Play();
	}
}