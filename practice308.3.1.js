//Part 1: Fizz Buzz
//Loop through all numbers from 1 to 100.
for (let i = 1; i <= 100; i++) {
  //If a number is divisible by both 3 and 5, log “Fizz Buzz.”

  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Fizz Buzz");
    //If a number is divisible by 3, log “Fizz.”
  } else if (i % 3 === 0) {
    console.log("Fizz");
    //If a number is divisible by 5, log “Buzz.”
  } else if (i % 5 === 0) {
    console.log("Buzz");
    //If a number is not divisible by either 3 or 5, log the number.
  } else {
    console.log(i);
  }
}

//Part 2: Prime Time
let n = 9;
let number = n + 1;

while (true) {
  let isPrime = true;

  if (number <= 1) {
    isPrime = false;
  } else if (number === 2) {
    isPrime = true;
  } else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }
  }

  if (isPrime) {
    console.log(number);
    break;
  }

  number++;
}

//Part 3: Feeling Loopy
let csvData =
  "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

// Initialize variables to store cell data
let cell1 = "",
  cell2 = "",
  cell3 = "",
  cell4 = "";
let cellIndex = 0;

// Loop through each character in the CSV string
for (let i = 0; i < csvData.length; i++) {
  let char = csvData[i];

  // Check for comma to move to the next cell
  if (char === ",") {
    cellIndex++;
    continue;
  }

  // Check for newline to move to the next row
  if (char === "\n") {
    console.log(cell1, cell2, cell3, cell4);
    cell1 = "";
    cell2 = "";
    cell3 = "";
    cell4 = ""; // Reset cells
    cellIndex = 0; // Reset cell index
    continue;
  }

  // Assign characters to the appropriate cell
  if (cellIndex === 0) {
    cell1 += char;
  } else if (cellIndex === 1) {
    cell2 += char;
  } else if (cellIndex === 2) {
    cell3 += char;
  } else if (cellIndex === 3) {
    cell4 += char;
  }
}

// Log the last row of data (in case there's no newline at the end)
console.log(cell1, cell2, cell3, cell4);
