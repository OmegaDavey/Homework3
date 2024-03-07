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
                base = (getUserInput.nextDouble());

                if (base == 0 || base < 0) {
                    getUserInput.close();
                    throw new IllegalArgumentException("Invalid Input. Enter units as US or SI.");
                }
                break;
            }
        }

        //Collect User Input for height.
        System.out.print("Enter value for height of parallelogram (integer): ");
        while (true) {
            if (getUserInput.hasNextLine()) {
                height = (getUserInput.nextDouble());

                if (height == 0 || height < 0) {
                    getUserInput.close();
                    throw new IllegalArgumentException("Invalid Input. Enter units as US or SI.");
                }
                break;
            }
        }

        getUserInput.close();

        calculatePerimeter(height,base);

    }

    public static void calculatePerimeter(double height, double base){

        
        double perimeter;

        //Calculate a side of the parallelogram in order to calculate the perimeter.
        double sideA= Math.sqrt((Math.pow(base,2)) + (Math.pow(height,2)));

        perimeter = 2 * (sideA + base);

        String formattedSideA = String.format("%.3f", sideA);

        String formattedPerimeter = String.format("%.3f", perimeter);

        System.out.println("The perimeter of the parallelogram is aproximately: " + formattedPerimeter + " using a base of " + base + " and a side length of " + formattedSideA + ".");
        
    }
}
