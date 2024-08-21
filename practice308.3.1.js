//Part 1: Fizz Buzz
// //Loop through all numbers from 1 to 100.
// for (let i = 1; i <= 100; i++) {
//   //If a number is divisible by both 3 and 5, log “Fizz Buzz.”

//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("Fizz Buzz");
//     //If a number is divisible by 3, log “Fizz.”
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//     //If a number is divisible by 5, log “Buzz.”
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//     //If a number is not divisible by either 3 or 5, log the number.
//   } else {
//     console.log(i);
//   }
// }

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
