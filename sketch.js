var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var car1,car2,car3,car4,cars;


function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-20);
  database = firebase.database();
  game = new Game();
  game.getState();

  car1 = createSprite(displayWidth/2-200,displayHeight-20,100,100);
  car2 = createSprite(displayWidth/2,displayHeight-20,100,100);
  car3 = createSprite(displayWidth/2+200,displayHeight-20,100,100);
  car4 = createSprite(displayWidth/2+400,displayHeight-20,100,100);

  game.start();

  
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
