const gallonToLiter = require('../Main'); 

describe('gallonToLiter function test', () => {
  test('Min Value Input', () => {
    expect(gallonToLiter(1)).toBe(3.78541);
  });
});