const friends = ['Awais' , 'Asim ' , 'Abdul',];

// Add element 
friends.push('Sharoosh'); // Last 
 const newLength = friends.push('Usman');
console.log(friends);
console.log(newLength);

friends.unshift('Arslan');// frist 
friends.unshift('Danish');// frist 

console.log(friends);

//Remove elements

friends.pop(); //last element
const popped =friends.pop(); //last element
friends.pop(); //last element

console.log(friends);
console.log(popped);

friends.shift(); // Frist element
const shifted = friends.shift();
console.log(friends);
console.log(shifted);

console.log(friends.indexOf('Awais'));
console.log(friends.indexOf('Atui'));

friends.push(23);
console.log(friends.includes('Awais'));
console.log(friends.includes('23'));
console.log(friends.includes(23));


// condition
if(friends.includes('Awais')){
    console.log('You have a friend called Awais');
}

