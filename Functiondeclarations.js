function fruits (apple, oranges){
let juice = `juice with ${apple } and juice with ${oranges}`
return juice;
}
let compJuice = fruits (5,8)

console.log(compJuice)
 
// functions deleration vs expression

function calculateage1(birthYear){
return 2023-birthYear;
}
// console.log(age1(1995))
const age1= calculateage1(1995)

calculateage2 =function (birthYear2){
    return 2023-birthYear2
}
const age2 = calculateage2(1994)
console.log(age1, age2)
