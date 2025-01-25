function logg(){
    console.log('My name is Hamid')
}
// calling / running and invoking the function
logg();
logg();
logg();

function fruitProcessor(apples , oranges){
const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
return juice;
}
const applejuice = fruitProcessor(2 , 3);
console.log(applejuice);
const orangejuice = fruitProcessor(3 , 2);
console.log(orangejuice)