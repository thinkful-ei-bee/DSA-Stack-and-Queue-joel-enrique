const stack = require('./stack.js');
const queue = require('./queue.js');

function main() {
  let startrek = new stack;

  startrek.push('Kirk')
  console.log(startrek.pop());
}

main()