//#pragma strict
//
//var mySkin : GUISkin;
//private var windowRect : Rect;
//private var paused : boolean = false;
//private var togglePlayer: boolean = false;
//private var toggleEnemy: boolean = false;
//private var toggleSpecialAttack1: boolean = false;
//private var toggleSpecialAttack2: boolean = false;
//private var toggleSpecialAttack3: boolean = false;
//private var toggleSpecialAttack4: boolean = false;
//private var toggleSpecialAttack5: boolean = false;
//private var toggleSpecialAttack6: boolean = false;
//private var toggleSpecialAttack7: boolean = false;
//private var toggleSpecialAttack8: boolean = false;
//private var toggleSpecialAttack9: boolean = false;
//private var toggleSpecialAttack10: boolean = false;
//var PlayerCamera : String = "10";
//var PlayerRunSpeed : String = "10";
//var PlayerBasicAttack : String = "100";
//var PlayerHP : String = "10";
//var EnemyRunSpeed: String = "3";
//var EnemyHP: String = "100";
//var EnemyDamage: String = "1";
//var EnemyAttackSpeed: String = "1";
//
//var MeltingPotDistance: String = "5";
//var MeltingPotDamage: String = "10";
//
//var ChocolateTruffleStaringDistance: String = "3";
//var ChocolateTruffleEndDistance: String = "10";
//var ChocolateTruffleSpeed: String = "5";
//var ChocolateTruffleWidth: String = "3";
//var ChocolateTruffleDamage: String = "100";
///*
//var TruffleFragStartingDistance : String = "3";
//var TruffleFragEndDistance : String = "25";
//var TruffleFragSpeed : String = "15";
//var TruffleFragWidth : String = "1";
//var TruffleFragDamage : String = "100";
//*/
//
//var StickySlideDamage : String = "100";
////var StickySlideSpeed : String = "50";
//
//
//
//static var paraArray = new Array();
//static var MeltingPotArray = new Array();
//static var ChocolateTruffleArray = new Array();
//static var TruffleFragArray = new Array();
//static var StickySlideArray = new Array();
//static var CakePopPolearmArray = new Array();
//static var GummyBindArray = new Array();
//static var YumYumShieldArray = new Array();
//static var FondueStrikeArray = new Array();
//static var SweetFrostArray = new Array();
//static var RockCandyArmorArray = new Array();
//
//
//function Start () {
//	windowRect = new Rect(Screen.width / 2 - 200, Screen.height / 2 - 200, 400, 400);
//}
//
//function Update () {
//	if(Input.GetKeyDown("p")){
//		if(paused){
//			paused = false;
//			Screen.lockCursor = true;
//		}else{
//			paused = true;
//			Screen.lockCursor = false;
//		}
//	}
//	
//	if(paused){
//		Time.timeScale = 0;
//	}else{
//		Time.timeScale = 1;
//	}
//	   GetComponent.<LockCursor>().enabled = true;
//}
//
//function OnGUI(){
//
//	if(paused){
//	
//		GetComponent.<LockCursor>().enabled = false;
//		
//		GUI.color = Color.white;
//		windowRect = GUI.Window(0, windowRect, windowFunc, "Pause Menu");
//		
//		paraArray[0] = System.Int32.Parse(PlayerCamera);
//		SmoothFollow.distance = paraArray[0];
//		
//    	paraArray[1] = System.Int32.Parse(PlayerRunSpeed);
//    	CharacterMotorMovement.maxForwardSpeed = paraArray[1];
//    	CharacterMotorMovement.maxSidewaysSpeed = paraArray[1];
//    	CharacterMotorMovement.maxBackwardsSpeed = paraArray[1];
//    	
//    	paraArray[2] = System.Int32.Parse(PlayerBasicAttack);
//    	BasicAttack.damage = paraArray[2];
//    	
//    	paraArray[3] = System.Int32.Parse(PlayerHP);
//    	PlayerHealth.maxHealth = paraArray[3];
//    	GameObject.FindGameObjectWithTag("Player").SendMessage("UpdateHealthPlayer");
//    	//Enemy	
//    	paraArray[4] = System.Int32.Parse(EnemyRunSpeed);
//    	MeleeEnemy.moveSpeed = paraArray[4];
//    	
//    	paraArray[5] = System.Int32.Parse(EnemyHP);
//    	MeleeEnemy.maximumHealth = paraArray[5];
//    	var temp = GameObject.FindGameObjectsWithTag("Enemy");
//    	for(var k = 0; k < temp.length; k++){
//    		temp[k].SendMessage("UpdateHealth");
//    	}
//    	
//    	paraArray[6] = System.Int32.Parse(EnemyDamage);
//    	MeleeEnemy.damage = paraArray[6];
//    	
//    	paraArray[7] = System.Int32.Parse(EnemyAttackSpeed);
//    	
//    	//Melting Pot
//		
//    	MeltingPotArray[1] = System.Int32.Parse(MeltingPotDistance);
//    	MeltingPot.distance = MeltingPotArray[1];
//    	
//    	MeltingPotArray[2] = System.Int32.Parse(MeltingPotDamage);
//    	MeltingPot.damagePerTick = MeltingPotArray[2];
//    	
//		
//    	//Chocolate Truffle
//    	
//    	ChocolateTruffleArray[1] = System.Int32.Parse(ChocolateTruffleStaringDistance);
//    	ChocolateTruffle.startingDistance = ChocolateTruffleArray[1];
//    	
//    	ChocolateTruffleArray[2] = System.Int32.Parse(ChocolateTruffleEndDistance);
//    	ChocolateTruffle.distance = ChocolateTruffleArray[2];
//    	
//    	ChocolateTruffleArray[3] = System.Int32.Parse(ChocolateTruffleSpeed);
//    	ChocolateTruffle.speed = ChocolateTruffleArray[3];
//    	
//    	ChocolateTruffleArray[4] = System.Int32.Parse(ChocolateTruffleWidth);
//    	ChocolateTruffle.width = ChocolateTruffleArray[4];
//    	
//    	ChocolateTruffleArray[5] = System.Int32.Parse(ChocolateTruffleDamage);
//    	ChocolateTruffle.damage = ChocolateTruffleArray[5];
//    	
//    	
//    	//Truffle Frag
//    	/*
//    	TruffleFragArray[1] = System.Int32.Parse(TruffleFragStartingDistance);
//    	TruffleFrag.startingDistance = TruffleFragArray[1];
//    	
//    	TruffleFragArray[2] = System.Int32.Parse(TruffleFragEndDistance);
//    	TruffleFrag.maximumDistance = TruffleFragArray[2];
//    	
//    	TruffleFragArray[3] = System.Int32.Parse(TruffleFragSpeed);
//    	TruffleFrag.speed = TruffleFragArray[3];
//    	
//    	ChocolateTruffleArray[4] = System.Int32.Parse(TruffleFragWidth);
//    	TruffleFrag.width = TruffleFragArray[4];
//    	
//    	ChocolateTruffleArray[5] = System.Int32.Parse(TruffleFragDamage);
//    	TruffleFrag.damage = TruffleFragArray[5];
//    	*/
//		
//    	// Sticky Slide
//    	
//    	
//    	StickySlideArray[1] = System.Int32.Parse(StickySlideDamage);
//    	StickySlide.damage = StickySlideArray[1];
//    	/*
//    	StickySlideArray[2] = System.Int32.Parse(StickySlideSpeed);
//    	StickySlide.travelSpeed = StickySlideArray[2];
//    	*/
//    
//	}
//	
//}
//
//function windowFunc(id : int){
//		
//		
//
//		var GuiTextPosition = 150;
//		var GuiBoxFieldPosition = 270;
//
//		togglePlayer = GUI.Toggle(new Rect(10, 25, 140, 20), togglePlayer, "Player");
//		toggleEnemy = GUI.Toggle(new Rect(10, 45, 140, 20), toggleEnemy, "Enemy");
//		toggleSpecialAttack1 = GUI.Toggle(new Rect(10, 65, 140, 20), toggleSpecialAttack1, "Melting Pot");
//		toggleSpecialAttack2 = GUI.Toggle(new Rect(10, 85, 140, 20), toggleSpecialAttack2, "Chocolate Truffle");
//		toggleSpecialAttack3 = GUI.Toggle(new Rect(10, 105, 140, 20), toggleSpecialAttack3, "Truffle Frag");
//		toggleSpecialAttack4 = GUI.Toggle(new Rect(10, 125, 140, 20), toggleSpecialAttack4, "Sticky Slide");
//		toggleSpecialAttack5 = GUI.Toggle(new Rect(10, 145, 140, 20), toggleSpecialAttack5, "Cake Pop Polearm");
//		toggleSpecialAttack6 = GUI.Toggle(new Rect(10, 165, 140, 20), toggleSpecialAttack6, "Gummy Bind");
//		toggleSpecialAttack7 = GUI.Toggle(new Rect(10, 185, 140, 20), toggleSpecialAttack7, "Yum-yum Shield");
//		toggleSpecialAttack8 = GUI.Toggle(new Rect(10, 205, 140, 20), toggleSpecialAttack8, "Fondue Strike");
//		toggleSpecialAttack9 = GUI.Toggle(new Rect(10, 225, 140, 20), toggleSpecialAttack9, "Sweet Frost");
//		toggleSpecialAttack10 = GUI.Toggle(new Rect(10, 245, 140, 20), toggleSpecialAttack10, "Rock Candy Armor");
//	
//	 	if(togglePlayer)
//        {
//        		
//	        toggleEnemy = false;
//			toggleSpecialAttack1 = false;
//			toggleSpecialAttack2 = false;
//			toggleSpecialAttack3 = false;
//			toggleSpecialAttack4 = false;
//			toggleSpecialAttack5 = false;
//			toggleSpecialAttack6 = false;
//			toggleSpecialAttack7 = false;
//			toggleSpecialAttack8 = false;
//			toggleSpecialAttack9 = false;
//			toggleSpecialAttack10 = false;
//        		
//			GUI.Label (Rect (GuiTextPosition, 20, 100, 20), "CameraDistance");
//			PlayerCamera = GUI.TextField (Rect (GuiBoxFieldPosition, 20, 100, 20), PlayerCamera, 25);
//			
//			GUI.Label (Rect (GuiTextPosition, 50, 100, 20), "PlayerSpeed");
//			PlayerRunSpeed = GUI.TextField (Rect (GuiBoxFieldPosition, 50, 100, 20),PlayerRunSpeed, 25);
//			
//			GUI.Label (Rect (GuiTextPosition, 80, 120, 20), "PlayerBasicAttack");
//			PlayerBasicAttack = GUI.TextField (Rect (GuiBoxFieldPosition, 80, 100, 20), PlayerBasicAttack, 25);
//			
//			GUI.Label (Rect (GuiTextPosition, 110, 100, 20), "PlayerHP");
//			PlayerHP = GUI.TextField (Rect (GuiBoxFieldPosition, 110, 100, 20), PlayerHP, 25);
//			
//		}
//        else if(toggleEnemy)
//        {
//        	togglePlayer = false;
//			toggleSpecialAttack1 = false;
//			toggleSpecialAttack2 = false;
//			toggleSpecialAttack3 = false;
//			toggleSpecialAttack4 = false;
//			toggleSpecialAttack5 = false;
//			toggleSpecialAttack6 = false;
//			toggleSpecialAttack7 = false;
//			toggleSpecialAttack8 = false;
//			toggleSpecialAttack9 = false;
//			toggleSpecialAttack10 = false;
//			
//        	GUI.Label (Rect (GuiTextPosition, 20, 120, 20), "EnemyRunSpeed");
//			EnemyRunSpeed = GUI.TextField (Rect (GuiBoxFieldPosition, 20, 100, 20), EnemyRunSpeed, 25);
//			
//			GUI.Label (Rect (GuiTextPosition, 50, 100, 20), "EnemyHP");
//			EnemyHP = GUI.TextField (Rect (GuiBoxFieldPosition, 50, 100, 20), EnemyHP, 25);
//			
//			GUI.Label (Rect (GuiTextPosition, 80, 100, 20), "EnemyDamage");
//			EnemyDamage = GUI.TextField (Rect (GuiBoxFieldPosition, 80, 100, 20), EnemyDamage, 25);
//			
//			GUI.Label (Rect (GuiTextPosition, 110, 120, 20), "EnemyAttackSpeed");
//			EnemyAttackSpeed = GUI.TextField (Rect (GuiBoxFieldPosition, 110, 100, 20), EnemyAttackSpeed, 25);
//        }
//        else if(toggleSpecialAttack1)//Melting Pot
//        {
//        	togglePlayer = false;
//	        toggleEnemy = false;	
//			toggleSpecialAttack2 = false;
//			toggleSpecialAttack3 = false;
//			toggleSpecialAttack4 = false;
//			toggleSpecialAttack5 = false;
//			toggleSpecialAttack6 = false;
//			toggleSpecialAttack7 = false;
//			toggleSpecialAttack8 = false;
//			toggleSpecialAttack9 = false;
//			toggleSpecialAttack10 = false;
//			
//			
//        	GUI.Label (Rect (GuiTextPosition, 20, 100, 20), "Distance");
//			MeltingPotDistance = GUI.TextField (Rect (GuiBoxFieldPosition, 20, 100, 20),MeltingPotDistance, 25);
//			
//			GUI.Label (Rect (GuiTextPosition, 50, 100, 20), "Damage");
//			MeltingPotDamage = GUI.TextField (Rect (GuiBoxFieldPosition, 50, 100, 20),MeltingPotDamage, 25);
//        	
//	
//        }
//        else if(toggleSpecialAttack2) //Chocolate Truffle
//        {
//        	togglePlayer = false;
//	        toggleEnemy = false;	
//			toggleSpecialAttack1 = false;
//			toggleSpecialAttack3 = false;
//			toggleSpecialAttack4 = false;
//			toggleSpecialAttack5 = false;
//			toggleSpecialAttack6 = false;
//			toggleSpecialAttack7 = false;
//			toggleSpecialAttack8 = false;
//			toggleSpecialAttack9 = false;
//			toggleSpecialAttack10 = false;
//			
//        	GUI.Label (Rect (GuiTextPosition, 20, 100, 20), "Starting Distance");
//			ChocolateTruffleStaringDistance = GUI.TextField (Rect (GuiBoxFieldPosition, 20, 100, 20),ChocolateTruffleStaringDistance, 25);
//			
//			GUI.Label (Rect (GuiTextPosition, 50, 100, 20), "End Distance");
//			ChocolateTruffleEndDistance = GUI.TextField (Rect (GuiBoxFieldPosition, 50, 100, 20),ChocolateTruffleEndDistance, 25);
//			
//			GUI.Label (Rect (GuiTextPosition, 80, 100, 20), "Speed");
//			ChocolateTruffleSpeed = GUI.TextField (Rect (GuiBoxFieldPosition, 80, 100, 20), ChocolateTruffleSpeed, 25);
//			
//			GUI.Label (Rect (GuiTextPosition, 110, 100, 20), "Width");
//			ChocolateTruffleWidth = GUI.TextField (Rect (GuiBoxFieldPosition, 110, 100, 20),ChocolateTruffleWidth, 25);
//			
//			GUI.Label (Rect (GuiTextPosition, 140, 100, 20), "Damage");
//			ChocolateTruffleDamage = GUI.TextField (Rect (GuiBoxFieldPosition, 140, 100, 20),ChocolateTruffleDamage, 25);
//			
//			
//        	
//	
//        }
//        else if(toggleSpecialAttack3) //Truffle Frag
//        {
//        	togglePlayer = false;
//	        toggleEnemy = false;	
//			toggleSpecialAttack1 = false;
//			toggleSpecialAttack2 = false;
//			toggleSpecialAttack4 = false;
//			toggleSpecialAttack5 = false;
//			toggleSpecialAttack6 = false;
//			toggleSpecialAttack7 = false;
//			toggleSpecialAttack8 = false;
//			toggleSpecialAttack9 = false;
//			toggleSpecialAttack10 = false;
//			/*
//        	GUI.Label (Rect (GuiTextPosition, 20, 100, 20), "Strat Distance");
//			TruffleFragStartingDistance = GUI.TextField (Rect (GuiBoxFieldPosition, 20, 100, 20),TruffleFragStartingDistance, 25);
//			
//			GUI.Label (Rect (GuiTextPosition, 50, 100, 20), "End Distance");
//			TruffleFragEndDistance = GUI.TextField (Rect (GuiBoxFieldPosition, 50, 100, 20),TruffleFragEndDistance, 25);
//			
//			GUI.Label (Rect (GuiTextPosition, 80, 100, 20), "Speed");
//			TruffleFragSpeed = GUI.TextField (Rect (GuiBoxFieldPosition, 80, 100, 20), TruffleFragSpeed, 25);
//			
//			GUI.Label (Rect (GuiTextPosition, 110, 100, 20), "Width");
//			ChocolateTruffleWidth = GUI.TextField (Rect (GuiBoxFieldPosition, 110, 100, 20),TruffleFragWidth, 25);
//			
//			GUI.Label (Rect (GuiTextPosition, 140, 100, 20), "Damage");
//			TruffleFragDamage = GUI.TextField (Rect (GuiBoxFieldPosition, 140, 100, 20),TruffleFragDamage, 25);
//			*/
//	
//        }
//        else if(toggleSpecialAttack4) //Sticky Slide
//        {
//        	togglePlayer = false;
//	        toggleEnemy = false;	
//			toggleSpecialAttack1 = false;
//			toggleSpecialAttack2 = false;
//			toggleSpecialAttack3 = false;
//			toggleSpecialAttack5 = false;
//			toggleSpecialAttack6 = false;
//			toggleSpecialAttack7 = false;
//			toggleSpecialAttack8 = false;
//			toggleSpecialAttack9 = false;
//			toggleSpecialAttack10 = false;
//			
//        	GUI.Label (Rect (GuiTextPosition, 20, 100, 20), "Damage");
//			StickySlideDamage = GUI.TextField (Rect (GuiBoxFieldPosition, 20, 100, 20), StickySlideDamage, 25);
//			
//			/*
//			GUI.Label (Rect (GuiTextPosition, 50, 100, 20), "Speed");
//			StickySlideSpeed = GUI.TextField (Rect (GuiBoxFieldPosition, 50, 100, 20),StickySlideSpeed, 25);
//        	*/
//	
//        }
//        else if(toggleSpecialAttack5)
//        {
//        	togglePlayer = false;
//	        toggleEnemy = false;	
//			toggleSpecialAttack1 = false;
//			toggleSpecialAttack2 = false;
//			toggleSpecialAttack3 = false;
//			toggleSpecialAttack4 = false;
//			toggleSpecialAttack6 = false;
//			toggleSpecialAttack7 = false;
//			toggleSpecialAttack8 = false;
//			toggleSpecialAttack9 = false;
//			toggleSpecialAttack10 = false;
//			/*
//        	GUI.Label (Rect (GuiTextPosition, 20, 100, 20), "CameraDistance");
//			PlayerCamera = GUI.TextField (Rect (GuiBoxFieldPosition, 20, 100, 20), PlayerCamera, 25);
//			
//			GUI.Label (Rect (GuiTextPosition, 50, 100, 20), "PlayerSpeed");
//			PlayerRunSpeed = GUI.TextField (Rect (GuiBoxFieldPosition, 50, 100, 20),PlayerRunSpeed, 25);
//        	*/
//	
//        }
//        else if(toggleSpecialAttack6)
//        {
//        	togglePlayer = false;
//	        toggleEnemy = false;	
//			toggleSpecialAttack1 = false;
//			toggleSpecialAttack2 = false;
//			toggleSpecialAttack3 = false;
//			toggleSpecialAttack4 = false;
//			toggleSpecialAttack5 = false;
//			toggleSpecialAttack7 = false;
//			toggleSpecialAttack8 = false;
//			toggleSpecialAttack9 = false;
//			toggleSpecialAttack10 = false;
//			/*
//        	GUI.Label (Rect (GuiTextPosition, 20, 100, 20), "CameraDistance");
//			PlayerCamera = GUI.TextField (Rect (GuiBoxFieldPosition, 20, 100, 20), PlayerCamera, 25);
//			
//			GUI.Label (Rect (GuiTextPosition, 50, 100, 20), "PlayerSpeed");
//			PlayerRunSpeed = GUI.TextField (Rect (GuiBoxFieldPosition, 50, 100, 20),PlayerRunSpeed, 25);
//        	*/
//	
//        }
//        else if(toggleSpecialAttack7)
//        {
//        	togglePlayer = false;
//	        toggleEnemy = false;	
//			toggleSpecialAttack1 = false;
//			toggleSpecialAttack2 = false;
//			toggleSpecialAttack3 = false;
//			toggleSpecialAttack4 = false;
//			toggleSpecialAttack5 = false;
//			toggleSpecialAttack6 = false;
//			toggleSpecialAttack8 = false;
//			toggleSpecialAttack9 = false;
//			toggleSpecialAttack10 = false;
//			/*
//        	GUI.Label (Rect (GuiTextPosition, 20, 100, 20), "CameraDistance");
//			PlayerCamera = GUI.TextField (Rect (GuiBoxFieldPosition, 20, 100, 20), PlayerCamera, 25);
//			
//			GUI.Label (Rect (GuiTextPosition, 50, 100, 20), "PlayerSpeed");
//			PlayerRunSpeed = GUI.TextField (Rect (GuiBoxFieldPosition, 50, 100, 20),PlayerRunSpeed, 25);
//        	*/
//	
//        }
//        else if(toggleSpecialAttack8)
//        {
//        	togglePlayer = false;
//	        toggleEnemy = false;	
//			toggleSpecialAttack1 = false;
//			toggleSpecialAttack2 = false;
//			toggleSpecialAttack3 = false;
//			toggleSpecialAttack4 = false;
//			toggleSpecialAttack5 = false;
//			toggleSpecialAttack6 = false;
//			toggleSpecialAttack7 = false;
//			toggleSpecialAttack9 = false;
//			toggleSpecialAttack10 = false;
//			
//			/*
//        	GUI.Label (Rect (GuiTextPosition, 20, 100, 20), "CameraDistance");
//			PlayerCamera = GUI.TextField (Rect (GuiBoxFieldPosition, 20, 100, 20), PlayerCamera, 25);
//			
//			GUI.Label (Rect (GuiTextPosition, 50, 100, 20), "PlayerSpeed");
//			PlayerRunSpeed = GUI.TextField (Rect (GuiBoxFieldPosition, 50, 100, 20),PlayerRunSpeed, 25);
//        	*/
//	
//        }
//        else if(toggleSpecialAttack9)
//        {
//        
//        	togglePlayer = false;
//	        toggleEnemy = false;	
//			toggleSpecialAttack1 = false;
//			toggleSpecialAttack2 = false;
//			toggleSpecialAttack3 = false;
//			toggleSpecialAttack4 = false;
//			toggleSpecialAttack5 = false;
//			toggleSpecialAttack6 = false;
//			toggleSpecialAttack7 = false;
//			toggleSpecialAttack8 = false;
//			toggleSpecialAttack10 = false;
//			/*
//        	GUI.Label (Rect (GuiTextPosition, 20, 100, 20), "CameraDistance");
//			PlayerCamera = GUI.TextField (Rect (GuiBoxFieldPosition, 20, 100, 20), PlayerCamera, 25);
//			
//			GUI.Label (Rect (GuiTextPosition, 50, 100, 20), "PlayerSpeed");
//			PlayerRunSpeed = GUI.TextField (Rect (GuiBoxFieldPosition, 50, 100, 20),PlayerRunSpeed, 25);
//        	*/
//	
//        }
//        else if(toggleSpecialAttack10)
//        {
//        	togglePlayer = false;
//	        toggleEnemy = false;	
//			toggleSpecialAttack1 = false;
//			toggleSpecialAttack2 = false;
//			toggleSpecialAttack3 = false;
//			toggleSpecialAttack4 = false;
//			toggleSpecialAttack5 = false;
//			toggleSpecialAttack6 = false;
//			toggleSpecialAttack7 = false;
//			toggleSpecialAttack8 = false;
//			toggleSpecialAttack9 = false;
//			/*
//        	GUI.Label (Rect (GuiTextPosition, 20, 100, 20), "CameraDistance");
//			PlayerCamera = GUI.TextField (Rect (GuiBoxFieldPosition, 20, 100, 20), PlayerCamera, 25);
//			
//			GUI.Label (Rect (GuiTextPosition, 50, 100, 20), "PlayerSpeed");
//			PlayerRunSpeed = GUI.TextField (Rect (GuiBoxFieldPosition, 50, 100, 20),PlayerRunSpeed, 25);	
//			*/
//        }
//	
//		GUI.BringWindowToFront(id); GUI.FocusWindow(id);
//		
//	
//}