import * as ReadTime from './home.js'; 
import * as ReadDate from './dateCheck.js';
import data from './regionsArray.json' with {type: 'json'};

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
   //possibly switching this to a for loop or something to check it
   //assign variable the value based on the result of loop: data.regions[i]
   const newYorkTime = data.regions[0]; 

   //so far this prints the value of the time change
   //next step is to figure out how to actually fix the time
   document.getElementById("NewYorkCityNY").innerText = `${newYorkTime.zone}:  ${newYorkTime.timeChange}`;
}

