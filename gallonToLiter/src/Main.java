import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        
        double gallons;
        Scanner getUserInput = new Scanner(System.in);
        

        System.out.println("-Gallons/day to Liter/day Calculator-");

        //Collect User Input for gallons.
        System.out.print("Enter value for gallons/day: ");
        while (true) {
            if (getUserInput.hasNextLine()) {
                String tempGallons = (getUserInput.nextLine()).strip();

                // Convert String Height to Double
                try {
                    gallons = Double.parseDouble(tempGallons);
                } catch (NumberFormatException nfe) {
                    getUserInput.close();
                    throw new IllegalArgumentException("Invalid Input for Gallons. Must be a numeric value.");
                }
                break;
            }
        }

        getUserInput.close();
        gallonToLiter(gallons);
    }

    public static void gallonToLiter(double gallons){

        // Ensure Gallons is within range.
        if (gallons < 0 || gallons > 999999) {
            throw new IllegalArgumentException("Invalid Input. Gallons must be between 0 and 999999.");
        }

        double liters = gallons * 3.78541;
        System.out.println(gallons + " gallons/day is equal to " + liters + " liters/day.");
    }
}

