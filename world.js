var couch = {
    cushions: `looseChange`,
    fabric: `ninetiesDamaskPattern`,
    stains: "It's stains are many and magnificent",
    history: "Shrouded in mystery",
};
// nouns, adjectives and verbs. we use these 3 same principles throughout javascript.
// nouns...99% of the things we do in jscript is going to be related to an object in some way. objects are a nice way to takee the info we collect from ppl and encapsulate them in a nice object.
// NOUNS...are {}. they are a block. they are encased in these curly brackets. observe:
// kris as an object:
const kris = {
    height: "6'1",
    weight: 304,
    eyeColor: "blue",
    age: 34,
    birthday: "04/02/1985",
    isMale: true,
    isFemale: false,
    livesInUSA: true,
    address: {
        street: "715 E 100 N",
        city: "Lindon",
        State: "Utah",
        zipCode: "84042"
    }
};

//Basic Data Types
//'' "" `` //strings. Josh's recommendation is to just use back-ticks with strings.
//1234567890 //numbers. These are numbers, simply that. There are some sub-categories of numpers...
      /// ====> int, integers (have no decimals) and Float, which do have decimals.
//true / false ///booleans, true or false.
//null undefined // these data types dont have a value assigned to them. they are valueless.
//NaN // Not a Number. It's apparently something you will use to check to see if something is a number.

// our data-types sort of form our ADJECTIVES when we are writing javascript :P


///variables
///var //es5
//let //es6 lets me change what the variable means, what it points to.
//const //es6 constant.

//we can call the entire object for kris, or just a single property:
console.log(kris)
console.log(kris.age)

//es5 syntax functions look like this:
function myFunc() {
    
};

//es6 syntax functions look like this:
const myOtherFunc = () => {

};

// functions are VERBS that allow us to feed something in, then spit something (probably a NOUN) back out.
// also, when you declare a funtion, you can call it as many times as you want to.

function buttonClick(){

}

// ARROW FUNCTIONS are kind of a shorthand way of writing a normal function, like this:
const arrow = () => {}
// most of the time he sees this being used to replace the normal way of writing functions as expressions.

///////////////////////////////

//      SCOPE, here are some notes about it...

// javascript by default is `functionally scoped`, which means everything exists on a `function` level. 
////basically, everything inside of a function, can see everything inside the function. there is global scope, where a variable can exist as a global standard, and exists everywhere. It's the top level.
//dot notation:
let myFingers = {
    fing1: `thumb`,
    fing2: `index`,
    fing3: `bird`,
    fing4: `ring`,
    fing5: `pinky`
};

let gamingFinga = myFingers.fing1;

myFingers.fing3 = `the birdie`;

let blueSword = {
    author: "Robyn McKinley",
    pages: 267,
    newberryAward: true,
    Owner: "Springville Library",
};

let bookAuthor = blueSword.author;