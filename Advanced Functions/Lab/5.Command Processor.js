// 5. Command Processor

function commandProcessor() {
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

  const result = {
    append,
    removeStart,
    removeEnd,
    print,
  };
  
  return result;
}

const test = commandProcessor();
test.append("hello");
test.append("again");
test.removeStart(3);
test.removeEnd(4);
test.print();
