public static var maxHealth : int = 10;
private var curHealth : int;
var heartGUI:GUITexture;
private var Xstart:float = 0.08; //-0.138
private var spacingX:float;
private var spacingY:float = 0.66; //0.63
private var Xinterval:float = 0.028;
private var hearts = new Array();

function Start () {
	curHealth = maxHealth;
	AddHearts();
}

function UpdateHealthPlayer(){
	curHealth = maxHealth;
	AddHearts();
}

function AddHearts(){
	spacingX = Xstart;
	for(var j = 0; j < hearts.length; j++){
		Destroy(hearts[j]);
	}
	for(var i = 0; i < curHealth ; i++){
		hearts[i] = Instantiate(heartGUI, Vector3(spacingX, spacingY, 0), Quaternion.identity );
		spacingX += Xinterval;
	}
}

function ApplyDamage (damage : int) {
	if(curHealth <= 0){
		Die();
		return;
	}
	
	ModifyHearts(damage);	
}

private var windowRect : Rect;
	
function Die () {
	BroadcastMessage("PlayDeath");
	SendMessage("AbleToMove", false);
	SendMessage("AbleToAttack", false);
	SendMessage("AbleToDodge", false);
	SendMessage("AbleToSpecial", false);
	SendMessage("AbleToRotate", false);
	Application.LoadLevel(1);
}

function ModifyHearts(lostHearts : int){
	for(var i = 0; i < lostHearts; i++){
    	hearts[curHealth - 1].active = false;
    	curHealth--;
    	if(curHealth <= 0){
    		break;
    	}
    }
}

function Restart () {
	Application.LoadLevel(0);
}