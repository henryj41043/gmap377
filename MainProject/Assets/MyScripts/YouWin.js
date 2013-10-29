#pragma strict
function OnTriggerEnter(other : Collider){

	if(other.name == "Boss")
	{
		Destroy(other.gameObject);
		Application.LoadLevel(2);
	}
}


