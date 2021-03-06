//Variables declared in this page:
/* victoryScene winningRays WinningRay WinningScene rayIsNotBehind */

//Variables declared in other files:
/* global _W _H universe startPng camZ spaceship earth planet1 planet2 planet3 planet4 planet5 planet6 planet7 planet8 planet9 planet10 BGM ship1 status explosion_sound ending explosion_ball start_explosion_ball explosion_bgm cam1 started theStartPage narratePoem soundMap terrainPic xp yp maxSpeed sb displayPoem space_age victoryBGM victory keyPressed Position Spaceship */
/* global planetlist planets aliveScene planetCount Planet generatePlanet planetIsNotTooFar drawPlanets planetIsNotTooFar arePlanetsOverlapped isCollide testCollision Terrain */
/* global particles explosion_timer diedScene Particle Explosion Re_explosion start_explosion */
/* global EndScene */
/* global reviveAnimation() */
/* global startPage */
/* global startMillis startMillisNotInitialized Scoreboard poem DisplayWords isClose getWarningLevel Warning drawBackground*/
/* global camX camY tiltZ tiltX speedZ moveAround */




function victoryScene() {
    victory.draw();
  }

let winningRays = [];

class WinningRay extends Position{
  constructor(x, y, z, angle, radius) {
    super(x, y, z);
    this.angle = angle;
    this.radius = radius;
    this.hue = int(random(140, 280));
    this.saturation = int(random(28, 70));
    this.speed = 1;
  }

  draw() {
    push();
    this.z += this.speed;
    translate(this.x, this.y, this.z);
    noStroke();
    colorMode(HSB);
    fill(this.hue, this.saturation, 100, 10);
    sphere(this.radius);
    pop();
  }
}

class WinningScene {
  constructor(x, y, z, radius) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.radius = radius;
    this.generateRay();
  }

  generateRay() {
    for (let i = 0; i <= 20; i++) {
      let increment = int(random(10, 20));
      for (let i = int(random(0, 20)); i <= 360; i += increment) {
        if (random(1) > 0.4) {
          let newRay = new WinningRay(0, -this.radius, camZ - 100, i, 1);
          winningRays.push(newRay);
        }
      }
      this.radius += 40;
    }
  }

  draw() {
    if (winningRays != []) {
      winningRays.filter(rayIsNotBehind);
    }
    for (let i = 0; i < winningRays.length; i++) {
      // winningRays[i].z += 3;
      push();
      rotateZ(winningRays[i].angle);
      winningRays[i].draw();
      pop();
    }
  }
}

function rayIsNotBehind(ray) {
  if (ray.z - camZ > 200) {
    // console.log("Ray destroyed");
    return false;
  } else {
    return true;
  }
}

/* global p5 sphere int detail random objPositon alpha blue brightness color green hue lerpColor lightness red saturation background clear colorMode fill noFill noStroke stroke erase noErase 2D Primitives arc ellipse circle line point quad rect square triangle ellipseMode noSmooth rectMode smooth strokeCap strokeJoin strokeWeight bezier bezierDetail bezierPoint bezierTangent curve curveDetail curveTightness curvePoint curveTangent beginContour beginShape bezierVertex curveVertex endContour endShape quadraticVertex vertex plane box sphere cylinder cone ellipsoid torus loadModel model HALF_PI PI QUARTER_PI TAU TWO_PI DEGREES RADIANS print frameCount deltaTime focused cursor frameRate noCursor displayWidth displayHeight windowWidth windowHeight windowResized width height fullscreen pixelDensity displayDensity getURL getURLPath getURLParams remove disableFriendlyErrors noLoop loop isLooping push pop redraw select selectAll removeElements changed input createDiv createP createSpan createImg createA createSlider createButton createCheckbox createSelect createRadio createColorPicker createInput createFileInput createVideo createAudio VIDEO AUDIO createCapture createElement createCanvas resizeCanvas noCanvas createGraphics blendMode drawingContext setAttributes boolean string number applyMatrix resetMatrix rotate rotateX rotateY rotateZ scale shearX shearY translate storeItem getItem clearStorage removeItem createStringDict createNumberDict append arrayCopy concat reverse shorten shuffle sort splice subset float int str boolean byte char unchar hex unhex join match matchAll nf nfc nfp nfs split splitTokens trim deviceOrientation accelerationX accelerationY accelerationZ pAccelerationX pAccelerationY pAccelerationZ rotationX rotationY rotationZ pRotationX pRotationY pRotationZ turnAxis setMoveThreshold setShakeThreshold deviceMoved deviceTurned deviceShaken keyIsPressed key keyCode keyPressed keyReleased keyTyped keyIsDown movedX movedY mouseIsPressed mouseX mouseY pmouseX pmouseY winMouseX winMouseY pwinMouseX pwinMouseY mouseButton mouseWheel requestPointerLock exitPointerLock touches createImage saveCanvas saveFrames image tint noTint imageMode pixels blend copy filter get loadPixels set updatePixels loadImage loadJSON loadStrings loadTable loadXML loadBytes httpGet httpPost httpDo Output createWriter save saveJSON saveStrings saveTable day hour minute millis month second year abs ceil constrain dist exp floor lerp log mag map max min norm pow round sq sqrt fract createVector noise noiseDetail noiseSeed randomSeed random randomGaussian acos asin atan atan2 cos sin tan degrees radians angleMode textAlign textLeading textSize textStyle textWidth textAscent textDescent loadFont text textFont orbitControl debugMode noDebugMode ambientLight specularColor directionalLight pointLight lights lightFalloff spotLight noLights loadShader createShader shader resetShader normalMaterial texture textureMode textureWrap ambientMaterial emissiveMaterial specularMaterial shininess camera perspective ortho frustum createCamera setCamera CENTER CORNER CORNERS POINTS WEBGL RGB ARGB HSB LINES CLOSE BACKSPACE DELETE ENTER RETURN TAB ESCAPE SHIFT CONTROL OPTION ALT UP_ARROW DOWN_ARROW LEFT_ARROW RIGHT_ARROW sampleRate freqToMidi midiToFreq soundFormats getAudioContext userStartAudio loadSound createConvolver setBPM saveSound getMasterVolume masterVolume soundOut chain drywet biquadFilter process freq res gain toggle setType freq setType pan phase triggerAttack triggerRelease setADSR attack decay sustain release dispose notes polyvalue AudioVoice noteADSR setADSR noteAttack noteRelease dispose isLoaded playMode set isLooping isPlaying isPaused setVolume pan getPan rate duration currentTime jump channels sampleRate frames getPeaks reverseBuffer onended setPath setBuffer processPeaks addCue removeCue clearCues save getBlob getLevel toggleNormalize waveform analyze getEnergy getCentroid linAverages logAverages getOctaveBands fade attackTime attackLevel decayTime decayLevel releaseTime releaseLevel setADSR setRange setExp triggerAttack triggerRelease r width setType input output stream mediaStream currentSource enabled amplitude getSources setSource bands process panner process positionX positionY positionZ orient orientX orientY orientZ setFalloff maxDist rollof leftDelay rightDelay process delayTime feedback filter setType process convolverNode process impulses addImpulse resetImpulse toggleImpulse sequence setBPM getBPM addPhrase removePhrase getPhrase replaceSequence onStep setBPM musicalTimeMode maxIterations synced bpm timeSignature interval iterations compressor process attack knee ratio threshold release reduction record isDetected update onPeak WaveShaperNode process getAmount getOversample amp setInput connect disconnect play pause stop set smooth start add mult loop */
