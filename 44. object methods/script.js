const jonas = {
firstName : 'Hamid',
lastName : 'Hameed',
birthyear :  2006,
job: 'student',
friends:  ['Awais' , 'Hamid' , 'Bhai'],
haveDrivingLisence : true,

//  calcAge: function(){
//     //console.log(this);
//     return 2024 - this.birthyear;
//  }

//  calcAge: function(birthyear){
//      return 2024 - birthyear ;
//  }

calcAge: function(){
    this.age = 2024 - this.birthyear
    return this.age;
},

getSummary: function(){
    return `${jonas.firstName} is a ${jonas.age} years old ${jonas.job} ,  and he has ${this.haveDrivingLisence ? 'a' : 'no'}  driver's lisence`
},

}
console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

//Challenge
//Hamid is a 18 years old teacher.

console.log(jonas.getSummary());
// same as before getSummary but a no differnce 
console.log(`${jonas.firstName} is a ${jonas.age} years old ${jonas.job} , and he has ${this.haveDrivingLisence ? 'a' : 'no'}  driver's lisence`);