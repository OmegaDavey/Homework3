const calculateBMI = require('../src/Main'); 

//Boundary Value Testing
    //Height: 10cm - 300cm
//Min Value - 1: 9 , invalid input
//Min Value: 10 , valid input
//Median Value: 150 , valid input
//Max Value: 300 , valid input
//Max Value + 1: 301 , invalid input

    //Weight: 1kg - 500kg
//Min Value - 1: 0 , invalid input
//Min Value: 1 , valid input
//Median Value: 250 , valid input
//Max Value: 500 , valid input
//Max Value + 1: 501 , invalid input

//Equivalence Class Testing
    //Height
    //Valid input: 10-300
    //Invalid input: height < 10 or height > 300
//Partition 1: height < 10
//Partition 2: height = 10
//Partition 3: height > 10 and height < 300
//Partition 4: height = 300
//Partition 5: height > 300

    //Weight
    //Valid input: 1-500
    //Invalid input: weight < 1 or weight > 500
//Partition 1: weight < 1
//Partition 2: weight = 1
//Partition 3: weight > 1 and weight < 500
//Partition 4: weight = 500
//Partition 5: weight > 500


describe('calculateBMI function test', () => {

    //BVA Test (Height 10-300)
    test('Min Value - 1 Input', () => {
        expect(calculateBMI(9,50,"SI")).toThrow("Invalid Input. Height must be between 10cm and 300cm.");
    });

    test('Min Value Input', () => {
        expect(calculateBMI(10,50,"SI")).toBe("Obese");
    });

    test('Median Value Input', () => {
        expect(calculateBMI(150,50,"SI")).toBe("Normal Weight");
    });

    test('Max Value Input', () => {
        expect(calculateBMI(300,50,"SI")).toBe("Underweight");
    });

    test('Max + 1 Value Input', () => {
        expect(calculateBMI(301,50,"SI")).toThrow("Invalid Input. Height must be between 10cm and 300cm.");
    });

    //BVA Test (Weight 1-500)
    test('Min Value - 1 Input', () => {
        expect(calculateBMI(50,0,"SI")).toThrow("Invalid Input. Weight must be between 1kg and 500kg.");
    });

    test('Min Value Input', () => {
        expect(calculateBMI(50,1,"SI")).toBe("Underweight");
    });

    test('Median Value Input', () => {
        expect(calculateBMI(50,250,"SI")).toBe("Obease");
    });

    test('Max Value Input', () => {
        expect(calculateBMI(50,500,"SI")).toBe("Obese");
    });

    test('Max + 1 Value Input', () => {
        expect(calculateBMI(50,501,"SI")).toThrow("Invalid Input. Weight must be between 1kg and 500kg.");
    });

    //EC Test (height)
    test('Partition 1 - height < 10cm', () => {
        expect(calculateBMI(-10,50,"SI")).toThrow("Invalid Input. Height must be between 10cm and 300cm.");
        expect(calculateBMI(0,50,"SI")).toThrow("Invalid Input. Height must be between 10cm and 300cm.");
        expect(calculateBMI(9,50,"SI")).toThrow("Invalid Input. Height must be between 10cm and 300cm.");
    });
    
    test('Partition 2 - height = 10cm', () => {
        expect(calculateBMI(10,50,"SI")).toBe("Obese");
    });

    test('Partition 3 - 10 < height < 300', () => {
        expect(calculateBMI(11,50,"SI")).toBe("Obease");
        expect(calculateBMI(150,50,"SI")).toBe("Normal Weight");
        expect(calculateBMI(299,50,"SI")).toBe("Underweight");
    });

    test('Partition 4 - height = 300', () => {
        expect(calculateBMI(300,50,"SI")).toBe("Underweight");
    });

    test('Partition 5 - height > 300', () => {
        expect(calculateBMI(301,50,"SI")).toThrow("Invalid Input. Height must be between 10cm and 300cm.");
    });

    //EC Test (weight)
    test('Partition 1 - height < 10cm', () => {
        expect(calculateBMI(-10,50,"SI")).toThrow("Invalid Input. Weight must be between 1kg and 500kg.");
        expect(calculateBMI(0,50,"SI")).toThrow("Invalid Input. Weight must be between 1kg and 500kg.");
        expect(calculateBMI(9,50,"SI")).toThrow("Invalid Input. Weight must be between 1kg and 500kg.");
    });
    
    test('Partition 2 - height = 10cm', () => {
        expect(calculateBMI(10,50,"SI")).toBe("Obese");
    });

    test('Partition 3 - 10 < height < 300', () => {
        expect(calculateBMI(11,50,"SI")).toBe("Obease");
        expect(calculateBMI(150,50,"SI")).toBe("Normal Weight");
        expect(calculateBMI(299,50,"SI")).toBe("Underweight");
    });

    test('Partition 4 - height = 300', () => {
        expect(calculateBMI(300,50,"SI")).toBe("Underweight");
    });

    test('Partition 5 - height > 300', () => {
        expect(calculateBMI(301,50,"SI")).toThrow("Invalid Input. Weight must be between 1kg and 500kg.");
    });
});