// Question 1:
// Clean the room function: given an input of
// [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that
// organizes these into individual array that is ordered. For example
// answer(ArrayFromAbove) should return:
// [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].

// Bonus:
// Make it so it organizes strings differently from number types.
// i.e. [1, '2', '3', 2] should return [[1,2], ['2', '3']]

const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
const array2 = [1,'2',4,591,'392',391,2,5,10,2,1,'1','1','20',20];

const cleanRoom = arr => {
  let newArr = arr;  // Creates editable array
  arraySort(newArr);  // Sorts new array
  return arrayAllInt(newArr) ? groupArray(newArr) : splitArray(newArr);
}

// Sort array, but works with ints & strings, where array.sort() does not
const arraySort = arr => arr.sort((a, b) => a - b);

// Checks if the array is all ints
// If true, return it -- if false send to strArray()
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
      while (arr[0] === group[0]) // As long as first item and group items are same
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

var p1 = document.getElementById('p1');
var t1 = document.createTextNode(cleanRoom(array).toString());
p1.appendChild(t1);

var p1b = document.getElementById('p1b');
var t1b = document.createTextNode(cleanRoom(array2).valueOf());
p1b.appendChild(t1b);
