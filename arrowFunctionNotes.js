// arrow functions?

// here's a normal-ass function:
const myFunc = function (num, num2) {
    return num2 > num;
}

console.log(myFunc(33, 4))

//but, we can make this cleaner. watch:

const mySuperFunc = (num, num1) => num1 > num;

console.log(mySuperFunc(33, 4))

// with arrow functions they need to be on the same line and what you want returned needs to be on the right of the arrow.
// that being said, if you break the rules and use curly braces, then it worn't automatically return it.