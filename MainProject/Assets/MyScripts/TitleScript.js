#pragma strict
var customSkin: GUISkin;
var startButton: GUISkin;
var customStyle: GUIStyle;



function OnGUI () {
	var buttonWidth: int = 220;
	var buttonHeight: int = 50;
	
	//var halfScreenWidth: float = Screen.width/2;
	//var halfButtonWidth: float = buttonWidth/2;
	
	GUI.skin = customSkin;
	GUI.skin = startButton;

	
	
	
	if(GUI.Button(Rect(350, 450,buttonWidth,buttonHeight),"",customStyle))
	{
		Application.LoadLevel("WorldMap");
	
	}
	
}
