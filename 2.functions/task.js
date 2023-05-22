//1
function getArrayParams(...numbers) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
    if (numbers[i] < min) {
      min = numbers[i];
    }
    sum += numbers[i];
  }
  let avg = sum / numbers.length;
  avg = parseFloat(avg.toFixed(2)); // округление до двух знаков после запятой
  return { max: max, min: min, avg: avg };
}

//2.1
function summElementsWorker(...arr) {
  if (!arr.length) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

//2.2
function differenceMaxMinWorker(...arr) {
  if (!arr.length) {
    return 0;
  }
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return max - min;
}

//2.3
function differenceEvenOddWorker(...arr) {
  if (!arr.length) {
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}


//2.4
function averageEvenElementsWorker(...arr) {
  if (!arr.length) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  if (countEvenElement === 0) {
    return 0;
  }
  return sumEvenElement / countEvenElement;
}

//3.1
function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const currentArr = arrOfArr[i];
    const currentResult = func(...currentArr);
    if (currentResult > maxWorkerResult) {
      maxWorkerResult = currentResult;
    }
  }
  return maxWorkerResult;
}





