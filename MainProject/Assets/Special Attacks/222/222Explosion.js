#pragma strict

function PullStrength (receivedPushStength : float) {
	//Somehow send a message to CircularGravity.cs telling it its new strength
}

function PullRadius (receivedPushRadius : float) {
	//Somehow send a message to CircularGravity.cs telling it its new radius
}

function PullDuration (receivedPullDuration : float) {
	Invoke("DestroySelf", receivedPullDuration);
}

function DestroySelf () {
	Destroy(gameObject);
}