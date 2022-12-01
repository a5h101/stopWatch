var msec=0
var sec=0;
var min=0;
var hour=0;
var c=0;
let secSound=new Audio("smb_coin.wav");
var stsp=document.getElementById("start");
document.querySelector('#start').onclick=()=>{
    if(c===0)
    {   stsp.innerHTML='STOP'
        c++;

        setInterval(() => {
            stopwatch()
        }, 1000);
    }
    else {
        c--;
        stsp.innerHTML='START'
    }
}
// document.querySelector('#stop').onclick=()=>{
//     if(c===1)
//     c--;
// }

setInterval(() => {
    stopwatch()
   }, 10);
function stopwatch(){
    if(c===1){
        msec++;
        if(msec===100){
            // console.log("hi")
            sec++;
            msec=0;
        }
        if(sec===60){
            secSound.play();
            min++;
            sec=0;
        }
        if(min===60){
            hour++;
            min=0;
        }
        document.getElementById("hour").innerHTML=hour;
        document.getElementById("min").innerHTML=min;
        document.getElementById("sec").innerHTML=sec;
        document.getElementById("msec").innerHTML=msec;
    }
    else 
    stop()
// stopwatch ((sec,min,hour),10)
}
function stop(){
    if(c===0){
        document.getElementById("hour").innerHTML="0";
        document.getElementById("min").innerHTML="0";
        document.getElementById("sec").innerHTML="0";
        document.getElementById("msec").innerHTML="0";
    }
    msec=0;
    sec=0;
    min=0;
    hour=0;
}