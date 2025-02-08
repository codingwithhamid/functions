// Calling one function into another function
function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples , oranges){

    const applePieces = cutFruitPieces(apples);
    const orangesPieces = cutFruitPieces(oranges);

    const juice = `juice with ${applePieces} pieces of apple and ${orangesPieces} pieces of orange.`

    return juice
}
console.log(fruitProcessor(2 ,3));