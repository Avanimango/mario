function preload() {
	world_start = loadSound("world_start.wav");
	loin = loadSound("coin.wav")
	mario_death_ToT = loadSound("mariodie.wav")
	jump_vYv = loadSound("jump.wav")
	GAME_OVER = loadSound("gameover.wav")
	WHEN_MARIO_KILLS_ENEMY_BY_SR = loadSound("kick.wav")
	
	
	setSprites();
	MarioAnimation();
	
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas")
	instializeInSetup(mario);
	
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent("gameconsole")
  
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);


}
function modelLoaded() {
	console.log('Model Loaded!');
  }
  
  function gotPoses(results)
  {
	if(results.length > 0)
	{
	  noseX = results[0].pose.nose.x;
	  noseY = results[0].pose.nose.y;}
	}



function draw() {
	game()
	console.log("now now we have only 5 minutes left by sreesha maam")
}






