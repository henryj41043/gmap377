<<<<<<< HEAD
var Slot1 : int;
var Slot2 : int;
var Slot3 : int;
var CurrentlyOpenSlot : int;

var StandingOverCandyDrop : int;

var DestroyCandy : boolean;
=======
﻿private var Slot1 : int;
private var Slot2 : int;
private var Slot3 : int;
private var CurrentlyOpenSlot : int;

private var StandingOverCandyDrop : int;

private var DestroyCandy : boolean;
>>>>>>> 447e36a73d7f1336fc81d92d936fdeb47c565cb7

function Start () {
	ResetSlots ();
	ResetStanding ();
	CurrentlyOpenSlot = 1;
}

function ResetSlots () {
	Slot1 = 0;
	Slot2 = 0;
	Slot3 = 0;
}

function Update () {
	CheckSlots();
	if (Input.GetMouseButtonDown(1)) {
		if (CurrentlyOpenSlot == 1 && StandingOverCandyDrop != 0) {
			Slot1 = StandingOverCandyDrop;
			DestroyCandy = true;
			Invoke("TurnOffDestroyCandy", 0.25);
		}
		if (CurrentlyOpenSlot == 2 && StandingOverCandyDrop != 0) {
			Slot2 = StandingOverCandyDrop;
			DestroyCandy = true;
			Invoke("TurnOffDestroyCandy", 0.25);
		}
		if (CurrentlyOpenSlot == 3 && StandingOverCandyDrop != 0) {
			Slot3 = StandingOverCandyDrop;
			DestroyCandy = true;
			Invoke("TurnOffDestroyCandy", 0.25);
		}
		if (CurrentlyOpenSlot == 0) {
			ResetSlots();
		}
	}
<<<<<<< HEAD
	if (Input.GetButtonDown("E")) {
=======
	if (Input.GetKeyDown("e")) {
>>>>>>> 447e36a73d7f1336fc81d92d936fdeb47c565cb7
		ResetSlots();
	}
}

function OnGUI() {
	GUI.Label(Rect(0, 50, 100, 150), Slot1 + ", " + Slot2 + ", " + Slot3);
	if (Slot1 == 1 && Slot2 == 1 && Slot3 == 1) {
		GUI.Label(Rect(0, 75, 100, 175), "Melting Pot");
<<<<<<< HEAD
	}
	if ((Slot1 == 1 && Slot2 == 1 && Slot3 == 2) || (Slot1 == 1 && Slot2 == 2 && Slot3 == 1) || (Slot1 == 2 && Slot2 == 1 && Slot3 == 1)) {
		GUI.Label(Rect(0, 75, 150, 175), "Chocolate Truffle");
	}
	if (Slot1 == 1 && Slot2 == 1 && Slot3 == 3 || (Slot1 == 1 && Slot2 == 3 && Slot3 == 1) || (Slot1 == 3 && Slot2 == 1 && Slot3 == 1)) {
		GUI.Label(Rect(0, 75, 150, 175), "Truffle Frag");
	}
	if (Slot1 == 1 && Slot2 == 2 && Slot3 == 2 || (Slot1 == 2 && Slot2 == 2 && Slot3 == 1) || (Slot1 == 2 && Slot2 == 1 && Slot3 == 2)) {
		GUI.Label(Rect(0, 75, 150, 175), "Sticky Slide");
	}
	if (Slot1 == 1 && Slot2 == 2 && Slot3 == 3 || (Slot1 == 1 && Slot2 == 3 && Slot3 == 2) || (Slot1 == 2 && Slot2 == 1 && Slot3 == 3) || (Slot1 == 2 && Slot2 == 3 && Slot3 == 1) || (Slot1 == 3 && Slot2 == 1 && Slot3 == 2) || (Slot1 == 3 && Slot2 == 2 && Slot3 == 1)) {
		GUI.Label(Rect(0, 75, 150, 175), "Cake Pop Polearm");
	}
	if (Slot1 == 2 && Slot2 == 2 && Slot3 == 2) {
		GUI.Label(Rect(0, 75, 150, 175), "Gummy Bind");
	}
	if (Slot1 == 2 && Slot2 == 2 && Slot3 == 3 || (Slot1 == 2 && Slot2 == 3 && Slot3 == 2) || (Slot1 == 3 && Slot2 == 2 && Slot3 == 2)) {
		GUI.Label(Rect(0, 75, 150, 175), "Yum-yum Shield");
	}
	if (Slot1 == 3 && Slot2 == 3 && Slot3 == 1 || (Slot1 == 3 && Slot2 == 1 && Slot3 == 3) || (Slot1 == 1 && Slot2 == 3 && Slot3 == 3)) {
		GUI.Label(Rect(0, 75, 150, 175), "Fondue Strike");
	}
	if (Slot1 == 3 && Slot2 == 3 && Slot3 == 2 || (Slot1 == 3 && Slot2 == 2 && Slot3 == 3) || (Slot1 == 2 && Slot2 == 3 && Slot3 == 3)) {
		GUI.Label(Rect(0, 75, 150, 175), "Sweet Frost");
	}
	if (Slot1 == 3 && Slot2 == 3 && Slot3 == 3) {
		GUI.Label(Rect(0, 75, 150, 175), "Rock Candy Armor");
=======
		BroadcastMessage("SpecialAttackReady", 111);
	}
	if ((Slot1 == 1 && Slot2 == 1 && Slot3 == 2) || (Slot1 == 1 && Slot2 == 2 && Slot3 == 1) || (Slot1 == 2 && Slot2 == 1 && Slot3 == 1)) {
		GUI.Label(Rect(0, 75, 150, 175), "Chocolate Truffle");
		BroadcastMessage("SpecialAttackReady", 112);
	}
	if (Slot1 == 1 && Slot2 == 1 && Slot3 == 3 || (Slot1 == 1 && Slot2 == 3 && Slot3 == 1) || (Slot1 == 3 && Slot2 == 1 && Slot3 == 1)) {
		GUI.Label(Rect(0, 75, 150, 175), "Truffle Frag");
		BroadcastMessage("SpecialAttackReady", 113);
	}
	if (Slot1 == 1 && Slot2 == 2 && Slot3 == 2 || (Slot1 == 2 && Slot2 == 2 && Slot3 == 1) || (Slot1 == 2 && Slot2 == 1 && Slot3 == 2)) {
		GUI.Label(Rect(0, 75, 150, 175), "Sticky Slide");
		BroadcastMessage("SpecialAttackReady", 122);
	}
	if (Slot1 == 1 && Slot2 == 2 && Slot3 == 3 || (Slot1 == 1 && Slot2 == 3 && Slot3 == 2) || (Slot1 == 2 && Slot2 == 1 && Slot3 == 3) || (Slot1 == 2 && Slot2 == 3 && Slot3 == 1) || (Slot1 == 3 && Slot2 == 1 && Slot3 == 2) || (Slot1 == 3 && Slot2 == 2 && Slot3 == 1)) {
		GUI.Label(Rect(0, 75, 150, 175), "Cake Pop Polearm");
		BroadcastMessage("SpecialAttackReady", 123);
	}
	if (Slot1 == 2 && Slot2 == 2 && Slot3 == 2) {
		GUI.Label(Rect(0, 75, 150, 175), "Gummy Bind");
		BroadcastMessage("SpecialAttackReady", 222);
	}
	if (Slot1 == 2 && Slot2 == 2 && Slot3 == 3 || (Slot1 == 2 && Slot2 == 3 && Slot3 == 2) || (Slot1 == 3 && Slot2 == 2 && Slot3 == 2)) {
		GUI.Label(Rect(0, 75, 150, 175), "Yum-yum Shield");
		BroadcastMessage("SpecialAttackReady", 223);
	}
	if (Slot1 == 3 && Slot2 == 3 && Slot3 == 1 || (Slot1 == 3 && Slot2 == 1 && Slot3 == 3) || (Slot1 == 1 && Slot2 == 3 && Slot3 == 3)) {
		GUI.Label(Rect(0, 75, 150, 175), "Fondue Strike");
		BroadcastMessage("SpecialAttackReady", 331);
	}
	if (Slot1 == 3 && Slot2 == 3 && Slot3 == 2 || (Slot1 == 3 && Slot2 == 2 && Slot3 == 3) || (Slot1 == 2 && Slot2 == 3 && Slot3 == 3)) {
		GUI.Label(Rect(0, 75, 150, 175), "Sweet Frost");
		BroadcastMessage("SpecialAttackReady", 332);
	}
	if (Slot1 == 3 && Slot2 == 3 && Slot3 == 3) {
		GUI.Label(Rect(0, 75, 150, 175), "Rock Candy Armor");
		BroadcastMessage("SpecialAttackReady", 333);
>>>>>>> 447e36a73d7f1336fc81d92d936fdeb47c565cb7
	}
}

function TurnOffDestroyCandy() {
	DestroyCandy = false;
}

function ResetStanding () {
	StandingOverCandyDrop = 0;
}

function StandingOnChocolateDrop () {
	StandingOverCandyDrop = 1;
}

function StandingOnGummyDrop () {
	StandingOverCandyDrop = 2;
}

function StandingOnLollipopDrop () {
	StandingOverCandyDrop = 3;
}

function CheckSlots () {
	if (Slot1 == 0) {
		CurrentlyOpenSlot = 1;
	}
	if (Slot1 != 0 && Slot2 == 0) {
		CurrentlyOpenSlot = 2;
	}
	if (Slot1 != 0 && Slot2 != 0 && Slot3 == 0) {
		CurrentlyOpenSlot = 3;
	}
	if (Slot1 != 0 && Slot2 != 0 && Slot3 != 0) {
		CurrentlyOpenSlot = 0;
	}
}

function OnTriggerStay (object:Collider) {
<<<<<<< HEAD
	if (object.tag == "Chocolate Drop" || object.tag == "Gummy Drop" || object.tag == "Lollipop Drop") {
		if (DestroyCandy == true) {
			object.SendMessage("DestroyCandyDrop");
=======
	if (object.tag == "ChocolateDrop" || object.tag == "GummyDrop" || object.tag == "LollipopDrop") {
		if (DestroyCandy == true) {
			object.SendMessage("DestroyCandyDrop");
			DestroyCandy = false;
			ResetStanding();
>>>>>>> 447e36a73d7f1336fc81d92d936fdeb47c565cb7
		}
	}
}