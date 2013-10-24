#pragma strict

var speed : float;
var attackRange : float;
var attackSpeed : float;
var damage : int;
private var timeSinceLastAttack : float = 0;
private var playerPositionX : float;
private var playerPositionY : float;
private var playerPositionZ : float;
private var myPositionX : float;
private var myPositionY : float;
private var myPositionZ : float;
// add para here for testing
speed = OnStartGame.paraArray[4];
attackSpeed = OnStartGame.paraArray[7];
damage = OnStartGame.paraArray[6];
//

function Start () {
}

function Update () {
	timeSinceLastAttack += Time.deltaTime;
	var target : GameObject = GameObject.FindGameObjectWithTag("Player");
	playerPositionX = target.transform.position.x;
	playerPositionY = target.transform.position.y;
	playerPositionZ = target.transform.position.z;
	myPositionX = transform.position.x;
	myPositionY = transform.position.y;
	myPositionZ = transform.position.z;
	if (playerPositionX > myPositionX)
	{
		rigidbody.MovePosition(rigidbody.position + (Vector3.right * speed * Time.deltaTime));
	}
	if (playerPositionX < myPositionX)
	{
		rigidbody.MovePosition(rigidbody.position + (-Vector3.right * speed * Time.deltaTime));
	}
	if (playerPositionY > myPositionY)
	{
		rigidbody.MovePosition(rigidbody.position + (Vector3.up * speed * Time.deltaTime));
	}
	if (playerPositionY < myPositionY)
	{
		rigidbody.MovePosition(rigidbody.position + (-Vector3.up * speed * Time.deltaTime));
	}
	if (playerPositionZ > myPositionZ)
	{
		rigidbody.MovePosition(rigidbody.position + (Vector3.forward * speed * Time.deltaTime));
	}
	if (playerPositionZ < myPositionZ)
	{
		rigidbody.MovePosition(rigidbody.position + (-Vector3.forward * speed * Time.deltaTime));
	}
	if(Vector3.Distance(this.transform.position, target.transform.position) < attackRange){
		basicAttack(target);
	}
}

function basicAttack(target : GameObject){
	if(timeSinceLastAttack > 1 / attackSpeed){
		target.SendMessage("ApplyDamage", damage);
		timeSinceLastAttack = 0;
	}
}