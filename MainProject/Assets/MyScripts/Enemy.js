var maximumHitPoints = 100.0;
var hitPoints = 100.0;
var chocolate : GameObject;
var gummy : GameObject;
var lollipop : GameObject;
private var candyPieces : GameObject[] = new GameObject[3];
private var hitCounter = 0;

function Start(){
	candyPieces[0] = chocolate;
	candyPieces[1] = gummy;
	candyPieces[2] = lollipop;
}

function ApplyDamage (damage : float) {
	if(hitPoints < 0.0){
		return;
	}
	
	hitPoints -= damage;
	hitCounter++;
	
	if((hitCounter % 3) == 0){
		DropCandy();
	}
	
	if(hitPoints <= 0.0){
		Die();
	}
}

function Die () {
	DropCandy();
	Destroy(this.gameObject);
}

function DropCandy () {
	var drop = Random.Range(0,3);
	var candyDrop = Instantiate(candyPieces[drop], this.transform.position + Vector3(1,0,0), this.transform.rotation);
}