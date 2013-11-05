/*******************************************************************************************
 *       Author: Lane Gresham, AKA LaneMax
 *         Blog: http://lanemax.blogspot.com/
 *      Version: 1.20
 * Created Date: 04/15/13 
 * Last Updated: 04/24/13
 *  
 *  Description: 
 *  
 *      Controls for Marble.
 * 
 * 
 *  Inputs:
 * 
 *      inputCircularGravity: Input control to shoot
 *      
 *      movementForce: Movement force/speed.
 * 
*******************************************************************************************/
using UnityEngine;
using System.Collections;

public class RollControls : MonoBehaviour 
{
    //Input control to shoot
    public string inputCircularGravity = "Jump";

    //Movement force/speed
    public float movementForce = 3.0f;

	// Use this for initialization
	void Start () 
    {
        EnableCircularGravity(false);
	}

	// Update is called once per frame
	void Update () 
    {
        if (Input.GetButton(inputCircularGravity))
        {
            EnableCircularGravity(true);
        }
        else
        {
            EnableCircularGravity(false);
        }
	}

    void FixedUpdate()
    {
        //Right Left controls
        float horMovement = movementForce * Input.GetAxis("Horizontal");
        
        //Forward Backward controls
        float verMovement = movementForce * Input.GetAxis("Vertical");
        
        //Up Down controls. Note: For Zero G 
        float floatMovement = movementForce * Input.GetAxis("Mouse ScrollWheel");

        if (horMovement != 0)
        {
            this.transform.rigidbody.AddForce(new Vector3(horMovement, 0, 0), ForceMode.Impulse);
        }

        if (verMovement != 0)
        {
            this.transform.rigidbody.AddForce(new Vector3(0, 0, verMovement), ForceMode.Impulse);
        }

        if (floatMovement != 0)
        {
            this.transform.rigidbody.AddForce(new Vector3(0, floatMovement * 4, 0), ForceMode.Impulse);
        }
    }

    //Enables/Disable the circular gravity
    private void EnableCircularGravity(bool enable)
    {
        CircularGravity circularGravity = this.GetComponent<CircularGravity>();

        circularGravity.enable = enable;
    }
}