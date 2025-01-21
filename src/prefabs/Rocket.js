//Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame)
        //add object to existing scene, displayList, and updateList
        scene.add.existing(this)
        this.isFiring = false //track rocket's firing status
        this.moveSpeed = 2 //rocket speed in pixels/frame
        this.sfxShot = scene.sound.add('sfx-shot')
        this.pointer = scene.input.activePointer;
    }


    update() {
        //left and right movement
        //if (!this.isFiring) {
            //if (keyLEFT.isDown && this.x >= borderUISize + this.width) {
                //this.x -= this.moveSpeed
            //} else if (keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width) {
                //this.x += this.moveSpeed
            //}
        //}

        //if (!this.isFiring) {
            const position = Phaser.Math.Clamp(this.pointer.x, borderUISize + this.width, game.config.width - borderUISize - this.width);
            this.x += (position - this.x) / 5;
        //}
        //fire button
        if(this.pointer.leftButtonDown() && !this.isFiring) {
            this.isFiring = true
            this.sfxShot.play()
        }
        //if(Phaser.Input.Keyboard.JustDown(keyFIRE) && !this.isFiring) {
            //this.isFiring = true
            //this.sfxShot.play()
        //}
        //if fired, move up
        if(this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
            this.y -= this.moveSpeed
        }
        //reset on miss
        if(this.y <= borderUISize * 3 + borderPadding) {
            this.isFiring = false
            this.y = game.config.height - borderUISize - borderPadding
            this.scene.clock.delay -= 3000 //subtract time for each miss
        }
    }
   
    reset() {
        this.isFiring = false
        this.y = game.config.height - borderUISize - borderPadding
    }
}
