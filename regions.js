import * as ReadTime from './home.js'; 
import * as ReadDate from './dateCheck.js';

let timeChange; //describe the amount of hours that need to be changed in new region
//current values of variables based on input
const minute = ReadTime.ReadMinute(); 
const hour = ReadTime.ReadHour();
const meridiem = ReadTime.ReadMeridiem();

const month = ReadDate.ReadMonth();
const day = ReadDate.ReadDay();
const year = ReadDate.ReadYear();

//ayeeee this works
export function ChangeTime(){
    document.getElementById("NewYorkCityNY").innerText = "Hello World";
}

