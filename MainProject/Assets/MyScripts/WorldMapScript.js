#pragma strict
var customSkin: GUISkin;
var glow: GUISkin;
var dot: GUISkin;
var customStyle: GUIStyle;
//var glowTexture: Texture2D;

function OnGUI () {
	//glowTexture.enabled = false;
	var buttonWidth: int = 85;
	var buttonHeight: int = 85;
	
	var halfScreenWidth: float = Screen.width/2;
	var halfButtonWidth: float = buttonWidth/2;
	
	GUI.skin = customSkin;
	GUI.skin = dot;
	GUI.skin = glow;
	
	if(GUI.Button(Rect(140, 220,buttonWidth,buttonHeight),"",customStyle))
	{
			
		Application.LoadLevel("Main");
	
	}
}
