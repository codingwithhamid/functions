// function decleration

function calcAge1(birthYear){
    return 2024 - birthYear
}
const age = calcAge1(2006)
console.log(age)

const calcAge2 = function(birthYear){
    return 2024 - birthYear
}
const age2 = calcAge2(2006)
console.log(age2)
