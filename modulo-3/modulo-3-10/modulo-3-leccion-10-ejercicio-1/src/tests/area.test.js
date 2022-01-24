import area from '../services/area';

test('function getSquareArea returns the area of a square' , () => {
  // Arrange
  const num = 3;
  // Act
  const result = area.getSquareArea(num);
  // Assert
  expect(result).toBe(9);
});

test('function getSquareArea returns undefined when it has no parameters' , () => {
    // Act
    const result = area.getSquareArea();
    // Assert
    expect(result).toBe(undefined);
  });

test('function getTriangleArea returns the area of a triangle' , () => {
    // Arrange
    const base = 3;
    const height = 4;
    // Act
    const result = area.getTriangleArea(base, height);
    // Assert
    expect(result).toBe(6);
  });


