function executeTime(){
    const hour = ReadHour();
    const minute = ReadMinute();
    const meridiem = ReadMeridiem();

    //print standard time
    document.getElementById("standardTime").innerText = `Standard Time: ${hour}:${minute < 10 ? "0" + minute : minute} ${meridiem}`;

    let militaryClock = hour;
    if(meridiem === "AM"){ //between 1am and 11am
        if(hour == 12){
            militaryClock = 0; //midnight case
        }
    }else if(meridiem === "PM"){ //
        if(hour != 12){ //does not equal noon
            militaryClock = hour + 12; //1pm to 11pm
        }
    }

    document.getElementById("militaryTime").innerText = `Military Time: ${militaryClock < 10 ? "0" + militaryClock : militaryClock}:${minute < 10 ? "0" + minute : minute}`;

    //calculate remaining time and display
    const remHours = 23 - militaryClock;
    const remMinutes = 60 - minute;

    document.getElementById("remTime").innerText = `${remHours} hours, ${remMinutes} minutes.`;
}


function ReadHour(){
    const hourInput = document.getElementById("hour").value;
    const hour = parseInt(hourInput, 10);

    if(hour >=1 && hour <= 12){
        return hour;
    }else{
        alert("Invalid hour. Please enter an hour value between 1 and 12!");
        return null;
    }
}

function ReadMinute(){
    const minuteInput = document.getElementById("minute").value;
    const minute = parseInt(minuteInput, 10);

    if(minute >= 0 && minute <= 59){
        return minute;
    }else{
        alert("Invalid minute. Please enter a minute value between 0 and 59!")
        return null;
    }
}

function ReadMeridiem(){
    return document.getElementById("meridiem").value;
}