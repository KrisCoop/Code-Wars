let sheep = ["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"];

function warnTheSheep(arr) {
    if ((arr[arr.length - 1]) === "wolf") {
        return "Pls go away and stop eating my sheep";
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "wolf"  && i !== (arr.length - 1)) {
            return `Oi! Sheep number ${(i + 2)}! You are about to be eaten by a wolf!`
        } 
    }
}
console.log(warnTheSheep(sheep))


// warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]) === "Oi! Sheep number 1! You are about to be eaten by a wolf!"

// warnTheSheep(["sheep", "sheep", "wolf"]) === "Pls go away and stop eating my sheep"