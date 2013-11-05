/*******************************************************************************************
 *       Author: Lane Gresham, AKA LaneMax
 *         Blog: http://lanemax.blogspot.com/
 *      Version: 1.20
 * Created Date: 04/15/13 
 * Last Updated: 04/24/13
 *  
 *  Description: 
 *  
 *      Allows the camera to look at the given object.
 * 
 * 
 *  Inputs:
 * 
 *      lookAtObject: Looks at whatever GameObejct is assigned to it.
 * 
*******************************************************************************************/
using UnityEngine;
using System.Collections;

public class LookAtObject : MonoBehaviour
{
    //Looks at whatever GameObejct is assigned to it
    public GameObject lookAtObject;

    //Use this for initialization
    void Start()
    {

    }

    //Update is called once per frame
    void Update()
    {
        Camera.main.transform.LookAt(lookAtObject.transform);
    }
}
