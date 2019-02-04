// Code your solution here!
function printString(string) {
  console.log(string[0]);

  if (string.length > 1) {
    const substring = string.substring(1);
    printString(substring);
  } else {
    return true;
  }
}

function reverseString(string) {
  if (string.length > 0) {
    return reverseString(string.substring(1)) + string[0];
  } else {
    return string;
  }
}

function isPalindrome(string) {
  if (string[0] !== string[string.length - 1]) return false;

  if (Math.floor(string.length / 2) > 0) {
    return isPalindrome(string.substring(1, string.length - 1));
  } else {
    return true;
  }
}

function addUpTo(array, index) {
  if (index > 0) {
    return array[index] + addUpTo(array.slice(0, index), index - 1);
  } else {
    return array[0];
  }
}

function maxOf(array) {
  if (array.length > 1) {
    let max = maxOf(array.slice(1));
    return max > array[0] ? max : array[0];
  } else {
    return array[0];
  }
}

function includesNumber(array, number) {
  if (array[0] === number) return true;
  if (array.length) {
    return includesNumber(array.slice(1), number);
  } else {
    return false;
  }
}
