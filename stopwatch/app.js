var msec=0
var sec=0;
var min=0;
var hour=0;
var c=0;

document.getElementById('start').onclick=()=>{
    if(c===0)
    c++;
    setInterval(() => {
        stopwatch()
       }, 1000);
}
document.querySelector('#stop').onclick=()=>{
    if(c===1)
    c--;
}

setInterval(() => {
    stopwatch()
   }, 10);
function stopwatch(){
    if(c===1){
        msec++;
        if(msec===100){
            sec++;
            msec=0;
        }
        if(sec===60){
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
    }
    sec=0;
    min=0;
    hour=0;
}