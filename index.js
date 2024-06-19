var gameColors = ["green","yellow","red","blue"];
var gamePattern = [];
var userPattern=[];
var level = 0;
var started=1;
var highScore=0;

$(".button").click(function (clicked){
    var colourClicked= clicked.target.id;
    userPattern.push(colourClicked);
    
    playSound(colourClicked);
    animateIt(colourClicked);
    checkColor(userPattern.length-1);
})

function checkColor(currentLevel){
    if(userPattern[currentLevel]==gamePattern[currentLevel]){
        if(userPattern.length==gamePattern.length){
            setTimeout(nextSequence,1000);
        }
    }
    else{
        $("h1").text("game over press any key");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        level=0;
        started++;
        gamePattern=[];
        var audio = new Audio("sounds/wrong.mp3")
        audio.play();
    }
}

$("body").on("keydown",function(){
    if(started){
        nextSequence();
        started--
    }
});

function nextSequence(){
    var randomNum = Math.floor(Math.random()*4);
    var randomColor = gameColors[randomNum];
    gamePattern.push(randomColor);
    playSound(randomColor);
    animateIt(randomColor);
    level++;
    $("h1").text("Level "+level);
    userPattern=[];
    
}

function playSound(para){
    var audio = new Audio("sounds/"+para+".mp3")
    audio.play();
}

function animateIt(para){
    $("#"+para).fadeOut(100).fadeIn(100);
}