// Question 1 and bonus solution

const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
const array2 = [1,'2',4,591,'392',391,2,5,10,2,1,'1','1','20',20];

const cleanRoom = arr => {
  let newArr = arr;  // Creates editable array
  arraySort(newArr);  // Sorts new array
  return arrayAllInt(newArr) ? groupArray(newArr) : splitArray(newArr);
}

const arraySort = arr => arr.sort((a, b) => a - b);

const arrayAllInt = arr => {
  return arr.every(item => {
    return Number.isInteger(item) ? true : false;
  })
}

const groupArray = arr => {
  let grouped = [];
  while (arr.length > 0) {
    if (arr[0] !== arr[1]) { // If first 2 of arr are !=....
      grouped.push(arr.shift()); // Take first item off old array and add to new
    } else { // Else (first two ARE equal)....
      let group = [];
      do {
        group.push(arr.shift()); // Take first item and put in group...
      }
      while (arr[0] === group[0]) // As long as first item & group item are same
      grouped.push(group); // Then push that group into the new array
    }
  }
  return grouped;
}

const splitArray = arr => {
  let numArray = arr.filter(item => {
    if (Number.isInteger(item) === true) {
      return item;
    }
  });
  let strArray = arr.filter(item => {
    if (Number.isInteger(item) === false) {
      return item;
    }
  });
  return [groupArray(numArray), groupArray(strArray)];
}
