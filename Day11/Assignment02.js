//Async Data Processor

const [input1, input2] = process.argv.slice(2);
const a = Number(input1);
const b = Number(input2);

function add(x, y, callback) {
  setTimeout(() => {
    const result = x + y;
    console.log(`Add: ${x} + ${y} = ${result}`);
    callback(null, result);
  }, 500);
}

function multiply(x, y, callback) {
  setTimeout(() => {
    const result = x * y;
    console.log(`Multiply: ${x} * ${y} = ${result}`);
    callback(null, result);
  }, 500);
}

function subtract(x, y, callback) {
  setTimeout(() => {
    const result = x - y;
    console.log(`Subtract: ${x} - ${y} = ${result}`);
    callback(null, result);
  }, 500);
}

console.log("Starting operations...\n");

add(a, b, (err, sum) => {
  if (err) return console.error("Error in addition:", err);

  multiply(sum, b, (err, product) => {
    if (err) return console.error("Error in multiplication:", err);

    subtract(product, a, (err, finalResult) => {
      if (err) return console.error("Error in subtraction:", err);

      console.log(`Final Result: ${finalResult}`);
    });
  });
});
