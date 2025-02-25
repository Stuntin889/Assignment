// Original array
const originalArray = [1, 3, 5, 2, 4, 8, 2, 3, 1, 11, 7, 4, 9, 9, 1];

// Step 1: Use "map" to create new arrays
// a) Multiply each element by 2
const multipliedByTwo = originalArray.map(num => num * 2);
console.log("Step 1a - Multiplied by 2:", multipliedByTwo);

// b) Add 1 to each element
const addedOne = originalArray.map(num => num + 1);
console.log("Step 1b - Added 1:", addedOne);

// c) Multiply each element by your Student ID number (467733)
const studentID = 467733;
const multipliedByID = originalArray.map(num => num * studentID);
console.log("Step 1c - Multiplied by Student ID:", multipliedByID);

// Step 2: Use "filter" to create new arrays based on conditions
// a) For the array resulting from step 1a, all numbers smaller than 10
const filteredLessThanTen = multipliedByTwo.filter(num => num < 10);
console.log("Step 2a - Numbers smaller than 10:", filteredLessThanTen);

// b) For the array resulting from step 1b, all odd numbers
const filteredOddNumbers = addedOne.filter(num => num % 2 !== 0);
console.log("Step 2b - Odd numbers:", filteredOddNumbers);

// c) For the array resulting from step 1c, all numbers greater than 1,000,000
const filteredGreaterThanMillion = multipliedByID.filter(num => num > 1000000);
console.log("Step 2c - Numbers greater than 1,000,000:", filteredGreaterThanMillion);

// Step 3: Use "reduce" to calculate single values
// a) Calculate the sum of all elements from the original array
const sumOfOriginal = originalArray.reduce((acc, num) => acc + num, 0);
console.log("Step 3a - Sum of original array:", sumOfOriginal);

// b) Remove all duplicates from the original array
const uniqueValues = [...new Set(originalArray)];
console.log("Step 3b - Unique values:", uniqueValues);

// c) Flatten the multidimensional array into a one-dimensional array
const multidimensionalArray = [[1, 2], [3, 4], [5, [6, 7]]];
const flattenedArray = multidimensionalArray.flat(Infinity);
console.log("Step 3c - Flattened array:", flattenedArray);

// Step 4: Sort students by GPA and add a new property "status"
const students = [
    { name: "Alice Johnson", program: "Rocket Science", GPA: "3.75" },
    { name: "Brian Smith", program: "Rocket Science", GPA: "3.89" },
    { name: "Chloe Brown", program: "Rocket Science", GPA: "3.63" },
    { name: "David Lee", program: "Rocket Science", GPA: "3.94" },
    { name: "Ella White", program: "Rocket Science", GPA: "3.47" },
    { name: "Finn Walker", program: "Rocket Science", GPA: "3.71" },
    { name: "Grace Hall", program: "Rocket Science", GPA: "3.99" },
    { name: "Henry Adams", program: "Rocket Science", GPA: "3.54" },
    { name: "Isla Carter", program: "Rocket Science", GPA: "3.68" },
    { name: "Jack Moore", program: "Rocket Science", GPA: "3.85" }
];

const sortedStudents = students
    .map(student => ({ ...student, status: "active" })) // Add status property
    .sort((a, b) => parseFloat(b.GPA) - parseFloat(a.GPA)); // Sort by GPA in descending order

console.log("Step 4 - Sorted students with status:", sortedStudents);
console.log("Original Array:", originalArray);
console.log("Final Student Array:", sortedStudents);