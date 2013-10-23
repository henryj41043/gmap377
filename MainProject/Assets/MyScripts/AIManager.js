#pragma strict

var numEnemies : int;
var spawnPoints : GameObject[];
var enemies : GameObject[];
private var currentNumEnemies : int = 0;

function Start () {
	for(var i = 0; i < numEnemies; i++){
		Instantiate(enemies[Random.Range(0,enemies.length)], spawnPoints[Random.Range(0,spawnPoints.length)].transform.position, Quaternion.identity);
		currentNumEnemies++;
	}
}

function Update () {
	if(currentNumEnemies < numEnemies){
		Instantiate(enemies[Random.Range(0,enemies.length)], spawnPoints[Random.Range(0,spawnPoints.length)].transform.position, Quaternion.identity);
		currentNumEnemies++;
	}
	
	var obj : GameObject[] = GameObject.FindObjectsOfType(typeof(GameObject));
	var tempEnemies = 0;
	for(var o : GameObject in obj){
		if(o.transform.tag == "Enemy"){
			tempEnemies++;
		}
	}
	if(tempEnemies < numEnemies){
		currentNumEnemies = tempEnemies;
	}
	
}