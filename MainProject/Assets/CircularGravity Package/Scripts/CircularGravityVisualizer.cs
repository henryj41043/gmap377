/*******************************************************************************************
 *       Author: Lane Gresham, AKA LaneMax
 *         Blog: http://lanemax.blogspot.com/
 *      Version: 1.20
 * Created Date: 04/15/13 
 * Last Updated: 04/24/13
 *  
 *  Description: 
 *  
 *      The CircularGravityVisualizer is used in correlation with a GameObject that contains
 *      the CircularGravity script and allows you to interact with the objects CircularGravity 
 *      properties. A good tool for getting an idea for a scene or debugging.
 * 
 *  How To Use:
 *  
 *      Simply drag and drop / assign this script to whatever GameObject you would like. Then 
 *      drag and drop the object that contains the CircularGravity script into the 
 *      circularGravityGameObject property.
 * 
 *  Inputs:
 *      
 *      circularGravityGameObject: Assign the current object that has CircularGravity to 
 *      display the GUI for thoese properties.
 *      
 *      guiLocation: Used to set the GUI location.
 *      
 *******************************************************************************************/
using UnityEngine;
using UnityEngine.Serialization;
using System.Collections;

public class CircularGravityVisualizer : MonoBehaviour
{
    #region Properties

    //Assign the current object that has CircularGravity to display the GUI for thoese properties
    public GameObject circularGravityGameObject;

    //Used to set the GUI location
    public Vector2 guiLocation = new Vector2(0f, 0f);

    //Min and Max for the hSliderRadius
    [System.Serializable]
    public class RadiusProperties
    {
        public float min = 0f;
        public float max = 75f;
    }
    public RadiusProperties radiusProperties;

    //Min and Max for the hSliderForcePower
    [System.Serializable]
    public class ForcePower
    {
        public float min = -200f;
        public float max = 200f;
    }
    public ForcePower forcePower;

    //Min and Max for the hSliderPulseSpeed
    [System.Serializable]
    public class PulseSpeed
    {
        public float min = 0f;
        public float max = 100f;
    }
    public PulseSpeed pulseSpeed;

    //Min and Max for the hSliderPulseMinSize
    [System.Serializable]
    public class PulseMinSize
    {
        public float min = 0f;
        public float max = 75f;
    }
    public PulseMinSize pulseMinSize;

    //Min and Max for the hSliderPulseMaxSize
    [System.Serializable]
    public class PulseMaxSize
    {
        public float min = 0f;
        public float max = 75f;
    }
    public PulseMaxSize pulseMaxSize;

    //GUI Properties
    private float hSliderRadius;
    private float hSliderForcePower;
    private bool togglePulse;
    private bool toggleNoGravity;
    private float hSliderPulseSpeed;
    private float hSliderPulseMinSize;
    private float hSliderPulseMaxSize;

    //Gravity Options
    private Vector3 gravityEarths = new Vector3(0f, -9.78f, 0f);
    private Vector3 gravityZeroG = new Vector3(0f, 0f, 0f);

    #endregion

    #region Unity Events

    //Use this for initialization
    void Start()
    {
        //Default Gravity
        Physics.gravity = gravityZeroG;

        //Default GUI values 
        hSliderRadius = 10.0f;
        hSliderForcePower = 0.0f;
        togglePulse = false;
        hSliderPulseSpeed = 25.0f;
        hSliderPulseMinSize = 0.0f;
        hSliderPulseMaxSize = 8.0f;
    }

    //Update is called once per frame
    void Update()
    {
        ToggleGravity();
    }
    
    //Draws the GUI
    void OnGUI()
    {
        GUIStyle labelGUIStyle = new GUIStyle();
        labelGUIStyle.normal.textColor = Color.white;
        labelGUIStyle.alignment = TextAnchor.MiddleRight;

        GUI.Label(new Rect(guiLocation.x + 5, guiLocation.y + 5, 100, 20), "Force Power:", labelGUIStyle);
        hSliderForcePower = GUI.HorizontalSlider(new Rect(guiLocation.x + 110, guiLocation.y + 10, 200, 20), hSliderForcePower, forcePower.min, forcePower.max);
        GUI.Label(new Rect(guiLocation.x + 111.5f, guiLocation.y + 4, 100, 20), "|", labelGUIStyle);

        toggleNoGravity = GUI.Toggle(new Rect(guiLocation.x + 315, guiLocation.y + 5, 80, 20), toggleNoGravity, "No Gravity");
        togglePulse = GUI.Toggle(new Rect(guiLocation.x + 315, guiLocation.y + 25, 50, 20), togglePulse, "Pulse");

        float topLocButton;

        if (!togglePulse)
        {
            GUI.Label(new Rect(guiLocation.x + 5, guiLocation.y + 25, 100, 20), "Custom Radius:", labelGUIStyle);
            hSliderRadius = GUI.HorizontalSlider(new Rect(guiLocation.x + 110, guiLocation.y + 30, 200, 20), hSliderRadius, radiusProperties.min, radiusProperties.max);

            topLocButton = 50;
        }
        else
        {
            GUI.Label(new Rect(guiLocation.x + 5, guiLocation.y + 25, 100, 20), "pulse Max Size:", labelGUIStyle);
            hSliderPulseMaxSize = GUI.HorizontalSlider(new Rect(guiLocation.x + 110, guiLocation.y + 30, 200, 20), hSliderPulseMaxSize, pulseMaxSize.min, pulseMaxSize.max);

            GUI.Label(new Rect(guiLocation.x + 5, guiLocation.y + 50, 100, 20), "Pulse Min Size:", labelGUIStyle);
            hSliderPulseMinSize = GUI.HorizontalSlider(new Rect(guiLocation.x + 110, guiLocation.y + 55, 200, 20), hSliderPulseMinSize, pulseMinSize.min, pulseMinSize.max);

            GUI.Label(new Rect(guiLocation.x + 5, guiLocation.y + 75, 100, 20), "Pulse Speed:", labelGUIStyle);
            hSliderPulseSpeed = GUI.HorizontalSlider(new Rect(guiLocation.x + 110, guiLocation.y + 80, 200, 20), hSliderPulseSpeed, pulseSpeed.min, pulseSpeed.max);

            topLocButton = 100;
        }

        if (GUI.Button(new Rect(guiLocation.x + 260, guiLocation.y + topLocButton, 50, 20), "Reset"))
        {
            Application.LoadLevel(Application.loadedLevelName);
        }

        try
        {
            CircularGravity circularGravity = circularGravityGameObject.GetComponent<CircularGravity>();

            if (!togglePulse)
            {
                circularGravity.radiusProperties.radius = hSliderRadius;
            }
            circularGravity.forcePower = hSliderForcePower;
            circularGravity.pulseProperties.pulse = togglePulse;
            circularGravity.pulseProperties.speed = hSliderPulseSpeed;
            circularGravity.pulseProperties.minSize = hSliderPulseMinSize;
            circularGravity.pulseProperties.maxSize = hSliderPulseMaxSize;

        }
        catch (System.Exception)
        {
            Debug.LogWarning("Error reading CircularGravity GameObject");
        }
    }

    #endregion

    #region Functions

    //Used to switch gravity toggle the gravity
    private void ToggleGravity()
    {
        if (toggleNoGravity)
        {
            if (Physics.gravity != gravityZeroG)
                Physics.gravity = gravityZeroG;
        }
        else
        {
            if (Physics.gravity != gravityEarths)
                Physics.gravity = gravityEarths;
        }
    }

    #endregion
}