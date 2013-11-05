//Collect Items

private var Slot1 : int;
private var Slot2 : int;
private var Slot3 : int;
private var CurrentlyOpenSlot : int;

private var StandingOverCandyDrop : int;

private var DestroyCandy : boolean;

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
	if (Input.GetKeyDown("e")) {
		ResetSlots();
	}
}

function OnGUI() {
	GUI.Label(Rect(0, 50, 100, 150), Slot1 + ", " + Slot2 + ", " + Slot3);
	if (Slot1 == 1 && Slot2 == 1 && Slot3 == 1) {
		GUI.Label(Rect(0, 75, 100, 175), "Melting Pot");
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
	if (object.tag == "ChocolateDrop" || object.tag == "GummyDrop" || object.tag == "LollipopDrop") {
		if (DestroyCandy == true) {
			object.SendMessage("DestroyCandyDrop");
			DestroyCandy = false;
			ResetStanding();
		}
	}
}

//Basic Attacks

private var movement : CharacterMotor;

private var currentHit : int;
var phaseChange : float;
private var ReadyToAttack : boolean;

var hitbox : GameObject;

var damage : float;
private var baseDamage : float;
var range : float;
private var baseRange : float;
var windupMovementSpeed : float;

private var hitInfo : RaycastHit;

private var moveDirection : Vector3 = Vector3.zero;

function Start () {

	//add para here for testing
	damage = OnStartGame.paraArray[2];
	//
	baseDamage = damage;
	baseRange = range;
	currentHit = 0;
	ReadyToAttack = true;
}

function IncreaseDamage (receivedDamageIncrease : float) {
	damage = baseDamage + receivedDamageIncrease;
}

function IncreaseDamageDuration (receivedDamageDuration : float) {
	Invoke("RevertDamage", receivedDamageDuration);
}

function IncreaseRange (receivedRangeIncrease : float) {
	range = baseRange + receivedRangeIncrease;
}

function IncreaseRangeDuration (receivedRangeDuration : float) {
	Invoke("RevertRange", receivedRangeDuration);
}

function RevertDamage () {
	damage = baseDamage;
}

function RevertRange () {
	range = baseRange;
}

function Update () {
	if (Input.GetMouseButtonDown(0) && ReadyToAttack == true) {
		AttackPhase1();
		ReadyToAttack = false;
	}
}

function AttackPhase1 () {
	Invoke("AttackPhase2", phaseChange);
	movement = GetComponent(CharacterMotor);
	movement.enabled = false;
}

function AttackPhase2 () {
	//Striking phase, deal damage
	Invoke("AttackPhase3", phaseChange);
	//hitbox.SetActive(true);
	
	
	var fwd = transform.TransformDirection (Vector3.forward);
	if (Physics.Raycast (transform.position, fwd, hitInfo, range) && hitInfo.transform.tag == "Enemy") {
		//Debug.Log("Dealing damage to enemy");
		hitInfo.collider.gameObject.SendMessage("ApplyDamage", damage);
	}
}

function AttackPhase3 () {
	movement = GetComponent(CharacterMotor);
	movement.enabled = true;
	ReadyToAttack = true;
	//hitbox.SetActive(false);
}

//Dodge

private var movement : CharacterMotor;

var phaseChange1 : float;
var phaseChange2 : float;
private var readyToDodge : boolean;

var travelSpeed : float;
var recoverSpeed : int;

private var moveDirection : Vector3 = Vector3.zero;
private var controller : CharacterController;

private var dodging : boolean;

function Start () {
	readyToDodge = true;
	dodging = false;
	controller = GetComponent(CharacterController);
}

function Update () {
	if (Input.GetKeyDown("space") && readyToDodge == true) {
		DodgePhase1();
		readyToDodge = false;
	}
	if (dodging == true) {
		controller.Move(moveDirection * Time.deltaTime * travelSpeed);
	}
}

function DodgePhase1 () {
	moveDirection = transform.forward;
	Invoke("DodgePhase2", phaseChange1);
	movement = GetComponent(CharacterMotor);
	movement.enabled = false;
}

function DodgePhase2 () {
	dodging = true;
	Invoke("DodgePhase3", phaseChange2);
}

function DodgePhase3 () {
	dodging = false;
	movement = GetComponent(CharacterMotor);
	movement.enabled = true;
	readyToDodge = true;
}

//PlayerHealth

var maxHealth : int;
private var curHealth : int;
var heartGUI:GUITexture;
private var Xstart:float = -0.138;
private var spacingX:float;
private var spacingY:float = 0.63;
private var Xinterval:float = 0.055;
private var hearts = new Array();

function Start () {
	//add para here for testing
	maxHealth = OnStartGame.paraArray[3];
	//
	curHealth = maxHealth;
	AddHearts();
}

function AddHearts(){
	spacingX = Xstart;
	for(var i = 0; i < curHealth ; i++){
		hearts[i] = Instantiate(heartGUI, Vector3(spacingX, spacingY, 0), Quaternion.identity );
		spacingX += Xinterval;
	}
}

function ApplyDamage (damage : int) {
	if(curHealth <= 0){
		return;
	}
	
	ModifyHearts(damage);
	
	if(curHealth <= 0){
		Die();
	}	
}

function Die () {
	Application.LoadLevel(0);
	//Destroy(this.gameObject);
}

function ModifyHearts(lostHearts : int){
	for(var i = 0; i < lostHearts; i++){
    	hearts[curHealth - 1].active = false;
    	curHealth--;
    	if(curHealth <= 0){
    		break;
    	}
    }
}