// 2. Argument Info

function argumentInfo(...params) {
  const obj = {};
  for (const el of params) {
    let type = typeof el;
    console.log(`${type}: ${el}`);

    if (obj[type] == undefined) {
      obj[type] = 0;
    }
    obj[type]++;
  }
  //   console.log(obj);

  let sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);
  for (const el of sorted) {
    console.log(el.join(" = "));
  }
}

argumentInfo("cat", 42, function () {
  console.log("Hello world!");
});
console.log("---");
argumentInfo({ name: "bob" }, 3.333, 9.999);
