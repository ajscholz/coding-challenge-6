// Question 2 solution

const array = [1, 2, 3, 4];

const answer = (arr, target) => {
  const half = target / 2;
  for (let i = 0 ; arr[i] < half ; i++) {  // Condition filters duplicates
    let difference = target - arr[i];
    if (array.includes(difference)) return new Array(arr[i], difference);
  }
  return 'No pair';
}
