var min = 0 ;
var sec = 0 ;
var msec = 0 ;
var minHeading = document.getElementById("min") ;
var secHeading = document.getElementById("sec") ;
var msecHeading = document.getElementById("msec") ;


var interval ;
function timer(){
    msec++
    
    msecHeading.innerHTML = msec
    if(msec >= 100){
    sec++
   
    secHeading.innerHTML = sec 

    msec = 0

}
   
 if (sec >= 60){
    min++
    sec = 0
    minHeading.innerHTML = min 
}

}


function start(){
    if (onclick=true){
        document.getElementById("btn1").disabled=true
        document.getElementById("btn2").disabled=false
        document.getElementById("btn2").disabled=false
    }

  interval=setInterval(timer,10);
}



function stop(){
    clearInterval(interval)
    document.getElementById("btn1").disabled=false
    document.getElementById("btn2").disabled=true
    document.getElementById("btn2").disabled=false
}

function reset(){
    min = 0;
    sec = 0;
    msec = 0;
    minHeading.innerHTML = min
    secHeading.innerHTML = sec
    msecHeading.innerHTML = msec
    stop()
    document.getElementById("btn1").disabled=false
    document.getElementById("btn2").disabled=false
    document.getElementById("btn2").disabled=true
}


