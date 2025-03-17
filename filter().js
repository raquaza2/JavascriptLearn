const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

const fruitLongWords = fruits.filter(longWords);

console.log(fruitLongWords);

function longWords(element) {
    return element.length > 5;
    
}

 