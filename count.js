let allDivTime = document.querySelectorAll('.allDiv');
let mainDiv = document.querySelector('.main-section');
let singleDiv = document.querySelector('.div');
function timeFunction(){
    let todayTime = new Date();
    let futureTIme = new Date('23 August 2022 01:4:20 pm')
    let gapTime = futureTIme - todayTime;
    let day, hour,mintue,second;
    second = 1000;
    mintue = second * 60;
    hour = mintue * 60;
    day = hour * 24;
    let Days,Minutes,Hours,Seconds;
    Days =Math.floor(gapTime / day);
    Hours = Math.floor(gapTime % day / hour);
    Minutes= Math.floor(gapTime % hour /mintue);
    Seconds= Math.floor(gapTime % mintue /second);
    let item =[Days,Hours,Minutes,Seconds];
    allDivTime.forEach((x,index)=>{
        x.innerHTML = formateFunction(item[index])
    })
    function formateFunction(x){
        if(x <10){
            return (x = `0${x}`);
        }
        return x;
    }
    if(gapTime<0){
        let showDIv = document.querySelector('.eid-content');
        clearInterval(countTime);
        showDIv.style.display = 'block';
        singleDiv.style.display = 'none'
    }

}
timeFunction()
let countTime =setInterval(timeFunction, 1000);
