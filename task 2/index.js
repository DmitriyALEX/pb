function getTriangleValue(a, b, c) {
  if (isNaN(a) || isNaN(b) || isNaN(c)) return -1;

  if (a + b <= c || a + c <= b || b + c <= a) return -1;

  const semiPerimeter = (a + b + c) / 2;
  //Heron's formula
  const area = Math.sqrt(semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c));

  return Math.round(area * 100) / 100;
}

console.log(getTriangleValue(1, 2, 3));
console.log(getTriangleValue(2, 2, 2));
