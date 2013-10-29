#pragma strict

var numEnemies : int;
var spawnPoints : GameObject[];
var enemies : GameObject[];
private var currentNumEnemies : int = 0;
private var numDoor : int = 0;
private var IsAllEnemyShowed : boolean;

function Start () {
/*
	for(var i = 0; i < numEnemies; i++){
		Instantiate(enemies[Random.Range(0,enemies.length)], spawnPoints[Random.Range(0,spawnPoints.length)].transform.position, Quaternion.identity);
		currentNumEnemies++;
	}
*/
	if(numDoor == 0)
	{
		for(var i = 0; i < numEnemies; i++){
		Instantiate(enemies[Random.Range(0,enemies.length)], spawnPoints[Random.Range(0,3)].transform.position, Quaternion.identity);
		currentNumEnemies++;
		}
	}
	
	

}

function Update () {

	/*if(currentNumEnemies < numEnemies){
			Instantiate(enemies[Random.Range(0,enemies.length)], spawnPoints[Random.Range(0,spawnPoints.length)].transform.position, Quaternion.identity);
			currentNumEnemies++;
			}*/
	if(numDoor == 1)
	{
		if (IsAllEnemyShowed == false)
		{
			if(currentNumEnemies < numEnemies){
			Instantiate(enemies[Random.Range(0,enemies.length)], spawnPoints[Random.Range(4,8)].transform.position, Quaternion.identity);
			currentNumEnemies++;
			}
			if(currentNumEnemies == numEnemies)
			{
				IsAllEnemyShowed = true;
			}
		}
		
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
	DestroyDoor(tempEnemies);

}
function DestroyDoor(tempEnemies){
	if(tempEnemies == 0)
	{
        Destroy(CreateDoor.doorsArray[numDoor]);
        //gameObject(CreateDoor.doorsArray[numDoor]).active = false;
        //CreateDoor.doorsArray[numDoor].active = true;
        numDoor += 1;
        
        tempEnemies = numEnemies;
	}
}