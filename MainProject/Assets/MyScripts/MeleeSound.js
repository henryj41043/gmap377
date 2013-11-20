#pragma strict
var audioVolume = 1.0;
var walk : AudioClip;
var rolling : AudioClip;
var rollingHit : AudioClip;
var attack : AudioClip;
var recoil : AudioClip;
var death : AudioClip;

function Update () {

	if(animation.Play("Miner Walk"))
	{
			audio.volume = audioVolume;
			audio.clip = walk;
			audio.Play();
			Debug.Log("walk");
	}
	else if(animation.Play("Miner Roll"))
	{
		audio.volume = audioVolume;
		audio.clip = rolling;
		audio.Play();
	}
	else if(animation.Play("Miner Roll Hit"))
	{
		audio.volume = audioVolume;
		audio.clip = rollingHit;
		audio.Play();
	}
	else if(animation.IsPlaying("Miner Attack"))
	{
		audio.volume = audioVolume;
		audio.clip = attack;
		audio.Play();
	}
	else if(animation.IsPlaying("Miner Recoil"))
	{
		audio.volume = audioVolume;
		audio.clip = recoil;
		audio.Play();
	}
	else if(animation.IsPlaying("Miner Death"))
	{
		audio.volume = audioVolume;
		audio.clip = death;
		audio.Play();
	}
}