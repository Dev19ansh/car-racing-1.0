class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
      cars=[car1,car2,car3,car4];
    }
  }

  play(){
    form.hide();
    textSize(30);
    //text("Game Start", 120, 100)
    Player.getPlayerInfo();
    drawSprites();

    if(allPlayers !== undefined){
    //  var display_position = 130;
    /* for(var plr in allPlayers){
        if (plr === "player" + player.index)
          fill("red")
        else
          fill("black");

        display_position+=20;
        textSize(15);
        text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)*/
       var index=0;
       var y=displayHeight;
        for(var plr in allPlayers){
          y=displayHeight-allPlayers[plr].distance;
          cars[index].y=y;
          
          if(index===player.index-1){
            cars[index].shapeColor="red";
            camera.position.x=cars[index].x;
            camera.position.y=cars[index].y;
          }
          else{
            cars[index].shapeColor="blue";
            
          }
          index+=1;
        }
        
      }
    

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
  }
}
