const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat() {
    const newArray = [...cats];
    newArray.push("Broom");
    return newArray;
}

function prependCat() {
    const newArray = [...cats];
    newArray.unshift("Arnold");
    return newArray;
}

function removeLastCat() {
    const newArray = [...cats];
    newArray.pop();
    return newArray;
}

function removeFirstCat() {
    const newArray = [...cats];
    newArray.shift();
    return newArray;
}
