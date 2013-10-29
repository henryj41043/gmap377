#pragma strict
static var doorsArray: Array;
var doorObject : GameObject;
function Start () {
	instantiateDoors();
}

function Update () {

}
function instantiateDoors(){
	var numDoors = 2;
	doorsArray = new Array();
	for(var i:int = 0; i < numDoors; i++) 
	
		if(i == 0)
		{
			doorsArray[i] = Instantiate(doorObject,Vector3(-36.69241,3.61466,-11.87218), Quaternion.identity);
		}
		else if(i == 1)
		{
			doorsArray[i] = Instantiate(doorObject,Vector3(-106.3218,3.614668,-11.87218), Quaternion.identity);
			
		}


}