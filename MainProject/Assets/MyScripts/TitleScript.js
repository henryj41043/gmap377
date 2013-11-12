#pragma strict
var customSkin: GUISkin;

function OnGUI () {
	var buttonWidth: int = 200;
	var buttonHeight: int = 50;
	
	var halfScreenWidth: float = Screen.width/2;
	var halfButtonWidth: float = buttonWidth/2;
	
	GUI.skin = customSkin;
	
	if(GUI.Button(Rect(halfScreenWidth - halfButtonWidth, 420,buttonWidth,buttonHeight),"Play Game"))
	{
		Application.LoadLevel("Main");
	
	}
}