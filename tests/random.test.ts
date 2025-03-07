import random from '../src/random';

describe('random function', () => {
  // Mock Math.random to return predictable values
  const originalRandom = Math.random;

  beforeEach(() => {
    // Mock Math.random to return 0.5
    Math.random = jest.fn(() => 0.5);
  });

  afterEach(() => {
    // Restore original Math.random
    Math.random = originalRandom;
  });

  test('should return a number between 0 and 1 when no arguments are provided', () => {
    expect(random()).toBe(0.5);
  });

  test('should return a number between 0 and upper bound when only one argument is provided', () => {
    expect(random(10)).toBe(5); // 0 + 0.5 * (10 - 0) = 5
    expect(random(20)).toBe(10); // 0 + 0.5 * (20 - 0) = 10
  });

  test('should return a number between lower and upper bounds when both arguments are provided', () => {
    expect(random(5, 15)).toBe(10); // 5 + 0.5 * (15 - 5) = 10
    expect(random(100, 200)).toBe(150); // 100 + 0.5 * (200 - 100) = 150
  });

  test('should swap arguments if lower is greater than upper', () => {
    expect(random(15, 5)).toBe(10); // Should swap to random(5, 15)
    expect(random(200, 100)).toBe(150); // Should swap to random(100, 200)
  });

  test('should handle negative numbers', () => {
    expect(random(-10, 10)).toBe(0); // -10 + 0.5 * (10 - (-10)) = 0
    expect(random(-20, -10)).toBe(-15); // -20 + 0.5 * (-10 - (-20)) = -15
  });

  test('should handle decimal inputs', () => {
    expect(random(1.5, 3.5)).toBe(2.5); // 1.5 + 0.5 * (3.5 - 1.5) = 2.5
  });

  test('should handle same lower and upper bounds', () => {
    expect(random(5, 5)).toBe(5); // 5 + 0.5 * (5 - 5) = 5
  });
});
