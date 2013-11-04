var maxHealth : int;
private var curHealth : int;
var heartGUI:GUITexture;
private var Xstart:float = -0.138;
private var spacingX:float;
private var spacingY:float = 0.63;
private var Xinterval:float = 0.055;
private var hearts = new Array();

function Start () {
	/*
	//add para here for testing
	maxHealth = OnStartGame.paraArray[3];
	//
	*/
	curHealth = maxHealth;
	AddHearts();
}

function AddHearts(){
	spacingX = Xstart;
	for(var i = 0; i < curHealth ; i++){
		hearts[i] = Instantiate(heartGUI, Vector3(spacingX, spacingY, 0), Quaternion.identity );
		spacingX += Xinterval;
	}
}

function ApplyDamage (damage : int) {
	if(curHealth <= 0){
		return;
	}
	
	ModifyHearts(damage);
	
	if(curHealth <= 0){
		Die();
	}	
}

private var windowRect : Rect;
	
function Die () {
	BroadcastMessage("PlayDeath");
	Invoke("Restart", 1);
	//Destroy(this.gameObject);
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