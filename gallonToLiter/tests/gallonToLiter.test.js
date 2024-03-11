const gallonToLiter = require('../src/Main'); 

//Boundary Value Testing
//Min Value - 1 for gallons = -1, invalid input
//Min Value for gallons = 0, valid input
//Median Value for gallons = 500000, valid input
//Max Value for gallons = 999999, valid input
//Max Value + 1 for gallons = 1000000, invalid input

//Equivalence Class Testing
//Valid Input: 0-999999
//Invalid Input: gallon < 0 or gallon > 999999
//Partition 1: gallon < 0
//Partition 2: gallon = 0
//Partition 3: 0 < gallon < 999999
//Partition 4: gallon = 999999
//Partition 5: gallon > 999999

describe('gallonToLiter function test', () => {

    //BVA Test
    test('Min Value - 1 Input', () => {
        expect(gallonToLiter(-1)).toThrow("Invalid Input. Gallons must be between 0 and 999999.");
    });

    test('Min Value Input', () => {
        expect(gallonToLiter(0)).toBe(0);
    });

    test('Median Value Input', () => {
        expect(gallonToLiter(500000)).toBe(1892705.89);
    });

    test('Max Value Input', () => {
        expect(gallonToLiter(999999)).toBe(3785408);
    });

    test('Max + 1 Value Input', () => {
        expect(gallonToLiter(1000000)).toThrow("Invalid Input. Gallons must be between 0 and 999999.");
    });

    //EC Test
    test('Partition 1 - gallons < 0', () => {
        expect(gallonToLiter(-1)).toThrow("Invalid Input. Gallons must be between 0 and 999999.");
        expect(gallonToLiter(-100)).toThrow("Invalid Input. Gallons must be between 0 and 999999.");
        expect(gallonToLiter(-999999)).toThrow("Invalid Input. Gallons must be between 0 and 999999.");
    });
    
    test('Partition 2 - gallons = 0', () => {
        expect(gallonToLiter(0)).toBe(0);
    });

    test('Partition 3 - 0 < gallons < 999999', () => {
        expect(gallonToLiter(1)).toBe(3.78541);
        expect(gallonToLiter(500000)).toBe(1892705.89);
        expect(gallonToLiter(900000)).toBe(3406870.61);
    });

    test('Partition 4 - gallons = 999999', () => {
        expect(gallonToLiter(999999)).toBe(3785408);
    });

    test('Partition 5 - gallons > 999999', () => {
        expect(gallonToLiter(1000000)).toThrow("Invalid Input. Gallons must be between 0 and 999999.");
    });
});