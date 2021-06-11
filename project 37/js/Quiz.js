class Quiz {
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
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    
    question.hide
    background("cream")
    fill(0)
    textSize(30)
    text("result of the quiz",340,50)
    Contestant.getPlayerInfo()
    if(allContestants!==undefined){
      var answers=230
      fill(0)
      textSize(30)
      text("correct answer is given in green colour",130,230)
      for(var plr in allContestants){
        var corect="2"
        if(corect===allContestants[plr].answer){
          fill("green")
        }
        else{
          fill("red")
        }
        answers+=30
        textSize(20)
        text(allContestants[plr].name+"="+allContestants[plr].answer,250,answers)
      }
    }
    
  }

}
