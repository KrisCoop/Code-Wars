// Return an array
function fizzbuzz(n) {
    let arr = [];
    for (var i = 1; i <= n; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            arr.push("FizzBuzz");
        }
        else if (i % 5 === 0) {
            arr.push("Buzz");
        }
        else if (i % 3 === 0) {
            arr.push("Fizz");
        }
        else arr.push (i);
    }
    return arr;
}

// Return an array containing the numbers from 1 to N, where N is the parametered value. N will never be less than 1 (in C#, N might be less then 1).

// C# ONLY: If N is smaller then or equal to 0, throw an ArgumentOutOfRangeException!
// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value 'Fizz' instead
// If the value is a multiple of 5: use the value 'Buzz' instead
// If the value is a multiple of 3 & 5: use the value 'FizzBuzz' instead

// best practices versions:

