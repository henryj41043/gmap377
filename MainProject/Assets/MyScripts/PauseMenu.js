#pragma strict

var mySkin : GUISkin;
private var windowRect : Rect;
private var paused : boolean = false;

function Start () {
	windowRect = new Rect(Screen.width / 2 - 200, Screen.height / 2 - 200, 400, 400);
}

function Update () {
	if(Input.GetKeyDown("p")){
		if(paused){
			paused = false;
			Screen.lockCursor = true;
		}else{
			paused = true;
			Screen.lockCursor = false;
		}
	}
	
	if(paused){
		Time.timeScale = 0;
	}else{
		Time.timeScale = 1;
	}
}

function OnGUI(){
	if(paused){
		windowRect = GUI.Window(0, windowRect, windowFunc, "Pause Menu");
	}
}

function windowFunc(id : int){

}