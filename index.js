const stack = require('./stack.js');
const queue = require('./queue.js');

function peek(stack) {
  return stack.top;
}

function display(node) {
  console.log(node);
}

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let backwards = new stack;
  let compare = '';

  for (let i = s.length; i >= 0; i--) {
    backwards.push(s[i]);
  }

  for (let j = 0; j <= s.length - 1; j++) {
    compare += backwards.pop();
  }

  if (s === compare) {
    return true
  }
  return false;
}

function main() {
  let startrek = new stack;

  startrek.push('Kirk')
  startrek.push('Spock')
  startrek.push('McCoy')
  startrek.push('Scotty')  
  //display(peek(startrek));

  console.log(is_palindrome('A man, a plan, a canal: Panama'));
}

main()