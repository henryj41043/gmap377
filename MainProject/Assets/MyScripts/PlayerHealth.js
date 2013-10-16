var maximumHealth = 100.0;
private var curHealth = 100.0;
private var healthBarLength:float;

function Start () {
	healthBarLength = Screen.width / 2;
}

function Update () {
	HealthBar();
}
function ApplyDamage (damage : float) {

	if(curHealth < 0.0){
		return;
	}
	
	curHealth -= damage;
	
	if(curHealth <= 0.0){
		Die();
	}
	
}
function Die () {

	Destroy(this.gameObject);
}
function HealthBar(){

	healthBarLength = (Screen.width / 2) * curHealth/ maximumHealth;
}
function OnGUI(){

	if(curHealth < 50)
	{
		GUI.color = Color.red;
	}
	GUI.Box (new Rect(10,20,healthBarLength,20), curHealth + "/" + maximumHealth);
}