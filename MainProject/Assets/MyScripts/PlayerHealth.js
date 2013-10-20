var maximumHealth = 10;
var curHealth = 10;
var  heartGUI:GUITexture;
private var spacingX:float;
private var spacingY:float;


function Start () {
	AddHearts();
}
function AddHearts()
{
	spacingX = -0.138;
	spacingY = 0.63;
	
	heartsArray = new Array();
	
	for(var i = 0; i < curHealth ; i++)
	{
		heartsArray[i] = Instantiate(heartGUI, Vector3(spacingX, spacingY, 0), Quaternion.identity );
		spacingX += 0.055;
	}
	

}
function ApplyDamage (damage : float) {

	if(curHealth < 0.0){
		return;
	}
	
	curHealth -= damage;
	ModifyHearts();
	
	if(curHealth <= 0.0){
		Die();
	}
	
}
function Die () {
	Application.LoadLevel(0);
	//Destroy(this.gameObject);
}
function ModifyHearts ()
{

	var tempCurHealth = curHealth - 1;
	PlayerHealth.heartsArray[tempCurHealth].active = false;
	//Debug.Log(curHealth);

}