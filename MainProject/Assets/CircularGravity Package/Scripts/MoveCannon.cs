/*******************************************************************************************
 *       Author: Lane Gresham, AKA LaneMax
 *         Blog: http://lanemax.blogspot.com/
 *      Version: 1.20
 * Created Date: 04/15/13 
 * Last Updated: 04/24/13
 *  
 *  Description: 
 *  
 *      Controls the cannon.
 * 
 * 
 *  Inputs:
 * 
 *      speed: How fast the turret turns.
 * 
*******************************************************************************************/
using UnityEngine;
using System.Collections;

public class MoveCannon : MonoBehaviour
{
    //How fast the turret turns
    public float speed = 1f;

    //Use this for initialization
    void Start()
    {

    }

    //Update is called once per frame
    void Update()
    {
        this.transform.rotation = this.transform.localRotation;

        float horMovement = Input.GetAxis("Horizontal");
        float verMovement = Input.GetAxis("Vertical");

        if (horMovement != 0)
        {
            this.transform.Rotate(new Vector3(0f, horMovement, 0f) * speed * Time.deltaTime);
        }

        if (verMovement != 0)
        {
            this.transform.Rotate(new Vector3(0f, 0f, verMovement) * speed * Time.deltaTime);
        }
    }
}
