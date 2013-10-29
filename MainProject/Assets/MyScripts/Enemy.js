#pragma strict

var chocolateDrop : GameObject;
var gummyDrop : GameObject;
var lollipopDrop : GameObject;
var manager : GameObject;
private var candyDrop : int;

var maximumHealth : int;
private var currentHealth : int;

var speed : float;
var attackRange : float;
var damage : int;
var phaseChange1 : float;
var phaseChange2 : float;
var hitbox : GameObject;
private var readyToAttack : boolean;
private var moveDirection : Vector3 = Vector3.zero;
private var rotationLock : boolean;

var movementSlow : float;
var attackSlow : float;

private var playerPositionX : float;
private var playerPositionY : float;
private var playerPositionZ : float;
private var myPositionX : float;
private var myPositionY : float;
private var myPositionZ : float;
// add para here for testing
//speed = OnStartGame.paraArray[4];
//attackSpeed = OnStartGame.paraArray[7];
//damage = OnStartGame.paraArray[6];
//

function Start () {
	ReadyToAttack();
	currentHealth = maximumHealth;
	rotationLock = false;
}

function FixedUpdate () {
	var target : GameObject = GameObject.FindGameObjectWithTag("Player");
	if (rotationLock == false) {
		transform.LookAt(target.transform);
	}
	playerPositionX = target.transform.position.x;
	playerPositionY = target.transform.position.y;
	playerPositionZ = target.transform.position.z;
	myPositionX = transform.position.x;
	myPositionY = transform.position.y;
	myPositionZ = transform.position.z;
	if (playerPositionX > myPositionX)
	{
		rigidbody.MovePosition(rigidbody.position + (Vector3.right * speed * movementSlow * Time.deltaTime));
	}
	if (playerPositionX < myPositionX)
	{
		rigidbody.MovePosition(rigidbody.position + (-Vector3.right * speed * movementSlow  * Time.deltaTime));
	}
	if (playerPositionY > myPositionY)
	{
		rigidbody.MovePosition(rigidbody.position + (Vector3.up * speed * movementSlow  * Time.deltaTime));
	}
	if (playerPositionY < myPositionY)
	{
		rigidbody.MovePosition(rigidbody.position + (-Vector3.up * speed * movementSlow  * Time.deltaTime));
	}
	if (playerPositionZ > myPositionZ)
	{
		rigidbody.MovePosition(rigidbody.position + (Vector3.forward * speed * movementSlow  * Time.deltaTime));
	}
	if (playerPositionZ < myPositionZ)
	{
		rigidbody.MovePosition(rigidbody.position + (-Vector3.forward * speed * movementSlow  * Time.deltaTime));
	}
	if (Vector3.Distance(this.transform.position, target.transform.position) < attackRange){
		if (readyToAttack == true) {
			AttackPhase1();
			NotReadyToAttack();
			Debug.Log("Initiating Attack Phase 1");
		}
	}
	if (currentHealth <= 0) {
		KillSelf();
	}
}

function ReadyToAttack () {
	readyToAttack = true;
}

function NotReadyToAttack () {
	readyToAttack = false;
}

function AttackPhase1 () {
	rotationLock = true;
	Invoke("AttackPhase2", phaseChange1 * attackSlow);
}

function AttackPhase2 () {
	Invoke("AttackPhase3", phaseChange2);
	hitbox.SetActive(true);
	hitbox.SendMessage("Damage", damage);
}

function AttackPhase3 () {
	rotationLock = false;
	ReadyToAttack();
	hitbox.SetActive(false);
}

function MovementSlow (receivedMovementSlow : float) {
	if (receivedMovementSlow < movementSlow) {
		movementSlow = receivedMovementSlow;
		CancelInvoke("RevertSlows");
		Invoke("RevertSlows", 0.5);
	}
}

function AttackSlow (receivedAttackSlow : float) {
	if (receivedAttackSlow < attackSlow) {
		attackSlow = receivedAttackSlow;
		CancelInvoke("RevertSlows");
		Invoke("RevertSlows", 0.5);
	}
}

function RevertSlows () {
	movementSlow = 1;
	attackSlow = 1;
}

function ApplyDamage (damage : int) {
	currentHealth -= damage;
}

function KillSelf() {
	DropCandy();
	Destroy(gameObject);
}

function DropCandy() {
	candyDrop = Random.Range(1, 4);
	if (candyDrop == 1) {
		Instantiate(chocolateDrop, transform.position, transform.rotation);
	}
	if (candyDrop == 2) {
		Instantiate(gummyDrop, transform.position, transform.rotation);
	}
	if (candyDrop == 3) {
		Instantiate(lollipopDrop, transform.position, transform.rotation);
	}
}