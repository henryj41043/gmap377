#pragma strict

var specialAttackReady : int;

function Update () {
	if (Input.GetKeyDown(KeyCode.Keypad1) || Input.GetKeyDown(KeyCode.Alpha1)) {
		SendMessageUpwards("MeltingPot");
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
	}
	
	if (Input.GetMouseButtonDown(1) && specialAttackReady == 111) {
		SendMessageUpwards("MeltingPot");
		specialAttackReady = 0;
	}
	if (Input.GetMouseButtonDown(1) && specialAttackReady == 112) {
		SendMessageUpwards("StickyTruffle");
		specialAttackReady = 0;
	}
	if (Input.GetMouseButtonDown(1) && specialAttackReady == 113) {
		SendMessageUpwards("TruffleFrag");
		specialAttackReady = 0;
	}
	if (Input.GetMouseButtonDown(1) && specialAttackReady == 122) {
		SendMessageUpwards("StickySlide");
		specialAttackReady = 0;
	}
	if (Input.GetMouseButtonDown(1) && specialAttackReady == 123) {
		SendMessageUpwards("CakePopPolearm");
		specialAttackReady = 0;
	}
	if (Input.GetMouseButtonDown(1) && specialAttackReady == 222) {
		SendMessageUpwards("GummyBind");
		specialAttackReady = 0;
	}
	if (Input.GetMouseButtonDown(1) && specialAttackReady == 223) {
		SendMessageUpwards("YumYumShield");
		specialAttackReady = 0;
	}
	if (Input.GetMouseButtonDown(1) && specialAttackReady == 331) {
		SendMessageUpwards("FondueStrike");
		specialAttackReady = 0;
	}
	if (Input.GetMouseButtonDown(1) && specialAttackReady == 332) {
		SendMessageUpwards("SweetFrost");
		specialAttackReady = 0;
	}
	if (Input.GetMouseButtonDown(1) && specialAttackReady == 333) {
		SendMessageUpwards("RockCandyArmor");
		specialAttackReady = 0;
	}
}

function SpecialAttackReady (receivedSpecialAttack : int) {
	specialAttackReady = receivedSpecialAttack;
}