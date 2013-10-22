var PlayerCamera : String = "0";
var PlayerRunSpeed : String = "0";
var PlayerAttackSpeed : String = "0";
//static var PlayerHP: String = "10";
var PlayerHP : String = "0";
var EnemyRunSpeed: String = "0";
var EnemyHP: String = "0";
var EnemyDamage: String = "0";
var EnemyAttackSpeed: String = "0";
var EnemySpawn: String = "0";
var HitsPerCandy: String = "0";
private var windowRect0 : Rect = Rect (50, 50, 350, 350);


function DoMyWindow (windowID : int) {


	// Make a text field that modifies camera.
	GUI.Label (Rect (50, 20, 100, 20), "PlayerCamera");
	PlayerCamera = GUI.TextField (Rect (200, 20, 100, 20), PlayerCamera, 25);
	
	GUI.Label (Rect (50, 50, 100, 20), "PlayerRunSpeed");
	PlayerRunSpeed = GUI.TextField (Rect (200, 50, 100, 20),PlayerRunSpeed, 25);
	
	GUI.Label (Rect (50, 80, 120, 20), "PlayerAttackSpeed");
	PlayerAttackSpeed = GUI.TextField (Rect (200, 80, 100, 20), PlayerAttackSpeed, 25);
	
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
	
	GUI.Label (Rect (50, 260, 100, 20), "EnemySpawn");
	EnemySpawn = GUI.TextField (Rect (200, 260, 100, 20), EnemySpawn, 25);
	
	GUI.Label (Rect (50, 290, 100, 20), "HitsPerCandy");
	HitsPerCandy = GUI.TextField (Rect (200, 290, 100, 20),HitsPerCandy, 25);
	

	GUI.DragWindow (Rect (0,0,10000,10000));


}
function OnGUI () {

	GUI.color = Color.white ;        
    	windowRect0 = GUI.Window (1, windowRect0, DoMyWindow, "MENU");
    
    if(GUI.Button(Rect(500,180,100,100),"Go!"))
	{
			Application.LoadLevel("Main");
			Debug.Log("Clicked");
	}  	
	
}
