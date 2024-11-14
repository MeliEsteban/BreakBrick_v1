// URL to explain PHASER scene: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/scene/

export default class Game extends Phaser.Scene {
  constructor() {
    super("Game");
  }



  create() {
    //Background
     this.cameras.main.setBackgroundColor("#603191");

    //Pala
     this.rectangle = this.add.rectangle(400, 500, 140, 30, 0xa6a2a6);

    //Pelota
     this.ball = this.add.circle(350, 50, 20, 0xf22120);

    //Fisicas pala
     this.physics.add.existing(this.rectangle);
     this.rectangle.body.setImmovable(true);
     this.rectangle.body.setCollideWorldBounds(true);

    //Fisicas pelota
     this.physics.add.existing(this.ball);
     this.ball.body.setCollideWorldBounds(true);
     this.ball.body.setBounce(1);
     this.ball.body.setVelocity(350, 300);

    //Obstáculo
     this.obstacle = this.add.rectangle(300, 200, 110, 70, 0x7be657),
     this.physics.add.existing(this.obstacle);
     this.obstacle.body.setImmovable(true);
     this.obstacle.body.setBounce(1);

    //Perder
     this.final = this.add.rectangle(400,600, 800, 15, 0xf9e929)
     this.physics.add.existing(this.final);
     this.final.body.setCollideWorldBounds(true);

    //Creacion de teclas de movimiento
     this.cursor = this.input.keyboard.createCursorKeys();

    //Colliders 
     this.physics.add.collider(
      this.rectangle,
      this.ball,
      null,
      null,
      this
    )
   this.physics.add.collider(
    this.ball,
    this.obstacle,
    this.handleCollision = (ball, obstacle) => {
      obstacle.destroy();
    },
    null,
    this
   )
   this.physics.add.collider(
    this.ball,
    this.final,
    this.resLevel = (ball, final) => {
      this.scene.restart();
    },
    null,
    this
   );

    this.add.text(40, 20, "BREAK BRICK", {
      font: '32px Broken World',
      fill: '#06030c'
  });
  }

  update() {
        this.input.on('pointermove', (pointer) => {
          this.rectangle.x = pointer.x;
      });
  }
}
