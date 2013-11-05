/*******************************************************************************************
 *       Author: Lane Gresham, AKA LaneMax
 *         Blog: http://lanemax.blogspot.com/
 *      Version: 1.20
 * Created Date: 04/15/13 
 * Last Updated: 04/24/13
 *  
 *  Description: 
 *  
 *      Allows to display text on the screen.
  * 
 *  Inputs:
 * 
 *      helpInfo: Displays strings onto screen.
 * 
*******************************************************************************************/
using UnityEngine;
using System.Collections;

public class ShowHelpInfo : MonoBehaviour
{
    public string[] helpInfo;

    // Use this for initialization
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {

    }

    void OnGUI()
    {
        float row = 0;
        foreach (var str in helpInfo)
        {
            GUI.Label(new Rect(5, (row * 20) + 5, 1000, 22), str);

            row = row + 1f;
        }
    }
}
