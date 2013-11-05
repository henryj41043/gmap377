/*******************************************************************************************
 *       Author: Lane Gresham, AKA LaneMax
 *         Blog: http://lanemax.blogspot.com/
 *      Version: 1.20
 * Created Date: 04/15/13 
 * Last Updated: 04/24/13
 *  
 *  Description: 
 *  
 *      Used to rotate around a given object.
  * 
 *  Inputs:
 * 
 *      rotateAroundObject: Rotates around this GameObject.
 *      
 *      speed: Speed of rotation.
 *      
 *      axis: Axis of the rotation.
 * 
*******************************************************************************************/
using UnityEngine;
using System.Collections;

public class Shoot : MonoBehaviour
{
    //Input to shoot
    public string inputControl = "Jump";

    //GameObject to shoot
    public GameObject bullet;

    //Bullet Speed
    public float bulletPower = 1000f;

    //Bullet life
    public float bulletLife = 10f;

    //Use this for initialization
    void Start()
    {
    }

    //Update is called once per frame
    void Update()
    {

    }

    void FixedUpdate()
    {
        if (Input.GetButtonDown(inputControl))
        {
            GameObject instance = Instantiate(bullet, transform.position, transform.rotation) as GameObject;

            Rigidbody[] ArrayRigs = instance.GetComponentsInChildren<Rigidbody>();
            foreach (var item in ArrayRigs)
            {
                item.rigidbody.AddForce(this.transform.forward * bulletPower);
            }

            DestroyObject(instance, bulletLife);
        }
    }
}