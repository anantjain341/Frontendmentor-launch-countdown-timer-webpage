let countdown=()=>{
    let date=new Date("1 nov 2021").getTime();
    let today = new Date().getTime();
    let difference = date-today;

    let second = 1000;
    let minute = second*60;
    let hour=minute*60;
    let day=hour*24;
    
    let leftDays=(parseInt(difference/day));
    let leftHours=(parseInt((difference%day)/hour));
    let leftMiutes=(parseInt((difference%hour)/minute));
    let leftSeconds=(parseInt((difference%minute)/second));

    leftDays=leftDays<10?"0"+leftDays:leftDays;
    leftHours=leftHours<10?"0"+leftHours:leftHours;
    leftMiutes=leftMiutes<10?"0"+leftMiutes:leftMiutes;
    leftSeconds=leftSeconds<10?"0"+leftSeconds:leftSeconds ;


    document.querySelector(".days").textContent=leftDays;
    document.querySelector(".hours").textContent=leftHours;
    document.querySelector(".minutes").textContent=leftMiutes;
    document.querySelector(".seconds").textContent=leftSeconds;

    // console.log(leftDays);
}
// countdown();


setInterval(countdown , 1000);