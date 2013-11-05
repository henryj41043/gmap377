var range = 3.0;
var fireRate = 0.5;
var damage = 10.0;

private var nextFireTime = 0.0;

function Start() {
	
}

function Update() {
	
}

function Fire () {
	if (Time.time - fireRate > nextFireTime)
		nextFireTime = Time.time - Time.deltaTime;
	
	while(nextFireTime < Time.time) {
		FireOneShot();
		nextFireTime += fireRate;
	}
}

function FireOneShot () {
	var direction = transform.TransformDirection(Vector3.forward);
	var hit : RaycastHit;
	
	if (Physics.Raycast (transform.position, direction, hit, range)) {		
		hit.collider.SendMessageUpwards("ApplyDamage", damage, SendMessageOptions.DontRequireReceiver);
	}		
}