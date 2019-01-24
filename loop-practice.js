//MANY EVENS
const manyEvens = () => {
  //returns an array of all even numbers between 1 and 100
  let evenArray = [];
  for (i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      evenArray.push(i);
    }
  }
  return evenArray;
};
manyEvens();
console.log(manyEvens());

//MANY ODDS
const manyOdds = () => {
  //returns an array of all odd numbers between 3 and 103
  let oddArray = [];
  let starter = 3;
  while (starter <= 103) {
    if (starter % 2 !== 0) {
      oddArray.push(starter);
    }
    starter++;
  }
  return oddArray;
};
manyOdds();
console.log(manyOdds());

// SUMTON
const sumToN = n => {
  //sumToN returns the sum of all numbers up to number N
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
};

const answer = sumToN(4);
console.log(answer);

//COUNTDOWN
const countDown = n => {
  let countArray = [];
  for (let i = n; i >= 1; i--) {
    countArray.push(i);
  }
  return countArray;
};
const answer2 = countDown(4);
console.log(answer2);
