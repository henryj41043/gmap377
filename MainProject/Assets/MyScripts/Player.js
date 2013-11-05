#pragma strict

function Start () {

}

function Update () {
	if (Input.GetButton ("Fire1")){
		BroadcastMessage("Fire");
	}
}