//8. Sort an Array by 2 Criteria

function sortArrBy2Criterias(arr) {
  arr.sort();
  arr.sort((a, b) => a.length - b.length);
  console.log(arr.join("\n"));
}

sortArrBy2Criterias(["alpha", "beta", "gamma"]);
sortArrBy2Criterias(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
sortArrBy2Criterias(["test", "Deny", "omen", "Default"]);
