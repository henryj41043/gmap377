<<<<<<< HEAD
﻿#pragma strict
=======
﻿/*
Put this on a GameObject unattached to anything. Replace the Input.GetKeyDown with whatever you want restart to be.
*/

#pragma strict
>>>>>>> 447e36a73d7f1336fc81d92d936fdeb47c565cb7

function Update () {
	if (Input.GetKeyDown (KeyCode.Return)) { 
		Application.LoadLevel (0); 
	} 
}