export function DateCheck() {
    let month = ReadMonth();
    let day = ReadDay();
    let year = ReadYear();

    document.getElementById("date").innerText = `${(month < 10) ? "0" + month : month}/${(day < 10) ? "0" + day : day}/${year}`

}

//function to read the month
export function ReadMonth(){
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
export function ReadDay(){
    const month = ReadMonth();
    const dayInput = document.getElementById("day").value;
    const day = parseInt(dayInput, 10);

    //checking to see if day is valid

    //days in each month Janauary to December
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if(month === 0 || month < 1 || month > 12){
        return null; //this is an invalid month
    }
    let currentDays = daysInMonth[month - 1];
    //month - 1 to adjust with the index
    //need to set currentDays to the amount of days that are provided in the month

    for(let i = 0; i < daysInMonth.length; i++){
        if(month == i) {
            currentDays = daysInMonth[i-1];
        }
    }
    if(day >= 1 && day <= currentDays){
        return day;
    }else{
        alert(`Invalid day for selected month. Type a day between 1 and ${currentDays}.`);
        return null;
    }
}

//these functions might be needed for th year rollover discovered in december
export function ReadYear(){
    const yearInput = document.getElementById("year").value;
    const year = parseInt(yearInput, 10);
    return year;
}