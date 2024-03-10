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
                gallons = (getUserInput.nextDouble());

                if (gallons < 0) {
                    getUserInput.close();
                    throw new IllegalArgumentException("Invalid Input. Enter units as gallons/day (positive double).");
                }
                break;
            }
        }

        getUserInput.close();
        gallonToLiter(gallons);
    }

    public static void gallonToLiter(double gallons){
        double liters = gallons * 3.78541;
        System.out.println(gallons + " gallons/day is equal to " + liters + " liters/day.");
    }
}

