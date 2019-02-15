// Question 2: Write a javascript function that takes an array of numbers
// and a target number. The function should find two different numbers in the
// array that, when added together, give the target number.
//
// For example: answer([1,2,3], 4)should return [1,3]

const array = [1, 2, 3, 4];

const answer = (arr, target) => {
  const half = target / 2;

  // For loop condition ensures two different numbers are used and that
  // the loop doesn't continue once all potential pairs are exhausted
  for (let i = 0 ; arr[i] < half ; i++) {
    let number = arr[i];
    let difference = target - number;
    if (array.includes(difference)) return `[${number}, ${difference}]`;
  }
  return 'No pair';
}
