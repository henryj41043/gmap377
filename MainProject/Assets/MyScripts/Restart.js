#pragma strict

function Update () {
	if (Input.GetKeyDown (KeyCode.Return)) { 
		Application.LoadLevel (0); 
	} 
}