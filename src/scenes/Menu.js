class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene")
    }
    preload() {
        //load images and sprites
        this.load.image('rocket', './assets/rocket.png')
        this.load.image('spaceship', './assets/spaceship.png')
        this.load.image('smallship', './assets/smallship.png')
        this.load.image('menubackground', './assets/menubackground.png')
        this.load.image('starfield','./assets/starfield.png')
        //load spritesheet
        this.load.spritesheet('explosion', './assets/explosion.png', {
            frameWidth: 64,
            frameHeight: 32,
            startFrame: 0,
            endFrame: 9
        })
        //load sfx
        this.load.audio('sfx-select', './assets/sfx-select.wav')
        this.load.audio('sfx-explosion', './assets/sfx-explosion.wav')
        this.load.audio('sfx-shot', './assets/sfx-shot.wav')
    }
    create() {
        //configure animation and bind to current scene
        this.anims.create({
            key: 'explode',
            frames: this.anims.generateFrameNumbers('explosion', { start: 0, end: 9, first: 0}),
            frameRate: 30
        })


        let menuConfig = {
            fontFamily: 'Georgia',
            fontSize: '35px',
            //backgroundColor: '#F3B141',
            //color: '#843605',
            color: '#00008B',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        let subConfig = {
            fontFamily: 'Georgia',
            fontSize: '25px',
            //backgroundColor: '#F3B141',
            //color: '#843605',
            color: '#FF00FF',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        this.menubackground = this.add.tileSprite(0, 0, 640, 480, 'menubackground').setOrigin(0,0)
        //display menu text
        this.add.text(game.config.width/2, game.config.height/3 - borderUISize - borderPadding, 'Rocket Patrol: Into the Solar Flare', menuConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize-borderPadding, 'Move mouse pointer to move rocket', subConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2, 'Left-click to fire', subConfig).setOrigin(0.5)
        //menuConfig.backgroundColor = '#00FF00'
        menuConfig.color = '#9370db'
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize * 5, 'Press < for Novice or > for Expert', subConfig).setOrigin(0.5)


        //define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
        //this.add.text(20, 20, "Rocket Patrol Menu")
        //this.scene.start("playScene")
    }
    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
          //low difficulty
          game.settings = {
            spaceshipSpeed: 3,
            smallshipSpeed: 4,
            gameTimer: 60000    
          }
          this.sound.play('sfx-select')
          this.scene.start('playScene')    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
          //high difficulty
          game.settings = {
            spaceshipSpeed: 4,
            smallshipSpeed: 5,
            gameTimer: 45000    
          }
          this.sound.play('sfx-select')
          this.scene.start('playScene')    
        }
    }
}
