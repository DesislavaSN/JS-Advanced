// 5. Command Processor

function commandProcessor() {
  // CLOSURE e promenlivata 'state' za tazi f.
  // 'state' promenlivata e dostupna za vsichki functions nadoly v golemia scope na commandProcessor()
  let str = "";

  function append(text) {
    str = str += text;
  }

  function removeStart(n) {
    str = str.slice(n);
  }

  function removeEnd(n) {
    str = str.slice(0, -n);
  }

  function print() {
    console.log(str);
  }

  // vrushtame object koito ima refernecii kum vsichkite functions koito sa v glavnata f. commandProcessor(),
  // tova moje da go narichame methods poneje te manipolirat nqkakvi danni koito sa vurzani kum functions
  const result = {
    append,
    removeStart,
    removeEnd,
    print,
  };
  return result;
  // tova e suhtoto kato gornite redove - vmesto da suzdavame object i da go vrushtame, to go vrushtame directno!
  //   return {
  //     append,
  //     removeStart,
  //     removeEnd,
  //     print,
  //   };
}

// s const test = commandProcessor(); - > suzdavame procesora i go testvame
const test = commandProcessor();
test.append("hello");
test.append("again");
test.removeStart(3);
test.removeEnd(4);
test.print();
