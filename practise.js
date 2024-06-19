var givenColors = ["green","red","yellow","blue"];
var level = 0;
var starting = 1;
var gamePattern=[];
var userPattern=[];

$(document).keydown(function(){
    if(starting){
        nextSequence();
        starting--;
    }
})

$(".button").click(function(e){
    colorClicked=e.target.id;
    userPattern.push(colorClicked);
    playSound(colorClicked);
    animation(colorClicked);
    var clickNum=userPattern.length-1
    checkPattern(clickNum);
})

function checkPattern(numClick){
    if(userPattern[numClick]==gamePattern[numClick]){
        if(userPattern.length==gamePattern.length){
            setTimeout(nextSequence,1000);
        }
    }
    else{
        starting++;
        $("h1").text("Game over, Press any key to Replay");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        var audio=new Audio("sounds/wrong.mp3");
        audio.play();
        level=0;
        gamePattern=[];
    }
}

function nextSequence(){
    userPattern=[];
    level++;
    $("h1").text("Level "+level);
    var num=Math.floor(Math.random()*4);
    var randColor=givenColors[num];
    gamePattern.push(randColor);
    animation(randColor);
    playSound(randColor);
}

function animation(para){
    $("#"+para).fadeOut(100).fadeIn(100);
}

function playSound(para){
    var audio=new Audio("sounds/"+para+".mp3");
    audio.play();
}