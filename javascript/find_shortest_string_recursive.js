function findShortestStringRecursive(arr) {
  if (arr.length === 1) {
    if (typeof arr[0] === 'object') {
      return arr[0].min;
    }
    else {
      return arr[0];
    }
  }
  else if (typeof arr[arr.length - 1] !== 'object') {
    arr.push({'min': arr.shift()});
  }
  else {
    if (arr[0].length < arr[arr.length - 1].min.length) {
      arr[arr.length - 1].min = arr.shift();
    }
    else {
      arr.shift();
    }
  }
  return findShortestStringRecursive(arr);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));
}

module.exports = findShortestStringRecursive;

/*
If the length of arr is equal to 1
  If the value in the array is an object
    Return the value in the object
  If the valuein the array is not an object
    Return the value in the array
If above failed and there is no object at the end of arr
  Push an object with key equal to 'min' and value equal to the first value of the array
If above failed
  If the length of the first word is less than the length of the value in the object
    The value of the object is equal to the first value of the array
  If above failed
    Remove the first value of the array
Return the function findShortestStringRecursive with arr as the argument
*/

/*
The IF sees if the length of arr is equal to 1.
Inside the IF, I test to see if the original arr size is equal to 1. If not, then the orginal array has been iterated through and the min is returned.
The ELSE IF sees if this is the first iteration of arr. If so, then an object is stored to the end of arr with the current min.
The else tests the if the current iteration is the new min or not. Then it removes the current iteration.
*/