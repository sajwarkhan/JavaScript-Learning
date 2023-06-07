// const jonas = {
//     name: 'jonas',
//     bestFriend : 'micheal',
//     friendsTwo : 'steven',
//     friendThree : 'jack',
    
// };
// // console.log(jonas.bestFriend)
// const identity = prompt('choose your best friend'
// );

// console.log(`${jonas.name} has 3 friends and best friend is ${jonas.bestFriend}`);

const mark = {
    fullName: 'mark',
    mass: 78,
    height: 1.69,
}
const john = {
    fullName: 'john',
    mass: 92,
    height: 1.95,
}

const calcBmi = (mass, height) => {
const bmi = mass / (height*height)
return bmi
}

const markBmi = calcBmi(mark.mass, mark.height)
const johnBmi = calcBmi(john.mass, john.height)

console.log(`${mark.fullName} Bmi is ${markBmi} and ${john.fullName} Bmi is ${johnBmi}`);

if(markBmi>johnBmi){
    console.log (`mark is higher`)
} else{
    console.log(`john Bmi is higher`)
}