import java.util.Arrays;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner getUserInput = new Scanner(System.in);

        String unit;
        double weightKg, heightCm;

        // Collect User Input for Unit Type. (US or SI)
        System.out.print("Enter units (US or SI): ");
        while (true) {
            if (getUserInput.hasNextLine()) {
                unit = (getUserInput.nextLine()).strip();

                if (!unit.equals("US") && !unit.equals("SI")) {
                    getUserInput.close();
                    throw new IllegalArgumentException("Invalid Input. Enter units as US or SI.");
                }
                break;
            }
        }

        // Collect User Input for Weight
        String type = unit.equals("US") ? " (in pounds): " : " (in kilograms): ";
        System.out.print("Enter Weight" + type);
        while (true) {
            if (getUserInput.hasNextLine()) {
                String tempWeight = (getUserInput.nextLine()).strip();

                // Convert String Weight to Double
                try {
                    weightKg = Double.parseDouble(tempWeight);
                } catch (NumberFormatException nfe) {
                    getUserInput.close();
                    throw new IllegalArgumentException("Invalid Input for Weight. Must be a numeric value.");
                }
                break;
            }
        }

        // Collect User Input for Weight
        type = unit.equals("US") ? " (in inches): " : " (in centimeters): ";
        System.out.print("Enter Height" + type);
        while (true) {
            if (getUserInput.hasNextLine()) {
                String tempHeight = (getUserInput.nextLine()).strip();

                // Convert String Height to Double
                try {
                    heightCm = Double.parseDouble(tempHeight);
                } catch (NumberFormatException nfe) {
                    getUserInput.close();
                    throw new IllegalArgumentException("Invalid Input for Height. Must be a numeric value.");
                }
                break;
            }
        }
        getUserInput.close();

        // Call to calculate the Users BMI
        Object[] BMI = calculateBMI(heightCm, weightKg, unit);
        System.out.println("BMI Calculation: " + Arrays.toString(BMI));
    }

    public static Object[] calculateBMI(double heightCm, double weightKg, String unitType) {
        // Converts US lbs. to kg.
        if (unitType.equals("US")) {
            weightKg = weightKg * 0.45359237;
            heightCm = heightCm * 2.54;
        }

        // Ensure Weight is within range.
        if (weightKg < 1 || weightKg > 500) {
            throw new IllegalArgumentException("Invalid Input. Weight must be between 1 and 500.");
        }

        // Ensure Height is within range.
        if (heightCm < 10 || heightCm > 300) {
            throw new IllegalArgumentException("Invalid Input. Height must be between 10 and 300.");
        }

        // Complete BMI Calculation & Assessment
        double BMI = weightKg / Math.pow((heightCm / 100), 2);
        String assessment;

        if (BMI < 18.5) {
            assessment = "Underweight";
        } else if (BMI < 25) {
            assessment = "Normal Weight";
        } else if (BMI < 30) {
            assessment = "Overweight";
        } else {
            assessment = "Obese";
        }

        return new Object[]{BMI, assessment};
    }
}
