#pragma strict
var audioVolume = 1.0;
var attack1 : AudioClip;
var attack2 : AudioClip;
var attack3 : AudioClip;
var death: AudioClip;
var idle : AudioClip;
var recoil : AudioClip;
var run: AudioClip;
var specialAtttack : AudioClip;
var walk : AudioClip;

function Update(){

	if(Input.GetMouseButtonDown(0))
	{
		audio.volume = audioVolume;
		audio.clip = attack1;
		audio.Play();
		Debug.Log("Pressed left click.");
	}
	//Attack1();
}
function Attack1() {
	if(animation.Play("Attack1"))
	{
		audio.volume = audioVolume;
		audio.clip = attack1;
		audio.Play();
	}
}
function Attack2() {
	if(animation.Play("Attack2"))
	{
		audio.volume = audioVolume;
		audio.clip = attack2;
		audio.Play();
	}
}
function Attack3() {
	if(animation.Play("Attack3"))
	{
		audio.volume = audioVolume;
		audio.clip = attack3;
		audio.Play();
	}
}
function Death() {
	if(animation.Play("Death"))
	{
		audio.volume = audioVolume;
		audio.clip = death;
		audio.Play();
	}
}
function Idle() {
	if(animation.Play("Idle"))
	{
		audio.volume = audioVolume;
		audio.clip = idle;
		audio.Play();
	}
}
function Recoil() {
	if(animation.Play("Recoil"))
	{
		audio.volume = audioVolume;
		audio.clip = recoil;
		audio.Play();
	}
}
function Run() {
	if(animation.Play("Run"))
	{
		audio.volume = audioVolume;
		audio.clip = run;
		audio.Play();
	}
}
function SpecialAttack() {
	if(animation.Play("SpecialAttack"))
	{
		audio.volume = audioVolume;
		audio.clip = specialAtttack;
		audio.Play();
	}
}
function Walk() {
	if(animation.Play("Walk"))
	{
		audio.volume = audioVolume;
		audio.clip = walk;
		audio.Play();
	}
}

