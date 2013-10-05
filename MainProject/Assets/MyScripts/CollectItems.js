#pragma strict
var addItemPoint = 1;
var TempChocolatePoint = 0;
var TempLolipopPoint = 0;
var TempGummyPoint = 0;
var font : Font;
var fontSize : int;
function Start () {

}

function Update () {

}

function OnTriggerEnter (other : Collider) 
{
    if (other.name == "Chocolate") 
    {   
        TempChocolatePoint += addItemPoint;
        Destroy (other.gameObject);
    }
    
    if (other.name == "Lollipop") 
    {   
        TempLolipopPoint += addItemPoint;
        Destroy (other.gameObject);
    }
    
    if (other.name == "Gummy") 
    {   
        TempGummyPoint += addItemPoint;
        Destroy (other.gameObject);
    }
}
function OnGUI () 
{
	GUI.skin.label.fontSize = fontSize;
	GUI.skin.font = font;
 	GUI.color = Color.cyan;
	GUI.Label (Rect (20,0, 300, 50), "Chocolate: " + TempChocolatePoint);
	GUI.Label (Rect (20,20, 300, 50), "Lollipop: " + TempLolipopPoint);
	GUI.Label (Rect (20,40, 300, 50), "Gummy: " + TempGummyPoint);
}