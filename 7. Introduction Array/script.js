const friend1 = 'Asim';
const friend2 = 'Awais';
const friend3 = 'Abdul';

const friends = ['Asim' , 'Awais' , 'Abdul'];
console.log(friends);
console.log(friends[0 ]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

const year = new Array(1909, 2009, 2012, 2020);
console.log(year);

friends [2] = 'Saqib';
console.log(friends);

const firstname = 'Peter';
const peter = [firstname,  'Bhai' , 2042 - 2006 , friends, 'teacher'];
console.log(peter);


// Exercise
const calcAge = function(birthYear){
    return 2024 - birthYear;
}
const years = [1990 , 1890 , 2000 , 2001 , 1971];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1 , age2 , age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
console.log(ages);
