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

    DateCheck();
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

function DateCheck() {
    let month = ReadMonth();
    let day = ReadDay();
    const yearInput = document.getElementById("year").value;

    const year = parseInt(yearInput, 10);

    //days in each month Janauary to December
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let currentDays;

    //need to set currentDays to the amount of days that are provided in the month
    for(let i = 0; i < daysInMonth.length; i++){
        if(month == i) {
            currentDays = daysInMonth[i-1];
        }
    }

    document.getElementById("date").innerText = `${month} ${currentDays}`;
}

//function to read the month
function ReadMonth(){
    const monthInput = document.getElementById("month").value;
    //checking to see if month is valid
    const month = parseInt(monthInput, 10);

    if(month >= 0 && month <= 12){
        return month;
    }else {
        alert("Invalid month. Type in a month from 1-12");
        return null;
    }
}

//function to read the days
function ReadDay(){
    const dayInput = document.getElementById("day").value;
    //checking to see if day is valid
    const day = parseInt(dayInput, 10);

    if(day >= 0 && day <= 12){
        return day;
    }else {
        alert("Invalid day. Please type in a day that is within the proper range for the month.");
        return null;
    }
}

