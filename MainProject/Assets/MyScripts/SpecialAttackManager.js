#pragma strict

var specialAttackReady : int;
<<<<<<< HEAD
=======
var MassaAnimation : GameObject;
>>>>>>> 447e36a73d7f1336fc81d92d936fdeb47c565cb7

function Update () {
	if (Input.GetKeyDown(KeyCode.Keypad1) || Input.GetKeyDown(KeyCode.Alpha1)) {
		SendMessageUpwards("MeltingPot");
<<<<<<< HEAD
	}
	if (Input.GetKeyDown(KeyCode.Keypad2) || Input.GetKeyDown(KeyCode.Alpha2)) {
		SendMessageUpwards("StickyTruffle");
	}
	if (Input.GetKeyDown(KeyCode.Keypad3) || Input.GetKeyDown(KeyCode.Alpha3)) {
		SendMessageUpwards("TruffleFrag");
	}
	if (Input.GetKeyDown(KeyCode.Keypad4) || Input.GetKeyDown(KeyCode.Alpha4)) {
		SendMessageUpwards("StickySlide");
	}
	if (Input.GetKeyDown(KeyCode.Keypad5) || Input.GetKeyDown(KeyCode.Alpha5)) {
		SendMessageUpwards("CakePopPolearm");
	}
	if (Input.GetKeyDown(KeyCode.Keypad6) || Input.GetKeyDown(KeyCode.Alpha6)) {
		SendMessageUpwards("GummyBind");
	}
	if (Input.GetKeyDown(KeyCode.Keypad7) || Input.GetKeyDown(KeyCode.Alpha7)) {
		SendMessageUpwards("YumYumShield");
	}
	if (Input.GetKeyDown(KeyCode.Keypad8) || Input.GetKeyDown(KeyCode.Alpha8)) {
		SendMessageUpwards("FondueStrike");
	}
	if (Input.GetKeyDown(KeyCode.Keypad9) || Input.GetKeyDown(KeyCode.Alpha9)) {
		SendMessageUpwards("SweetFrost");
	}
	if (Input.GetKeyDown(KeyCode.Keypad0) || Input.GetKeyDown(KeyCode.Alpha0)) {
		SendMessageUpwards("RockCandyArmor");
=======
		MassaAnimation.SendMessage("PlaySpecialAttack");
	}
	if (Input.GetKeyDown(KeyCode.Keypad2) || Input.GetKeyDown(KeyCode.Alpha2)) {
		SendMessageUpwards("StickyTruffle");
		MassaAnimation.SendMessage("PlaySpecialAttack");
	}
	if (Input.GetKeyDown(KeyCode.Keypad3) || Input.GetKeyDown(KeyCode.Alpha3)) {
		SendMessageUpwards("TruffleFrag");
		MassaAnimation.SendMessage("PlaySpecialAttack");
	}
	if (Input.GetKeyDown(KeyCode.Keypad4) || Input.GetKeyDown(KeyCode.Alpha4)) {
		SendMessageUpwards("StickySlide");
		MassaAnimation.SendMessage("PlaySpecialAttack");
	}
	if (Input.GetKeyDown(KeyCode.Keypad5) || Input.GetKeyDown(KeyCode.Alpha5)) {
		SendMessageUpwards("CakePopPolearm");
		MassaAnimation.SendMessage("PlaySpecialAttack");
	}
	if (Input.GetKeyDown(KeyCode.Keypad6) || Input.GetKeyDown(KeyCode.Alpha6)) {
		SendMessageUpwards("GummyBind");
		MassaAnimation.SendMessage("PlaySpecialAttack");
	}
	if (Input.GetKeyDown(KeyCode.Keypad7) || Input.GetKeyDown(KeyCode.Alpha7)) {
		SendMessageUpwards("YumYumShield");
		MassaAnimation.SendMessage("PlaySpecialAttack");
	}
	if (Input.GetKeyDown(KeyCode.Keypad8) || Input.GetKeyDown(KeyCode.Alpha8)) {
		SendMessageUpwards("FondueStrike");
		MassaAnimation.SendMessage("PlaySpecialAttack");
	}
	if (Input.GetKeyDown(KeyCode.Keypad9) || Input.GetKeyDown(KeyCode.Alpha9)) {
		SendMessageUpwards("SweetFrost");
		MassaAnimation.SendMessage("PlaySpecialAttack");
	}
	if (Input.GetKeyDown(KeyCode.Keypad0) || Input.GetKeyDown(KeyCode.Alpha0)) {
		SendMessageUpwards("RockCandyArmor");
		MassaAnimation.SendMessage("PlaySpecialAttack");
>>>>>>> 447e36a73d7f1336fc81d92d936fdeb47c565cb7
	}
	
	if (Input.GetMouseButtonDown(1) && specialAttackReady == 111) {
		SendMessageUpwards("MeltingPot");
<<<<<<< HEAD
=======
		MassaAnimation.SendMessage("PlaySpecialAttack");
>>>>>>> 447e36a73d7f1336fc81d92d936fdeb47c565cb7
		specialAttackReady = 0;
	}
	if (Input.GetMouseButtonDown(1) && specialAttackReady == 112) {
		SendMessageUpwards("StickyTruffle");
<<<<<<< HEAD
=======
		MassaAnimation.SendMessage("PlaySpecialAttack");
>>>>>>> 447e36a73d7f1336fc81d92d936fdeb47c565cb7
		specialAttackReady = 0;
	}
	if (Input.GetMouseButtonDown(1) && specialAttackReady == 113) {
		SendMessageUpwards("TruffleFrag");
<<<<<<< HEAD
=======
		MassaAnimation.SendMessage("PlaySpecialAttack");
>>>>>>> 447e36a73d7f1336fc81d92d936fdeb47c565cb7
		specialAttackReady = 0;
	}
	if (Input.GetMouseButtonDown(1) && specialAttackReady == 122) {
		SendMessageUpwards("StickySlide");
<<<<<<< HEAD
=======
		MassaAnimation.SendMessage("PlaySpecialAttack");
>>>>>>> 447e36a73d7f1336fc81d92d936fdeb47c565cb7
		specialAttackReady = 0;
	}
	if (Input.GetMouseButtonDown(1) && specialAttackReady == 123) {
		SendMessageUpwards("CakePopPolearm");
<<<<<<< HEAD
=======
		MassaAnimation.SendMessage("PlaySpecialAttack");
>>>>>>> 447e36a73d7f1336fc81d92d936fdeb47c565cb7
		specialAttackReady = 0;
	}
	if (Input.GetMouseButtonDown(1) && specialAttackReady == 222) {
		SendMessageUpwards("GummyBind");
<<<<<<< HEAD
=======
		MassaAnimation.SendMessage("PlaySpecialAttack");
>>>>>>> 447e36a73d7f1336fc81d92d936fdeb47c565cb7
		specialAttackReady = 0;
	}
	if (Input.GetMouseButtonDown(1) && specialAttackReady == 223) {
		SendMessageUpwards("YumYumShield");
<<<<<<< HEAD
=======
		MassaAnimation.SendMessage("PlaySpecialAttack");
>>>>>>> 447e36a73d7f1336fc81d92d936fdeb47c565cb7
		specialAttackReady = 0;
	}
	if (Input.GetMouseButtonDown(1) && specialAttackReady == 331) {
		SendMessageUpwards("FondueStrike");
<<<<<<< HEAD
=======
		MassaAnimation.SendMessage("PlaySpecialAttack");
>>>>>>> 447e36a73d7f1336fc81d92d936fdeb47c565cb7
		specialAttackReady = 0;
	}
	if (Input.GetMouseButtonDown(1) && specialAttackReady == 332) {
		SendMessageUpwards("SweetFrost");
<<<<<<< HEAD
=======
		MassaAnimation.SendMessage("PlaySpecialAttack");
>>>>>>> 447e36a73d7f1336fc81d92d936fdeb47c565cb7
		specialAttackReady = 0;
	}
	if (Input.GetMouseButtonDown(1) && specialAttackReady == 333) {
		SendMessageUpwards("RockCandyArmor");
<<<<<<< HEAD
=======
		MassaAnimation.SendMessage("PlaySpecialAttack");
>>>>>>> 447e36a73d7f1336fc81d92d936fdeb47c565cb7
		specialAttackReady = 0;
	}
}

function SpecialAttackReady (receivedSpecialAttack : int) {
	specialAttackReady = receivedSpecialAttack;
}