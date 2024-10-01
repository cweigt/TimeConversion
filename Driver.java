import java.util.Scanner;

public class Driver {
	public static void main(String[] args) {
		ExecuteTime();
		
	}
	
	public static void ExecuteTime() {
        int hour = ReadHour();
        int minute = ReadMinute();
        String meridiem = ReadMeridiem();

        // Print standard time
        System.out.println("Standard Time: " + hour + ":" + (minute < 10 ? "0" + minute : minute) + " " + meridiem);

        // Convert to military time
        if (meridiem.equalsIgnoreCase("AM")) {
            if (hour == 12) {
                hour = 0; // Midnight case
            }
        } else if (meridiem.equalsIgnoreCase("PM")) {
            if (hour != 12) {
                hour += 12; // Add 12 for PM times except 12 PM
            }
        }

        // Print military time (24-hour format)
        //these are ternary operators, basically if-else statements
        System.out.println("Military Time: " + (hour < 10 ? "0" + hour : hour) + ":" + minute);
    }
	
	
	
	
	
	//For recording the hours
	public static int ReadHour() {
		Scanner hour = new Scanner(System.in);
		System.out.print("Type the hour (1-12):");

		int inputResult = hour.nextInt(); 
		
		//if condition to call ReadHour again if value not valid
		if(inputResult >= 1 && inputResult <= 12) {
			return inputResult;
		}
		else {
			System.out.println("Invalid hour, try again.");
			return ReadHour();
		}
	}
	
	//For recoreing the minutes
	public static int ReadMinute() {
		Scanner minute = new Scanner(System.in);
		System.out.print("Type the minute (0-59):");
		
		int inputResult = minute.nextInt(); 
		
		//if condition to call ReadMinute again if value not valid
		if(inputResult >= 0 && inputResult < 60) {
			return inputResult;
		}else {
			System.out.println("Invalid minute, try again.");
			return ReadMinute();
		}
	}
	
	//for AM/PM, assume it's correct
	public static String ReadMeridiem() {
		Scanner meridiem = new Scanner(System.in);
		System.out.print("Type the meridiem:");
		
		String inputResult = meridiem.nextLine();
		if(inputResult.equals("AM")||inputResult.equals("PM")){
			System.out.println("Valid time.");
		}
		else{
			return ReadMeridiem();
		}

		return inputResult;
		
		
	}
}