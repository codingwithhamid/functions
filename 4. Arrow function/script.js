// Arrow function for single line
const calcAge1 = birthYear => 2024 - birthYear;
const age = calcAge1(2006);
console.log(age);

// Arrow function for multiples lines

const yearsUntilRetire = (birthYear , firstname) => {
    const age1 = 2024 - birthYear;
    const retire = 65 - age1;
    // return retire;
    return `${firstname} is retire in ${retire} years`
}

console.log(yearsUntilRetire(2006 , 'Hamid'))
console.log(yearsUntilRetire(1991 , 'Bukhari'))