// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(cat) {
    return cats.push(cat);
}

function destructivelyPrependCat(cat) {
    return cats.unshift(cat);
}

function destructivelyRemoveFirstCat() {
    return cats.shift();
}

function destructivelyRemoveLastCat() {
    return cats.pop();
}

function appendCat(cat) {
    const newArr = [...cats];
    newArr.push(cat);
    return newArr;
}

function prependCat(cat) {
    const newArr = [...cats];
    newArr.unshift(cat);
    return newArr;
}

function removeLastCat() {
    const newArr = [...cats];
    newArr.pop();
    return newArr;
}

function removeFirstCat() {
    const newArr = [...cats];
    newArr.shift();
    return newArr;
}