#!/usr/bin/node
function fibs(numberOftimesTorun) {
  let array = [0, 1];
  if (numberOftimesTorun == 0) {
    return [0];
  } else if (numberOftimesTorun == 1) {
    return [0, 1];
  }

  for (let i = 2; i < numberOftimesTorun; i++) {
    let previousNumber = array[array.length - 1];
    let beforePreviousNumber = array[array.length - 2];

    array[i] = previousNumber + beforePreviousNumber;
  }

  return array;
}

function fibRec(numberOftimesTorun) {
  let array = [0, 1];

  if (numberOftimesTorun == 0) {
    return [0];
  } else if (numberOftimesTorun == 1) {
    return [0, 1];
  }
  function fibRecurcsion(numberOftimesTorun) {
    if (numberOftimesTorun == 0) {
      return;
    }

    array[array.length] = array[array.length - 1] + array[array.length - 2];

    return fibRecurcsion(numberOftimesTorun - 1);
  }
  numberOftimesTorun = numberOftimesTorun - 2;
  fibRecurcsion(numberOftimesTorun);

  return array;
}

console.log(fibRec(8));
