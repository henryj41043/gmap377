var PlayerCamera : String = "10";
var PlayerRunSpeed : String = "10";
var PlayerBasicAttack : String = "100";
//static var PlayerHP: String = "10";
var PlayerHP : String = "10";
var EnemyRunSpeed: String = "1";
var EnemyHP: String = "100";
var EnemyDamage: String = "1";
var EnemyAttackSpeed: String = "1";
//var EnemySpawn: String = "0";
//var HitsPerCandy: String = "0";
private var windowRect0 : Rect = Rect (50, 50, 350, 300);
static var paraArray = new Array();

function DoMyWindow (windowID : int) {


	// Make a text field that modifies camera.
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
	/*
	GUI.Label (Rect (50, 260, 100, 20), "EnemySpawn");
	EnemySpawn = GUI.TextField (Rect (200, 260, 100, 20), EnemySpawn, 25);
	
	GUI.Label (Rect (50, 290, 100, 20), "HitsPerCandy");
	HitsPerCandy = GUI.TextField (Rect (200, 290, 100, 20),HitsPerCandy, 25);
	*/

	GUI.DragWindow (Rect (0,0,10000,10000));


}
function OnGUI () {

	GUI.color = Color.white ;        
    	windowRect0 = GUI.Window (1, windowRect0, DoMyWindow, "MENU");
    
    	
    	
    	paraArray[0] = System.Int32.Parse(PlayerCamera); // SmoothFollow(distance var)
    	paraArray[1] = System.Int32.Parse(PlayerRunSpeed);// CharacterMotor(MaxForwardSpeed)
    	paraArray[2] = System.Int32.Parse(PlayerBasicAttack);//BasicAttack(damage)
    	paraArray[3] = System.Int32.Parse(PlayerHP);// PlayerHealth(CurHealth)
    	paraArray[4] = System.Int32.Parse(EnemyRunSpeed);//Enemy(speed)
    	paraArray[5] = System.Int32.Parse(EnemyHP);// receiveDamage(MaximumHealth)
    	paraArray[6] = System.Int32.Parse(EnemyDamage);//Enemy(damage)
    	paraArray[7] = System.Int32.Parse(EnemyAttackSpeed);//Enemy(attackSpeed)
    	//paraArray[8] = System.Int32.Parse(EnemySpawn);
    	//paraArray[9] = System.Int32.Parse(HitsPerCandy);
    	
    if(GUI.Button(Rect(500,180,100,100),"Go!"))
	{
			Application.LoadLevel("Main");
			Debug.Log(PlayerHP);
	}  	
	
}