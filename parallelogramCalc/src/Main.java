import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {

        double height,base;
        Scanner getUserInput = new Scanner(System.in);
        

        System.out.println("-Parallelogram perimeter Calculator-");

        //Collect User Input for Side B (base).
        System.out.print("Enter value for side B (base) of parallelogram: ");
        while (true) {
            if (getUserInput.hasNextLine()) {
                String tempBase = (getUserInput.nextLine()).strip();

                // Convert String Base to Double
                try {
                    base = Double.parseDouble(tempBase);
                } catch (NumberFormatException nfe) {
                    getUserInput.close();
                    throw new IllegalArgumentException("Invalid Input for Base. Must be a numeric value.");
                }
                break;
            }
        }

        //Collect User Input for height.
        System.out.print("Enter value for height of parallelogram (integer): ");
        while (true) {
            if (getUserInput.hasNextLine()) {
                String tempHeight = (getUserInput.nextLine()).strip();

                // Convert String Height to Double
                try {
                    height = Double.parseDouble(tempHeight);
                } catch (NumberFormatException nfe) {
                    getUserInput.close();
                    throw new IllegalArgumentException("Invalid Input for Height. Must be a numeric value.");
                }
                break;
            }
        }

        getUserInput.close();

        calculatePerimeter(height,base);

    }

    public static void calculatePerimeter(double height, double base){

        // Ensure Base is within range.
        if (base <= 1 || base >= 999999) {
            throw new IllegalArgumentException("Invalid Input. Base must be between 1 and 999999.");
        }

        // Ensure Height is within range.
        if (height <= 1 || height >= 999999) {
            throw new IllegalArgumentException("Invalid Input. Height must be between 1x and 999999.");
        }
        
        double perimeter;

        //Calculate a side of the parallelogram in order to calculate the perimeter.
        double sideA= Math.sqrt((Math.pow(base,2)) + (Math.pow(height,2)));

        perimeter = 2 * (sideA + base);

        String formattedSideA = String.format("%.5f", sideA);

        String formattedPerimeter = String.format("%.5f", perimeter);

        System.out.println("The perimeter of the parallelogram is aproximately: " + formattedPerimeter + " using a base of " + base + " and a side length of " + formattedSideA + ".");
        
    }
}
