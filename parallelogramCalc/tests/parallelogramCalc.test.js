const calculatePerimeter = require('../src/Main'); 

//Boundary Value Testing
//Min Value - 1 for base/height = 0, invalid input
//Min Value for base height = 1, valid input
//Median Value for base/height = 500000, valid input
//Max Value for base/height = 999999, valid input
//Max Value + 1 for base/height = 1000000, invalid input

//Equivalence Class Testing
//Valid Input: base/height 1-999999
//Invalid Input: base/height < 1 or base/height > 999999
//Partition 1: base/height < 1
//Partition 2: base/height = 1
//Partition 3: 1 < base/height < 999999
//Partition 4: base/height = 999999
//Partition 5: base/height > 999999

describe('calculatePerimeter function test', () => {

    //BVA Test
    test('Min Value - 1 Input', () => {
        expect(calculatePerimeter(0,50)).toThrow("Invalid Input. Base must be between 1 and 999999.");
        expect(calculatePerimeter(50,0)).toThrow("Invalid Input. Height must be between 1 and 999999.");
    });

    test('Min Value Input', () => {
        expect(calculatePerimeter(1,1)).toBe(4.82843);
    });

    test('Median Value Input', () => {
        expect(calculatePerimeter(500000,500000)).toBe(2414213.56237);
    });

    test('Max Value Input', () => {
        expect(calculatePerimeter(999999,999999)).toBe(4828422.29632);
    });

    test('Max + 1 Value Input', () => {
        expect(calculatePerimeter(1000000,50)).toThrow("Invalid Input. Base must be between 1 and 999999.");
        expect(calculatePerimeter(50,1000000)).toThrow("Invalid Input. Height must be between 1 and 999999.");
    });

    //EC Test
    test('Partition 1 - base/height < 1', () => {
        expect(calculatePerimeter(0,50)).toThrow("Invalid Input. Base must be between 1 and 999999.");
        expect(calculatePerimeter(-100,50)).toThrow("Invalid Input. Base must be between 1 and 999999.");
        expect(calculatePerimeter(-999999,50)).toThrow("Invalid Input. Base must be between 1 and 999999.");
        expect(calculatePerimeter(50,0)).toThrow("Invalid Input. Height must be between 1 and 999999.");
        expect(calculatePerimeter(50,-100)).toThrow("Invalid Input. Height must be between 1 and 999999.");
        expect(calculatePerimeter(50,-999999)).toThrow("Invalid Input. Height must be between 1 and 999999.");
    });
    
    test('Partition 2 - base/height = 1', () => {
        expect(calculatePerimeter(1,1)).toBe(4.82843);
    });

    test('Partition 3 - 1 < base/height < 999999', () => {
        expect(calculatePerimeter(50,50)).toBe(241.42136);
        expect(calculatePerimeter(500000,500000)).toBe(2414213.56237);
        expect(calculatePerimeter(900000,900000)).toBe(4345584.41227);
    });

    test('Partition 4 - base/height = 999999', () => {
        expect(calculatePerimeter(999999,999999)).toBe(4828422.29632);
    });

    test('Partition 5 - base/height > 999999', () => {
        expect(calculatePerimeter(1000000,50)).toThrow("Invalid Input. Base must be between 1 and 999999.");
        expect(calculatePerimeter(50,1000000)).toThrow("Invalid Input. Height must be between 1 and 999999.");
    });
});