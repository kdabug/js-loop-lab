# Loopy Functions

### manyEvens
Write a function `manyEvens` that takes no arguments. Using a for loop push all even numbers between 1 and 100 into an array and then return the array, including 100.

### manyOdds
Write a function `manyOdds` that no takes no arguments. Use a while loop and push all odd numbers between 3 and 103 inclusive, into an array and then return the array.

### sumToN
Write a function `sumToN` that takes a number as an argument. using either a for or while loop compute the sum of all the digits from 1 up to some number, n. Return the sum.  

Hint: For this and the remaining problems, it may help to declare a variable at the start of the function and then update it in a loop before returning it at the end of the function.

### countDown
Write a function `countDown` that takes some number n as an argument, loop from n down to 1 using either a for or a while loop and push each number into an array. Return the array.

### factorial
Write a function `factorial` that takes a number as an argument.  `factorial` should return the factorial, e.g., 3!, for the given number. To compute a factorial, take all the digits from 1 up to the number and multiple them together. Thus, for 5, we would have to multiple 1 * 2 * 3 * 4 * 5 which gives 120 as the answer.

### lcm (least common multiple)
Write a function `lcm` (least common multiple) that takes two numbers as arguments. `lcm` will return the least common multiple of two numbers. For example, since 8 * 2 = 16 and 4 * 4 is 16, then 16 is a multiple of both 4 and 8 (not including each other). 24 and 32 are also multiples of 8 and 4, but since 16 is the smallest, it gets the coveted title of least common multiple. Hint: It may help to write a for loop starting with whichever of the two arguments is larger, and then incrementing by the same larger argument. In the body of the. loop, check if the current number is a multiple of both arguments, but not equal to either of them.

### fib
Lastly, write a function `fib` that takes a number `n` as an argument and returns compute the nth Fibonacci number, beginning with 0. The first 14 numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233 ... So fib(1) should return 0 and fib(8) should return 13. This is a tough one! Check out the wikipedia article for Fibonacci numbers for a refresher if need be. A good strategy for tackling this problem is manually checking for the first few numbers in the sequence, and then set a last and secondToLast variables. Start a loop and each time, calculate the sum of last and secondToLast before updating those two variables. When you've reached the nth digit, return it and you're done!