const jonas = [
    'Jonas',
    'Schmedtman',
    2024 - 2006,
    "teacher",
    ['Mitchel' ,' Willimson' ,' Jordan'],
    true
];

const types = [];
for(let i = 0; i<jonas.length ; i++){
    console.log(jonas[i] , typeof jonas[i])
    types[i] = typeof jonas[i]
};
console.log(types)