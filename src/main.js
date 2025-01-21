//Name - Leo Medellin
//Title - Rocket Patrol: Into the Solar Flare
//Approximate Time - 12 hours

//added new, smaller, faster ship worth more points (5 points)
//+3 seconds to clock for each hit and -3 seconds for each miss (5 points)
//mouse control for player movement and left-click to fire (5 points)
//made rocket controllable after fired (1 point)
//new title screen (3 points)
//new scrolling tile sprite for background (1 point)

//Sources:
//https://docs.phaser.io/api-documentation/class/time-clock
//https://docs.phaser.io/phaser/concepts/time
//https://docs.phaser.io/api-documentation/class/input-inputmanager
//https://www.youtube.com/watch?v=156GXOSjJ4g


let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}
let game = new Phaser.Game(config)


// reserve keyboard bindings
let keyFIRE, keyRESET, keyLEFT, keyRIGHT


// UI sizes
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3
