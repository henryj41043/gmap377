#pragma strict

var mainCharacter : GameObject;
var attackRange : int;
private var enemyBehavior : int;

function Start () {
	enemyBehavior = 0;
}

function Update () {
	if(Vector3.Distance(this.transform.position, mainCharacter.transform.position) < attackRange){
		enemyBehavior = 1;
	}
	
	if(enemyBehavior == 0){
		this.transform.position = Vector3.Lerp(this.transform.position, mainCharacter.transform.position, Time.deltaTime);
	}
	
	if(enemyBehavior == 1){
		baseAttack();
	}
}

function baseAttack(){
	Debug.Log("Enemy Attacked!");
	enemyBehavior = 0;
}

/*
var enemy : Transform; 
var start: Transform;
var end: Transform;

function Update(){ 
	if (  Vector3.Distance( enemy.position, (Vector3.Lerp(start.position, end.position,Time.time) )) < 100  ) { 
       print("player is close"); 
       transform.position = enemy.transform.position; 
       transform.rotation = enemy.transform.rotation ;
       transform.position = Vector3.Lerp(start.position, end.position, Time.deltaTime  );
	} 
	else{
    	print("not close yet");
		print(Vector3.Distance( enemy.position, transform.position ));
	}
}
*/