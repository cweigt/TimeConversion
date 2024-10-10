import data from './regionsArray.json' with {type: 'json'};

export function ChangeTime() {
   // Get the current time and date values
   const minute = ReadTime.ReadMinute(); 
   const hour = ReadTime.ReadHour();
   const meridiem = ReadTime.ReadMeridiem();

   const month = ReadDate.ReadMonth();
   const day = ReadDate.ReadDay();
   const year = ReadDate.ReadYear();


   // Loop through the regions data and update the time for each region
   for (let tracker = 0; tracker < data.regions.length; tracker++) {
      let time = data.regions[tracker];
      let updatedHour = hour + time.timeChange;
      
      // Use region from JSON
      let region = time.region; 
      document.getElementById(region).innerText = `${time.zone}: ${updatedHour}`;
      // Update the respective region's time
   }
}
