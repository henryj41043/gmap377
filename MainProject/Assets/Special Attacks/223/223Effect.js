#pragma strict

function PushStrength (receivedPushStength : float) {
	//Somehow send a message to CircularGravity.cs telling it its new strength
}

function PushRadius (receivedPushRadius : float) {
	//Somehow send a message to CircularGravity.cs telling it its new radius
}

function Duration (receivedDuration : float) {
	Invoke("DestroySelf", receivedDuration);
}

function DestroySelf () {
	Destroy(gameObject);
}