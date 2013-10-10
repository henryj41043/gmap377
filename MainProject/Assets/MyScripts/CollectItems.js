#pragma strict
var addItemPoint = 1;
var TempChocolatePoints = 0;
var TempLollipopPoints = 0;
var TempGummyPoints = 0;
var font : Font;
var fontSize : int;
private var count = 0;

function Start () {

}

function Update () {
	if(Input.GetMouseButton(1) && count == 3){
		fireSpecial();
	}
}

function fireSpecial(){
	var range = 3.0;
	var damage = 150.0;
	var direction = transform.TransformDirection(Vector3.forward);
	var hit : RaycastHit;
	
	if (Physics.Raycast (transform.position, direction, hit, range)) {		
		hit.collider.SendMessageUpwards("ApplyDamage", damage, SendMessageOptions.DontRequireReceiver);
	}
	
	TempChocolatePoints = 0;
	TempLollipopPoints = 0;
	TempGummyPoints = 0;
	count = 0;
}

function OnTriggerEnter (other : Collider) 
{
    if ((other.name == "Chocolate" || other.name == "Chocolate(Clone)") && count < 3) 
    {   
        TempChocolatePoints += addItemPoint;
        Destroy (other.gameObject);
        count++;
    }
    
    if ((other.name == "Lollipop" || other.name == "Lollipop(Clone)") && count < 3) 
    {   
        TempLollipopPoints += addItemPoint;
        Destroy (other.gameObject);
        count++;
    }
    
    if ((other.name == "Gummy" || other.name == "Gummy(Clone)") && count < 3) 
    {   
        TempGummyPoints += addItemPoint;
        Destroy (other.gameObject);
        count++;
    }
}
function OnGUI () 
{
	GUI.skin.label.fontSize = fontSize;
	GUI.skin.font = font;
 	GUI.color = Color.cyan;
 	
 	if(TempChocolatePoints > 0){
		GUI.Label (Rect (20,0, 300, 50), "Chocolate: " + TempChocolatePoints);
	}
	
	if(TempLollipopPoints > 0){
		GUI.Label (Rect (20,20, 300, 50), "Lollipop: " + TempLollipopPoints);
	}
	
	if(TempGummyPoints > 0){
		GUI.Label (Rect (20,40, 300, 50), "Gummy: " + TempGummyPoints);
	}
	
	if(count == 3){
		GUI.Label(Rect(20,60,300,50), "Special Available!");
	}
}