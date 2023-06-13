const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

/* Write your code below. Good luck! 🙂 */

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
console.log();
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  totals.push(bills[i] + tip);
  tips.push(tip);
}
console.log(bills, tips, totals);

const calcAvg = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum / arr.length;
};
console.log(calcAvg(totals));
console.log(calcAvg(tips));
console.log(calcAvg([2, 2, 2]));
