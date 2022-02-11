var gameState=0
function  preload() {
  quizImage=loadImage("Images/icon.png")
  nextImage=loadImage("Images/go.png")
  germanyImage=loadImage("Images/Germany.png")
  spainImage=loadImage("Images/spain.jpg")
  brazilImage=loadImage("Images/brazil.png")
  englandImage=loadImage("Images/england.jpg")
  italyImage=loadImage("Images/italy.png")
  argentinaImage=loadImage("Images/Argentina.jpg")
  uruguayImage=loadImage("images/Uruguay.jpg")
  lotharImage=loadImage("images/Lothar.jpg")
  iniestaImage=loadImage("images/Iniesta.jpg")
  laszloImage=loadImage("images/laszlo.jpg")
  burakImage=loadImage("images/burak.jpg")
  newZealandImage=loadImage("images/New_Zealand.png")
  fijiImage=loadImage("images/Fiji.png")
  vanautuImage=loadImage("images/Vanuatu.png")
  samoaImage=loadImage("images/Samoa.png")
  moroccoImage=loadImage("images/Morocco.png")
  japanImage=loadImage("images/Japan.png")
  togoImage=loadImage("images/Togo.png")
  portugalImage=loadImage("images/Portugal.png")
  greeceImage=loadImage("images/Greece.jpg")
  algeriaImage=loadImage("images/Algeria.png")
  colombiaImage=loadImage("images/Colombia.png")
  southAfricaImage=loadImage("images/South_Africa.png")
  q1Image=loadImage("images/2014.jpg")
  q2Image=loadImage("images/3.png")
  q4Image=loadImage("images/goal.png")
  q8Image=loadImage("images/2010.jpg")
  bgImage=loadImage("images/bg.jpg")
}
function setup() {
  createCanvas(windowWidth-20,windowHeight-20)
  quiz=createSprite(width*0.5,height*0.1)
  quiz.addImage(quizImage)
  quiz.scale=0.5
  next=createSprite(width*0.5,height*0.8)
  next.addImage(nextImage)
  next.scale=0.5

  germany=createSprite(width*0.4,height*0.8)
  germany.addImage(germanyImage)
  germany.scale=0.1

  samoaLogo=createSprite(width*0.4,height*0.8)
  samoaLogo.addImage(samoaImage)
  samoaLogo.scale=0.1


  nzLogo=createSprite(width*0.4,height*0.8)
  nzLogo.addImage(newZealandImage)
  nzLogo.scale=0.1

  colombiaLogo=createSprite(width*0.4,height*0.8)
  colombiaLogo.addImage(colombiaImage)
  colombiaLogo.scale=0.1

 greeceLogo=createSprite(width*0.4,height*0.8)
  greeceLogo.addImage(greeceImage)
  greeceLogo.scale=0.1

  spain=createSprite(width*0.46,height*0.292)
  spain.addImage(spainImage)
  spain.scale=0.02

  brazil=createSprite(width*0.45,height*0.492)
  brazil.addImage(brazilImage)
  brazil.scale=0.03

  england=createSprite(width*0.462,height*0.592)
  england.addImage(englandImage)
  england.scale=0.05

  germanyLogo=createSprite(width*0.472,height*0.392)
  germanyLogo.addImage(germanyImage)
  germanyLogo.scale=0.04

  italy=createSprite(width*0.46,height*0.292)
  italy.addImage(italyImage)
  italy.scale=0.2

  argentina=createSprite(width*0.475,height*0.492)
  argentina.addImage(argentinaImage)
  argentina.scale=0.05

  uruguay=createSprite(width*0.482,height*0.592)
  uruguay.addImage(uruguayImage)
  uruguay.scale=0.05

  lothar=createSprite(width*0.4,height*0.8)
  lothar.addImage(lotharImage)
  lothar.scale=0.3

  iniesta=createSprite(width*0.4,height*0.8)
  iniesta.addImage(iniestaImage)
  iniesta.scale=0.2

  burak=createSprite(width*0.4,height*0.8)
  burak.addImage(burakImage)
  burak.scale=0.7

  laslzo=createSprite(width*0.4,height*0.8)
  laslzo.addImage(laszloImage)
  laslzo.scale=0.3

  newZealand=createSprite(width*0.51,height*0.292)
  newZealand.addImage(newZealandImage)
  newZealand.scale=0.1

  fiji=createSprite(width*0.472,height*0.392)
  fiji.addImage(fijiImage)
  fiji.scale=0.3

  vanautu=createSprite(width*0.475,height*0.492)
  vanautu.addImage(vanautuImage)
  vanautu.scale=0.3

  samoa=createSprite(width*0.512,height*0.592)
  samoa.addImage(samoaImage)
  samoa.scale=0.05

  morocco=createSprite(width*0.472,height*0.392)
  morocco.addImage(moroccoImage)
  morocco.scale=0.19

  japan=createSprite(width*0.475,height*0.492)
  japan.addImage(japanImage)
  japan.scale=0.09

  togo=createSprite(width*0.462,height*0.592)
  togo.addImage(togoImage)
  togo.scale=0.05

  Sa=createSprite(width*0.50,height*0.392)
  Sa.addImage(southAfricaImage)
  Sa.scale=0.04

  colombia=createSprite(width*0.495,height*0.492)
  colombia.addImage(colombiaImage)
  colombia.scale=0.05

  algeria=createSprite(width*0.482,height*0.592)
  algeria.addImage(algeriaImage)
  algeria.scale=0.05

  portugal=createSprite(width*0.472,height*0.392)
  portugal.addImage(portugalImage)
  portugal.scale=0.19

  greece=createSprite(width*0.475,height*0.492)
  greece.addImage(greeceImage)
  greece.scale=0.05

  q1=createSprite(width*0.5,height*0.1)
  q1.addImage(q1Image)
  q1.scale=0.51

  bronze=createSprite(width*0.5,height*0.1)
  bronze.addImage(q2Image)
  bronze.scale=0.31

  goal=createSprite(width*0.5,height*0.1)
  goal.addImage(q4Image)
  goal.scale=0.31

  q8=createSprite(width*0.5,height*0.1)
  q8.addImage(q8Image)
  q8.scale=0.51
  }
function draw() {
  background("#CAFA2D")
   if(gameState===0){
 
    fill("#EB679A")
    textSize(20)
   quiz.visible=true
   next.visible=true
   q1.visible=false
   goal.visible=false
   bronze.visible=false
   algeria.visible=false
   colombia.visible=false
   germany.visible=false
   spain.visible=false
   brazil.visible=false
   england.visible=false
   togo.visible=false
   japan.visible=false
   morocco.visible=false
  greece.visible=false
   fiji.visible=false
   vanautu.visible=false
   newZealand.visible=false
   samoa.visible=false
   germanyLogo.visible=false
  lothar.visible=false
  iniesta.visible=false
  burak.visible=false
  laslzo.visible=false
   uruguay.visible=false
   argentina.visible=false
   italy.visible=false
   Sa.visible=false
   togo.visible=false
   portugal.visible=false
   q8.visible=false
   samoaLogo.visible=false
   nzLogo.visible=false
   colombiaLogo.visible=false
   greeceLogo.visible=false
    text("Rules of the quiz are:",width*0.4,height*0.2)
    text("There are 10 Questions",width*0.5,height*0.24)
 
    fill("#5753D4")
    text("Press  A to continue",width*0.5,height*0.32)
  if(keyCode===65){ 
    gameState=1
  }
  }
  if(gameState===1){
    togo.visible=false
   japan.visible=false
   morocco.visible=false
    quiz.visible=false
   next.visible=false
   germany.visible=false
   spain.visible=true
   brazil.visible=true
   england.visible=true
   fiji.visible=false
   vanautu.visible=false
   newZealand.visible=false
   samoa.visible=false
   germanyLogo.visible=true
  lothar.visible=false
  iniesta.visible=false
  burak.visible=false
  laslzo.visible=false
   uruguay.visible=false
   argentina.visible=false
   italy.visible=false
   Sa.visible=false
   greece.visible=false
   colombia.visible=false
   algeria.visible=false
   q1.visible=true
   bronze.visible=false
   q8.visible=false
    fill("#EB679A")
    textSize(20)
    text("Q1 Which country won  2014 world cup",width*0.4,height*0.2)
    text("P)Spain",width*0.4,height*0.3)
    text("Q)Germany",width*0.4,height*0.4)
    text("R)Brazil",width*0.4,height*0.5)
    text("S)England",width*0.4,height*0.6)
    fill("#5753D4")
    text("Press Space  to continue",width*0.6,height*0.52)
    
        if(keyCode===81){
      text("Correct answer",width*0.5,height*0.9)
      germany.visible=true
      
      }
    if(keyCode===80 || keyCode===82 ||  keyCode===83){
      text("Wrong answer",width*0.5,height*0.9)
      germany.visible=true
    }
    if(keyCode===32){
      gameState=2
    }
  }

  if(gameState===2){
    togo.visible=false
   japan.visible=false
   morocco.visible=false
    quiz.visible=false
   next.visible=false
   germany.visible=false
   spain.visible=false
   brazil.visible=false
   england.visible=false
   fiji.visible=false
   vanautu.visible=false
   newZealand.visible=false
   samoa.visible=false
   germanyLogo.visible=false
  lothar.visible=false
  iniesta.visible=false
  burak.visible=false
  laslzo.visible=false
   uruguay.visible=true
   argentina.visible=true
   italy.visible=true
   bronze.visible=true
   q1.visible=false
   germanyLogo.visible=true
    fill("#EB679A")
    textSize(20)
    text("Q2 Which team have finished 3 most number of times",width*0.4,height*0.2)
    text("P)Italy",width*0.4,height*0.3)
    text("Q)Germany",width*0.4,height*0.4)
    text("R)Argentina",width*0.4,height*0.5)
    text("S)Uruguay",width*0.4,height*0.6)
    fill("#5753D4")
    text("Press T  to continue",width*0.6,height*0.52)
    if(keyCode===81){
      text("Correct answer",width*0.5,height*0.9)
      germany.visible=true
      }
    if(keyCode===80 || keyCode===82 ||  keyCode===83){
      text("Wrong answer",width*0.5,height*0.9)
      germany.visible=true
    }
    if(keyCode===84){
      gameState=3
    }
  }

  if(gameState===3){
    bronze.visible=false
    togo.visible=false
   japan.visible=false
   morocco.visible=false
    quiz.visible=false
    next.visible=false
    germany.visible=false
    spain.visible=false
    brazil.visible=false
    england.visible=false
    fiji.visible=false
    vanautu.visible=false
    newZealand.visible=false
    samoa.visible=false
    germanyLogo.visible=false
   lothar.visible=false
   iniesta.visible=false
   burak.visible=false
   laslzo.visible=false
    uruguay.visible=false
    argentina.visible=false
    italy.visible=false
    fill("#EB679A")
    textSize(20)
    text("Q3  Which player has played the most world cup games",width*0.4,height*0.2)
    text("P) Miroslav Klose ",width*0.4,height*0.3)
    text("Q) Lothar Matthäus",width*0.4,height*0.4)
    text("R) Rafael Márquez",width*0.4,height*0.5)
    text("S) Paolo Maldini ",width*0.4,height*0.6)
    fill("#5753D4")
    text("Press O  to continue",width*0.6,height*0.52)
    if(keyCode===81){
      text("Correct answer",width*0.5,height*0.9)
      lothar.visible=true
    }
    
    if(keyCode===80||keyCode===82||keyCode===83){
      text("Wrong answer",width*0.5,height*0.9)
      lothar.visible=true
    }
    if(keyCode===79){
      gameState=4
    }
  }

  if(gameState===4){
    bronze.visible=false
    togo.visible=false
   japan.visible=false
   morocco.visible=false
    quiz.visible=false
    next.visible=false
    germany.visible=false
    spain.visible=false
    brazil.visible=false
    england.visible=false
    fiji.visible=false
    vanautu.visible=false
    newZealand.visible=false
    samoa.visible=false
    germanyLogo.visible=false
   lothar.visible=false
   iniesta.visible=false
   burak.visible=false
   laslzo.visible=false
    uruguay.visible=false
    argentina.visible=false
    italy.visible=false
    q8.visible=true
    fill("#EB679A")
    textSize(20)
    text("Q4  Who scored the only goal in 2010 world cup final",width*0.4,height*0.2)
    text("P) David Villa ",width*0.4,height*0.3)
    text("Q) Xavi Hernandez",width*0.4,height*0.4)
    text("R) Andreas Iniesta",width*0.4,height*0.5)
    text("S) Fernando Torres ",width*0.4,height*0.6)
    fill("#5753D4")
    text("Press N  to continue",width*0.6,height*0.52)
    if(keyCode===82){
           text("Correct answer",width*0.5,height*0.9)
      iniesta.visible=true
    }

    if(keyCode===80||keyCode===81||keyCode===83){
      text("Wrong  answer",width*0.5,height*0.9)
      iniesta.visible=true
    }
    if(keyCode===78){
      gameState=5
    }
  }

  if(gameState===5){
    togo.visible=false
   japan.visible=false
   morocco.visible=false
    quiz.visible=false
   next.visible=false
   germany.visible=false
   spain.visible=false
   brazil.visible=false
   england.visible=false
   fiji.visible=false
   vanautu.visible=false
   newZealand.visible=false
   samoa.visible=false
   germanyLogo.visible=false
  lothar.visible=false
  iniesta.visible=false
  burak.visible=false
  laslzo.visible=false
   uruguay.visible=false
   argentina.visible=false
   italy.visible=false
   q8.visible=false
    fill("#EB679A")
    textSize(20)
    text("Q5  Who has scored the fastest hat-trick",width*0.4,height*0.2)
    text("P) David Villa ",width*0.4,height*0.3)
    text("Q) László Kiss",width*0.4,height*0.4)
    text("R) Lionel Messi",width*0.4,height*0.5)
    text("S) Mesut Ozil ",width*0.4,height*0.6)
    fill("#5753D4")
    text("Press M  to continue",width*0.6,height*0.52)
    if(keyCode===81){
      text("Correct answer",width*0.5,height*0.9)
      laslzo.visible=true
    }

      
    if(keyCode===80||keyCode===82||keyCode===83){
      text("Wrong answer",width*0.5,height*0.9)
      laslzo.visible=true
    }
    if(keyCode===77){
      gameState=6
    }
  }

  if(gameState===6){
    togo.visible=false
   japan.visible=false
   morocco.visible=false
    quiz.visible=false
   next.visible=false
   germany.visible=false
   spain.visible=false
   brazil.visible=false
   england.visible=false
   fiji.visible=true
   vanautu.visible=true
   newZealand.visible=true
   samoa.visible=true
   germanyLogo.visible=false
  lothar.visible=false
  iniesta.visible=false
  burak.visible=false
  laslzo.visible=false
   uruguay.visible=false
   argentina.visible=false
   italy.visible=false
   spain.visible=false
    fill("#EB679A")
    textSize(20)
    text("Q6  Against which country  did Archie Thompson scored 13 goals?",width*0.4,height*0.2)
    text("P) New Zeland ",width*0.4,height*0.3)
    text("Q) Fiji",width*0.4,height*0.4)
    text("R) Vanuatu",width*0.4,height*0.5)
    text("S) American Samoa ",width*0.4,height*0.6)
    fill("#5753D4")
    text("Press L  to continue",width*0.6,height*0.52)
    if(keyCode===83){
      text("correct answer",width*0.5,height*0.9)
      samoaLogo.visible=true
    }

    if(keyCode===80||keyCode===81||keyCode===82){
      text("Wrong answer",width*0.5,height*0.9)
      samoaLogo.visible=true
    }
    if(keyCode===76){
      gameState=7
    }
  }

  if(gameState===7){
    togo.visible=true
   japan.visible=true
   morocco.visible=true
    quiz.visible=false
   next.visible=false
   germany.visible=false
   spain.visible=false
   brazil.visible=false
   england.visible=false
   fiji.visible=false
   vanautu.visible=false
   newZealand.visible=true
   samoa.visible=false
   germanyLogo.visible=false
  lothar.visible=false
  iniesta.visible=false
  burak.visible=false
  laslzo.visible=false
   uruguay.visible=false
   argentina.visible=false
   italy.visible=false
   spain.visible=false
   algeria.visible=false
   Sa.visible=false
   greece.visible=false
   colombia.visible=false
      portugal.visible=false
      q8.visible=false
      nzLogo.visible=false
    fill("#EB679A")
    textSize(20)
    text("Q7  Which of the following countries have made  2 appearences in the world cup",width*0.4,height*0.2)
    text("P) New Zealand ",width*0.4,height*0.3)
    text("Q) Morroco",width*0.4,height*0.4)
    text("R) Japan",width*0.4,height*0.5)
    text("S) Togo ",width*0.4,height*0.6)
    fill("#5753D4")
    text("Press U to continue",width*0.6,height*0.52)
    if(keyCode===80){
      text("Correct answer",width*0.5,height*0.9)
      nzLogo.visible=true
    }

    if(keyCode===83||keyCode===81||keyCode===82){
      text("Wrong answer",width*0.5,height*0.9)
      nzLogo.visible=true    }
    if(keyCode===85){
      gameState=8
    }
  }

  if(gameState===8){
    togo.visible=false
    japan.visible=false
    morocco.visible=false
     quiz.visible=false
    next.visible=false
    germany.visible=false
    spain.visible=false
    brazil.visible=false
    england.visible=false
    fiji.visible=false
    vanautu.visible=false
    newZealand.visible=true
    samoa.visible=false
    germanyLogo.visible=false
   lothar.visible=false
   iniesta.visible=false
   burak.visible=false
   laslzo.visible=false
    uruguay.visible=false
    argentina.visible=false
    italy.visible=false
    spain.visible=false
    Sa.visible=true
    algeria.visible=true
    colombia.visible=true
    q8.visible=true
    portugal.visible=false
    colombiaLogo.visible=false
    fill("#EB679A")
    textSize(20)
    text("Q8  Which country did'nt play 2010 world cup?",width*0.4,height*0.2)
    text("R) New Zealand ",width*0.4,height*0.3)
    text("Q) South Africa",width*0.4,height*0.4)
    text("P) Colombia",width*0.4,height*0.5)
    text("S) Algeria ",width*0.4,height*0.6)
    fill("#5753D4")
    text("Press V  to continue",width*0.6,height*0.52)
    if(keyCode===82){
      text("correct answer",width*0.5,height*0.9)
      colombiaLogo.visible=true
    }

    if(keyCode===80||keyCode===81||keyCode===83){
      text("Wrong answer",width*0.5,height*0.9)
      colombiaLogo.visible=true
    }
    if(keyCode===86){
      gameState=9
    }
  }

  if(gameState===9){
    togo.visible=false
    japan.visible=false
    morocco.visible=false
     quiz.visible=false
    next.visible=false
    germany.visible=false
    spain.visible=false
    brazil.visible=false
    england.visible=false
    fiji.visible=false
    vanautu.visible=false
    newZealand.visible=false
    samoa.visible=false
    germanyLogo.visible=false
   lothar.visible=false
   iniesta.visible=false
   burak.visible=false
   laslzo.visible=false
    uruguay.visible=true
    argentina.visible=false
    italy.visible=true
    spain.visible=false
    Sa.visible=false
    algeria.visible=false
    colombia.visible=false
    greece.visible=true
    portugal.visible=true
    q1.visible=true
    q8.visible=false
    colombiaLogo.visible=false
    fill("#EB679A")
    textSize(20)
    text("Q9 Which of the following team was not eliminated from the group stage in the world cup 2014?",width*0.4,height*0.2)
    text("Q) Italy",width*0.4,height*0.3)
    text("P) Portugal",width*0.4,height*0.4)
    text("R) Greece",width*0.4,height*0.5)
    text("S) Uruguay ",width*0.4,height*0.6)
    fill("#5753D4")
    text("Press W  to continue",width*0.6,height*0.52)
    if(keyCode===82){
      text("correct answer",width*0.5,height*0.9)
      greeceLogo.visible=true
    }

    if(keyCode===80||keyCode===81||keyCode===83){
      text("Wrong answer",width*0.5,height*0.9)
      greeceLogo.visible=true
    }
    if(keyCode===87){
      gameState=10
    }
  }

  if(gameState===10){
    togo.visible=false
    japan.visible=false
    morocco.visible=false
     quiz.visible=false
    next.visible=false
    germany.visible=false
    spain.visible=false
    brazil.visible=false
    england.visible=false
    fiji.visible=false
    vanautu.visible=false
    newZealand.visible=false
    samoa.visible=false
    germanyLogo.visible=false
   lothar.visible=false
   iniesta.visible=false
   burak.visible=false
   laslzo.visible=false
    uruguay.visible=false
    argentina.visible=false
    italy.visible=false
    spain.visible=false
    Sa.visible=false
    algeria.visible=false
    colombia.visible=false
    greece.visible=false
    portugal.visible=false
    burak.visible=false
    q8.visible=false
    greeceLogo.visible=false
    fill("#EB679A")
    textSize(20)
    text("Q10  Which player among these has not retired from international football",width*0.4,height*0.2)
    text("P) Toni Kroos ",width*0.4,height*0.3)
    text("Q) Mesut Ozil",width*0.4,height*0.4)
    text("R)  Sergio Aguero",width*0.4,height*0.5)
    text("S) Burak Yilmaz ",width*0.4,height*0.6)
    text("Press X to continue",width*0.6,height*0.52)
    if(keyCode===83){
      text("correct answer",width*0.5,height*0.9)
      burak.visible=true
     
    }

    if(keyCode===80||keyCode===81||keyCode===82){
      text("Wrong answer",width*0.5,height*0.9)
      burak.visible=true
     
    }
   
    if(keyCode===88){
      gameState=11
    }
  }
  if(gameState===11){
    burak.visible=false
    q1.visible=false
    background(bgImage)
    fill("blue")
    textSize(50)
    text("Thank You for taking this quiz",width*0.5,height*0.5)
  }
  drawSprites()
}