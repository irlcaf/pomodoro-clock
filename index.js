let intervalID = 1;

let formatTime = (time) =>{
    let minutes = Math.floor(time/60);
    let seconds = time%60;
    
    if(seconds < 10){
        seconds = `0${seconds}`
    }
    console.log(minutes, seconds);
    return `${minutes}:${seconds}`;
}
let timerInterval = () => {
    time = parseFloat($("#timer-text").text())*60;
    console.log(time);
    timeLeft = time;
        intervalID = setInterval(() => {
            timeLeft -= 1;
            console.log(timeLeft);
            $("#timer-text").text(formatTime(timeLeft));

            if(timeLeft === 0){
                console.log("DELETE THE ID OF THE INTERVAL");
            }
        },1000)
};

$(document).ready(function(){
    $('.btn-start').on('click', function(e){
        if(intervalID != undefined){
            timerInterval();
        }
    })

    $('#sexy-session.btn-check').on('click', function(e){
        clearInterval(intervalID);
        $(".btn-label").removeClass("btn-active");
        $("#label-sexy-session.btn-label").addClass("btn-active");
        $("#page-wrapper").css("background-color","#E62020");
        $("#btn-start.btn-start").css("color","#E62020");
        $("#timer-text").text("45:00");
    })
    $('#water-session.btn-check').on('click', function(e){
        clearInterval(intervalID);
        $(".btn-label").removeClass("btn-active");
        $("#label-water-session.btn-label").addClass("btn-active");
        $("#page-wrapper").css("background-color","#7a749c");
        $("#btn-start.btn-start").css("color","#7a749c");
        $("#timer-text").text("5:00");
    })
    $('#smoke-session.btn-check').on('click', function(e){
        clearInterval(intervalID);
        $(".btn-label").removeClass("btn-active");
        $("#label-smoking-session.btn-label").addClass("btn-active");
        $("#page-wrapper").css("background-color","#D90078");
        $("#btn-start.btn-start").css("color","#D90078");
        $("#timer-text").text("15:00");
    })
});



/*#931F00,#B5360D,#8D414E,#8BACCB,#E0FAF9,#931F00,#B5360D,#8D414E*/