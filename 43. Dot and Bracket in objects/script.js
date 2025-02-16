const jonas = {
    firstName : 'Hamid',
lastName : 'Hameed',
age : 2024 - 2006,
job: 'student',
friends:  ['Awais' , 'Hamid' , 'Bhai']
};
console.log(jonas);

// Dot
console.log(jonas.firstName);
console.log(jonas.lastName);

// Brackets
console.log(jonas['firstName']);
console.log(jonas['lastName']);

const intrestedIn = prompt('What do you know about jonas?Choose between firstName , LastName , age , friends and job');
console.log(jonas[intrestedIn]);

if(jonas[intrestedIn]){
    console.log(jonas[intrestedIn]);
}else{
    console.log('Wrong request!Choose between firstName , LastName , age , friends and job');
}

