#pragma strict

var mySkin : GUISkin;
private var windowRect : Rect;
private var paused : boolean = false;

var PlayerCamera : String = "10";
var PlayerRunSpeed : String = "10";
var PlayerBasicAttack : String = "100";
var PlayerHP : String = "10";
var EnemyRunSpeed: String = "1";
var EnemyHP: String = "100";
var EnemyDamage: String = "1";
var EnemyAttackSpeed: String = "1";
static var paraArray = new Array();

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
		GUI.color = Color.white;
		windowRect = GUI.Window(0, windowRect, windowFunc, "Pause Menu");
		paraArray[0] = System.Int32.Parse(PlayerCamera);
		SmoothFollow.distance = paraArray[0];
    	paraArray[1] = System.Int32.Parse(PlayerRunSpeed);	
    	paraArray[2] = System.Int32.Parse(PlayerBasicAttack);
    	paraArray[3] = System.Int32.Parse(PlayerHP);	
    	paraArray[4] = System.Int32.Parse(EnemyRunSpeed);
    	paraArray[5] = System.Int32.Parse(EnemyHP);
    	paraArray[6] = System.Int32.Parse(EnemyDamage);
    	paraArray[7] = System.Int32.Parse(EnemyAttackSpeed);
	}
}

function windowFunc(id : int){
	GUI.Label (Rect (50, 20, 100, 20), "CameraDistance");
	PlayerCamera = GUI.TextField (Rect (200, 20, 100, 20), PlayerCamera, 25);
	
	GUI.Label (Rect (50, 50, 100, 20), "PlayerSpeed");
	PlayerRunSpeed = GUI.TextField (Rect (200, 50, 100, 20),PlayerRunSpeed, 25);
	
	GUI.Label (Rect (50, 80, 120, 20), "PlayerBasicAttack");
	PlayerBasicAttack = GUI.TextField (Rect (200, 80, 100, 20), PlayerBasicAttack, 25);
	
	GUI.Label (Rect (50, 110, 100, 20), "PlayerHP");
	PlayerHP = GUI.TextField (Rect (200, 110, 100, 20), PlayerHP, 25);
	
	GUI.Label (Rect (50, 140, 120, 20), "EnemyRunSpeed");
	EnemyRunSpeed = GUI.TextField (Rect (200, 140, 100, 20), EnemyRunSpeed, 25);
	
	GUI.Label (Rect (50, 170, 100, 20), "EnemyHP");
	EnemyHP = GUI.TextField (Rect (200, 170, 100, 20), EnemyHP, 25);
	
	GUI.Label (Rect (50, 200, 100, 20), "EnemyDamage");
	EnemyDamage = GUI.TextField (Rect (200, 200, 100, 20), EnemyDamage, 25);
	
	GUI.Label (Rect (50, 230, 120, 20), "EnemyAttackSpeedd");
	EnemyAttackSpeed = GUI.TextField (Rect (200, 230, 100, 20), EnemyAttackSpeed, 25);
}