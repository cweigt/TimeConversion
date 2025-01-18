import data from './regionsArray.json' with {type: 'json'};
import * as ReadTime from './home.js';
import * as ReadDate from './dateCheck.js';

console.log("imported: " + JSON.stringify(data));

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
      let updatedHour = hour + time.timeChange;
      let meridiem = originalMeridiem; // Reset meridiem for each iteration

      // Adjust for time zones that cross midnight in a 12-hour format
      if (updatedHour >= 12) {
         if (updatedHour > 12) {
             updatedHour -= 12;
         }
         // Only flip meridiem if the original hour was before or after 12
         if (hour < 12) { // Means we crossed into PM
             meridiem = 'PM';
         }
     } 
     else if (updatedHour <= 0) {
         updatedHour += 12;
         meridiem = (meridiem === 'AM') ? 'PM' : 'AM';
     }
 
     // Explicitly setting 12 PM case
     if (updatedHour === 12 && hour < 12) {
         meridiem = 'PM';
     }
     if (updatedHour === 12 && hour >= 12) {
         meridiem = 'AM';
     }
 
      // Use the 'id' field from the JSON file
      let region = time.id; 
      document.getElementById(region).innerText = `${time.zone}: ${updatedHour}:${minute.toString().padStart(2, '0')} ${meridiem}`;


     /* 
      let region = time.id;
      let regionElement = document.getElementById(region);

      if (regionElement) {
         regionElement.innerText = `${time.zone}: ${updatedHour}:${minute.toString().padStart(2, '0')} ${meridiem}`;
     } else {
         console.log(`Error: Element with ID ${region} not found.`);
     }*/
   }
}
