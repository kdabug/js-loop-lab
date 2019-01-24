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
  //return array counting down from N to 1
  let countArray = [];
  for (let i = n; i >= 1; i--) {
    countArray.push(i);
  }
  return countArray;
};
const answer2 = countDown(4);
console.log(answer2);

//FACTORIAL
const factorial = n => {
  //factorial returns the factorial for n
  let answer = 1;
  for (let i = n; i >= 1; i--) {
    answer = answer * i;
  }
  return answer;
};

const answer3 = factorial(3);
console.log(answer3);

//LCM
const lcm = (arg1, arg2) => {
  let multiple = 0;
  let leastMult = 0;
  let other = 0;
  if (arg1 > arg2) {
    multiple = arg1;
    other = arg2;
  } else {
    multiple = arg2;
    other = arg1;
  }
  for (let i = 1; i < multiple; i++) {
    if ((multiple * i) % other === 0) {
      leastMult = multiple * i;
    }
    if (leastMult > 0) {
      break;
    }
  }
  return leastMult;
};
const answer4 = lcm(4, 16);
console.log(answer4);
