'use strict'
const calcAge = function(birthYear){
    return 2024 - birthYear;
}


const yearsUntilRetirement = function(birthYear , firstname){
   const age = calcAge(birthYear);
    const retirement = 65 - age;

if(retirement > 0){
    console.log(`${firstname} is retire in ${retirement} years`);
    return retirement;  
}else{
    console.log(`${firstname} has already retire `)
    return -1;
}

    return retirement;
}
console.log(yearsUntilRetirement(2006 , 'Hamid'));
console.log(yearsUntilRetirement(1955 , 'Awais'));