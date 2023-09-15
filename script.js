// get all the elements from html 
let hour=document.getElementById("hour");
let minute=document.getElementById("min");
let second=document.getElementById("sec");

//  make a function for the movement of clock
function movementOfTime(){
    // now set a new empty date with new keyword
    let date=new Date();

   
    //  by using ---> date.get (this is a inbuilt value in js) --> we get all the data of a clock like hr,min,sec
    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds();

    // now implement the logic for the hour, min, and second by using calculation method 
    let hourRotation=30*hh + mm/2;
    let minuteRotation=6*mm;
    let secondRotation= 6*ss;

    // now for the roation of clock ki dandi we use transform roation in which we pass the value of
    // of  
    // let hourRotation=30*hh + mm/2;
    // let minuteRotation=6*mm;
    // let secondRotation= 6*ss;
    // by using ${} 

    hour.style.transform = `rotate(${hourRotation}deg)`;
    minute.style.transform = `rotate(${minuteRotation}deg)`;
    second.style.transform = `rotate(${secondRotation}deg)`;


}
// and after that we use setinterval in which after every 1sec our function 
// works and continuously working for every setinterval of time
setInterval(movementOfTime, 1000);