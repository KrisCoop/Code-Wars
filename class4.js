const kris = {

}

const falsey1 = null;
const falsey2 = undefined;
const falsey3 = 0;
const falsey4 = false;
const falsey5 = "";
const falsey6 = NaN;


if(stuff){
    console.log('this is truthy')
}else{
    console.log('this is falsy')
}

/// josh's version:

const name = 'joshua'

if(name === 'josh'){
    console.log("Hello josh");
}else if(name === 'dan'){
    console.log("Welcome Dan");
}else{
    console.log("We don't know you");
}

switch(name){
    case 'josh' : 
        console.log("Hello josh");
        break;
    case 'Dan' :
        console.log("Welcome Dan");
        break;  
    default: 
        console.log("We don't know you");
        break;
}