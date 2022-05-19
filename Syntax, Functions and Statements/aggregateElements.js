function aggregateElements(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);

  let inversSum = 0;
  for (let i = 0; i < arr.length; i++) {
    inversSum += 1 / arr[i];
  }
  console.log(inversSum);

  let concat = "";
  for (let el of arr) {
    concat += el;
  }
  console.log(concat);
}
