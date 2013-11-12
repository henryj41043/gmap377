#pragma strict
var audioVolume = 1.0;
var walk : AudioClip;
var rolling : AudioClip;
var rollingHit : AudioClip;

function Update () {

	if(animation.IsPlaying("Walk"))
	{
		audio.volume = audioVolume;
		audio.clip = walk;
		audio.Play();
	}
	else if(animation.IsPlaying("Rolling"))
	{
		audio.volume = audioVolume;
		audio.clip = rolling;
		audio.Play();
	}
	else if(animation.IsPlaying("Rolling Hit"))
	{
		audio.volume = audioVolume;
		audio.clip = rollingHit;
		audio.Play();
	}
}