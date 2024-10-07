export function DateCheck() {
    let month = ReadMonth();
    let day = ReadDay();
    const yearInput = document.getElementById("year").value;
    const year = parseInt(yearInput, 10);

    document.getElementById("date").innerText = `${month}/${day}/${year}`

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
    const month = ReadMonth();
    const dayInput = document.getElementById("day").value;
    const day = parseInt(dayInput, 10);

    //checking to see if day is valid

    //days in each month Janauary to December
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let currentDays;
    //need to set currentDays to the amount of days that are provided in the month
    for(let i = 0; i < daysInMonth.length; i++){
        if(month == i) {
            currentDays = daysInMonth[i-1];
        }
    }
    if(day <= currentDays){
        return day;
    }else{
        alert(`Invalid day for selected month. Type a day between 1 and ${currentDays}.`);
        return null;
    }

}