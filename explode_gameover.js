let x = 0
let y = 0
let realx = 0
let realy = 0
let z = 10
let theta = 0
let angle = 0



let _W;
let _H;
let explosde_sound;

let scoreboard1;
let explosion_ball;
let re_explosion_ball


function preload(){
  soundFormats('mp3', 'ogg');
	explosde_sound = loadSound("https://cdn.glitch.com/48b3940f-dc59-484b-bb22-aaa9c4991ca3%2F11369.mp3?v=1617032492745");
}

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	explosion_ball = new explosion(0, 0, 100, 4, 250, 250, 0, 10);
  re_explosion_ball = new re_explosion(0, 0, 100, 1000);
	scoreboard1 = new scoreboard(windowHeight);
}


function draw() {
	background(0);
  

  
	if (explosion_ball.getSize() < 900) {
		explosion_ball.draw();
		
	}


	if (explosion_ball.getSize() > 900) {
		background(0);
    re_explosion_ball.draw();
		scoreboard1.draw();
		// fragments1 = new fragments(50, 100, 0);
		// fragments1.draw()

	}





}




class Explosion {
	constructor(x, y, z, size, r, g, b, transparent) {
		this.x = x;
		this.y = y;
		this.z = z;
		this.size = size;
		this.r = r;
		this.g = g;
		this.b = b;
		this.transparent = transparent;
    this.explosion_status=false;
	}

	growBall() {
    

		if (this.transparent < 255) {
			this.transparent += 0.3;
		}
    if (this.size < 10) {
			this.size = this.size * 1.009;
      this.b += 0.8;
		}
    if (this.size > 10 && this.size < 70 ) {
			this.size = this.size * 1.0653;
      this.b += 0.8;
		}
    if (this.size > 70 && this.size < 100 ) {
			this.size = this.size * 1.0065;
      this.b += 0.08;
		}
		if (this.size > 100 && this.size < 900) {
			this.size = this.size * 1.04;
      this.b += 2.5;
		}
    
	}
	getSize() {
		return this.size
	}

	draw() {
		this.growBall();
    
    if(this.explosion_status == false){
      explosde_sound.play();
      console.log(this.explosion_status)
      this.explosion_status=true;
    }
    
		push();
		this.x += 5 * cos(frameCount / 1);

		translate(this.x, this.y, this.z)

		push();

		noStroke();

		fill(this.r, this.g, this.b, this.transparent);

		for (let i = 1; i < 6; i++) {
			noStroke();
			fill(this.r, this.g, this.b, this.transparent);
			sphere(this.size + i * 5, 24, 16);
		}

		pop();

		push();
		rotateX(PI / 3);
		noStroke();
		fill(245, 245, 237);
		torus(this.size * 2.5, this.size * 0.07);
		pop();




	}

}






class Re_explosion {
	constructor(x, y, z, size) {
		this.x = x;
		this.y = y;
		this.z = z;
		this.size = size;	
    // this.explosion_status=false;
	}

	growBall() {
    


		if (this.size > 20) {
			this.size = this.size * 0.9;
		}
    
	}
	getSize() {
		return this.size
	}

	draw() {
		this.growBall();
    
    // if(this.explosion_status == false){
    //   explosde_sound.play();
    //   this.explosion_status=true;
    // }
    
		push();


		translate(this.x, this.y, this.z)

    


		
    noStroke();
    fill(255);
    sphere(this.size, 24, 16);
	
		pop();






	}

}



















class endScene {
	constructor(w, s = 0) {
		this.x = 0;
		this.y = 0;
		this.z = -200;
		this.size = w / 2;
		this.graphics = createGraphics(w/3, w/3)
		this.graphics.textSize(w/30);
		this.graphics.fill(255);
		this.graphics.background(0, 0);
		this.graphics.textAlign(CENTER,CENTER);
		this.graphics.text("GAME OVER!\n you score: " + str(s), 0,0, w/3, w/3);

	}

	draw() {


		translate(this.x, this.y, this.z)
		rotateX(frameCount * 0.01);
		rotateY(frameCount * 0.01);
		rotateZ(frameCount * 0.01);

		stroke(255);
		texture(this.graphics);
		
		box(this.size);

	}


}


// class fragments {
// 	constructor(x, y, z, size) {
// 		this.x = x;
// 		this.y = y;
// 		this.z = z;
// 		this.size = size
// 	}
// 	draw() {
// 		translate(this.x, this.y, this.z)
// 		stroke(10);
// 		fill(255, 255, 255)
// 		push();

// 		let detailX;
// 		detailX = createSlider(3, 24, 3);
// 		detailX.position(10, height + 5);
// 		detailX.style('width', '80px');
// 		rotateY(millis() / 1000);
// 		torus(30, 15, detailX.value(), 12);
// 		pop();


// 		push();

// 		let detailY;
// 		detailY = createSlider(3, 16, 3);
// 		detailY.position(10, height + 5);
// 		detailY.style('width', '80px');
// 		rotateY(millis() / 1000);
// 		torus(30, 15, 16, detailY.value());
// 		pop();
// 	}


// }

/* global p5 sphere detail objPositon alpha blue brightness color green hue lerpColor lightness red saturation background clear colorMode fill noFill noStroke stroke erase noErase 2D Primitives arc ellipse circle line point quad rect square triangle ellipseMode noSmooth rectMode smooth strokeCap strokeJoin strokeWeight bezier bezierDetail bezierPoint bezierTangent curve curveDetail curveTightness curvePoint curveTangent beginContour beginShape bezierVertex curveVertex endContour endShape quadraticVertex vertex plane box sphere cylinder cone ellipsoid torus loadModel model HALF_PI PI QUARTER_PI TAU TWO_PI DEGREES RADIANS print frameCount deltaTime focused cursor frameRate noCursor displayWidth displayHeight windowWidth windowHeight windowResized width height fullscreen pixelDensity displayDensity getURL getURLPath getURLParams remove disableFriendlyErrors noLoop loop isLooping push pop redraw select selectAll removeElements changed input createDiv createP createSpan createImg createA createSlider createButton createCheckbox createSelect createRadio createColorPicker createInput createFileInput createVideo createAudio VIDEO AUDIO createCapture createElement createCanvas resizeCanvas noCanvas createGraphics blendMode drawingContext setAttributes boolean string number applyMatrix resetMatrix rotate rotateX rotateY rotateZ scale shearX shearY translate storeItem getItem clearStorage removeItem createStringDict createNumberDict append arrayCopy concat reverse shorten shuffle sort splice subset float int str boolean byte char unchar hex unhex join match matchAll nf nfc nfp nfs split splitTokens trim deviceOrientation accelerationX accelerationY accelerationZ pAccelerationX pAccelerationY pAccelerationZ rotationX rotationY rotationZ pRotationX pRotationY pRotationZ turnAxis setMoveThreshold setShakeThreshold deviceMoved deviceTurned deviceShaken keyIsPressed key keyCode keyPressed keyReleased keyTyped keyIsDown movedX movedY mouseIsPressed mouseX mouseY pmouseX pmouseY winMouseX winMouseY pwinMouseX pwinMouseY mouseButton mouseWheel requestPointerLock exitPointerLock touches createImage saveCanvas saveFrames image tint noTint imageMode pixels blend copy filter get loadPixels set updatePixels loadImage loadJSON loadStrings loadTable loadXML loadBytes httpGet httpPost httpDo Output createWriter save saveJSON saveStrings saveTable day hour minute millis month second year abs ceil constrain dist exp floor lerp log mag map max min norm pow round sq sqrt fract createVector noise noiseDetail noiseSeed randomSeed random randomGaussian acos asin atan atan2 cos sin tan degrees radians angleMode textAlign textLeading textSize textStyle textWidth textAscent textDescent loadFont text textFont orbitControl debugMode noDebugMode ambientLight specularColor directionalLight pointLight lights lightFalloff spotLight noLights loadShader createShader shader resetShader normalMaterial texture textureMode textureWrap ambientMaterial emissiveMaterial specularMaterial shininess camera perspective ortho frustum createCamera setCamera CENTER CORNER CORNERS POINTS WEBGL RGB ARGB HSB LINES CLOSE BACKSPACE DELETE ENTER RETURN TAB ESCAPE SHIFT CONTROL OPTION ALT UP_ARROW DOWN_ARROW LEFT_ARROW RIGHT_ARROW sampleRate freqToMidi midiToFreq soundFormats getAudioContext userStartAudio loadSound createConvolver setBPM saveSound getMasterVolume masterVolume soundOut chain drywet biquadFilter process freq res gain toggle setType freq setType pan phase triggerAttack triggerRelease setADSR attack decay sustain release dispose notes polyvalue AudioVoice noteADSR setADSR noteAttack noteRelease dispose isLoaded playMode set isLooping isPlaying isPaused setVolume pan getPan rate duration currentTime jump channels sampleRate frames getPeaks reverseBuffer onended setPath setBuffer processPeaks addCue removeCue clearCues save getBlob getLevel toggleNormalize waveform analyze getEnergy getCentroid linAverages logAverages getOctaveBands fade attackTime attackLevel decayTime decayLevel releaseTime releaseLevel setADSR setRange setExp triggerAttack triggerRelease r width setType input output stream mediaStream currentSource enabled amplitude getSources setSource bands process panner process positionX positionY positionZ orient orientX orientY orientZ setFalloff maxDist rollof leftDelay rightDelay process delayTime feedback filter setType process convolverNode process impulses addImpulse resetImpulse toggleImpulse sequence setBPM getBPM addPhrase removePhrase getPhrase replaceSequence onStep setBPM musicalTimeMode maxIterations synced bpm timeSignature interval iterations compressor process attack knee ratio threshold release reduction record isDetected update onPeak WaveShaperNode process getAmount getOversample amp setInput connect disconnect play pause stop set smooth start add mult loop */