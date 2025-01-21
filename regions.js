import data from './regionsArray.json' with {type: 'json'};
import * as ReadTime from './home.js';
import * as ReadDate from './dateCheck.js';

//console.log("imported: " + JSON.stringify(data));

   //this function is used to get the last day of the month
function DaysInMonth(month, year){
   return new Date(year, month + 1, 0).getDate();
}

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
      let updatedMeridiem = originalMeridiem; // Reset meridiem for each iteration
      let udpatedDay = day;
      let updatedMonth = month;
      let updatedYear = year;

      // Adjusting for the minutes
      if(updatedMinute >= 60){
         updatedMinute -= 60;
         updatedHour += 1;
      }else if(updatedMinute < 0){
         updatedMinute += 60;
         updatedHour -= 1;
      }

    // Adjust for 24-hour wrap-around
      if (updatedHour >= 24) {
         updatedHour -= 24;
         udpatedDay += 1;
      } else if (updatedHour < 0) {
         updatedHour += 24;
         udpatedDay -= 1;
      }

      // Correct AM/PM conversion after all adjustments
      if (updatedHour === 0) { 
         updatedHour = 12;  // Midnight case (0 → 12 AM)
         updatedMeridiem = "AM";
      } else if (updatedHour === 12) {
         updatedMeridiem = "PM"; // Noon case (12 stays 12 PM)
      } else if (updatedHour > 12) {
         updatedHour -= 12; // Convert 24-hour to 12-hour format
         updatedMeridiem = "PM";
      } else {
         updatedMeridiem = "AM";
      }

     //month and year rollover 
     let lastDays = DaysInMonth(updatedMonth, updatedYear);
     if(udpatedDay > lastDays){ //the next month
        udpatedDay = 1;
        updatedMonth += 1;
     }else if(udpatedDay < 1){
        updatedMonth -= 1;
        if(updatedMonth < 1){ //previous year
           updatedMonth = 12;
           updatedYear -= 1;
        }
        udpatedDay = DaysInMonth(updatedMonth, updatedYear);
     }
     if(updatedMonth > 12){ //previous year
        updatedMonth = 1;
        updatedYear += 1;
        }

 
      // Use the 'id' field from the JSON file
      let region = time.id; 
      document.getElementById(region).innerText = `${time.zone}: ${updatedHour}:${updatedMinute.toString().padStart(2, '0')} ${updatedMeridiem}, ${updatedMonth}/${udpatedDay}/${updatedYear}`;
   }
}
