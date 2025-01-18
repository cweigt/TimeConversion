import data from './regionsArray.json' with {type: 'json'};
import * as ReadTime from './home.js';
import * as ReadDate from './dateCheck.js';

//console.log("imported: " + JSON.stringify(data));

export function ChangeTime() {
   // Get the current time and date values
   const minute = ReadTime.ReadMinute(); 
   const hour = ReadTime.ReadHour();
   const originalMeridiem = ReadTime.ReadMeridiem(); // Store the original meridiem
   //console.log(`Updating region: ${region}`);

   const month = ReadDate.ReadMonth();
   const day = ReadDate.ReadDay();
   const year = ReadDate.ReadYear();

   // Loop through the regions data and update the time for each region
   for (let tracker = 0; tracker < data.regions.length; tracker++) {
      let time = data.regions[tracker];
      let updatedHour = hour + time.timeChangeHour; //hours
      let updatedMinute = minute + time.timeChangeMinute; //minutes
      let meridiem = originalMeridiem; // Reset meridiem for each iteration

      // Adjusting for the minutes
      if(updatedMinute >= 60){
         updatedMinute -= 60;
         updatedHour += 1;
      }else if(updatedMinute < 0){
         updatedMinute += 60;
         updatedHour -= 1;
      }

    // Adjust for 24-hour wrap-around
     if(updatedHour >= 24) {
         updatedHour -= 24;
     }else if(updatedHour < 0){
         updatedHour += 24;
     }

     // Convert from 24-hour format to 12-hour format with AM/PM
     if(updatedHour >= 12){
         meridiem = 'PM';
     }else{
         meridiem = 'AM';
     }

     if(updatedHour > 12){
        updatedHour -= 12;
     }else if(updatedHour === 0){
        updatedHour = 12; // Midnight case (0 -> 12 AM)
     }
 
      // Use the 'id' field from the JSON file
      let region = time.id; 
      document.getElementById(region).innerText = `${time.zone}: ${updatedHour}:${updatedMinute.toString().padStart(2, '0')} ${meridiem}`;
   }
}
