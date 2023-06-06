// function cutpieces (fruits){

// return 4*fruits;
// }
// function fruitprocessor (apple, oranges){
// const applejuice = cutpieces(apple)
// const orangejuice = cutpieces(oranges)

// juice= `juice of ${applejuice} apple and juice of ${orangejuice} oranges`;
// return juice;
// }
// console.log(fruitprocessor(3,4))



// const calcAverage = (score1, score2, score3)=>
// {
//     const aveScore = (score1+score2,score3)/3;
//     return aveScore;

// }
// function winTeam (DolphinAvg, kolaavg){

//     // const DolphinAvg = calcAverage(Score1Dolphin,Score2Dolphin,Score3Dolphin);
//     // const  kolaavg=  calcAverage(score1Koalas,score2Koalas,score3Koalas);
// if(DolphinAvg> kolaavg*2)
// {
//    console.log("dolphin Wins");
// }
// else if(kolaavg > DolphinAvg*2)
// {

//     console.log("koalass Wins");
// }
// else{
//     console.log("No Team wins");
// }

// }
// const DolphinAvg = calcAverage(23,56,23);
//     const  kolaavg=  calcAverage(56,55,66);
// console.log(winTeam(DolphinAvg,kolaavg));


const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));
 
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);
 
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
};
 
checkWinner(scoreDolphins, scoreKoalas);
