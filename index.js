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

function isEmpty(stack) {
  if(stack.top === null) {
    return true;
  }
  return false;
}

function isValid(str, stack, open = 0) {
  
  console.log(str)
  if ((str.length === 0) && (isEmpty)) {
    return true;
  }

  // if (isEmpty(stack)) {
  //   return true;
  // }
  // else {
  //   return false;
  // }
  

  const char = str.charAt(0);
  if (char === "(") {
    stack.push(char);
  }
  if (char === ")") {
    stack.pop();

  }
  //return isValid(str.slice(1), stack, open);
};

function main() {
  let startrek = new stack;

  startrek.push('Kirk')
  startrek.push('Spock')
  startrek.push('McCoy')
  startrek.push('Scotty')  
  //display(peek(startrek));

  // console.log(is_palindrome("dad"));
  // console.log(is_palindrome('A man, a plan, a canal: Panama'));
  // console.log(is_palindrome("1001"));
  // console.log(is_palindrome("Tauhida"));

  let stackStr = new stack;
  console.log(isValid('(((()))', stackStr));
}

main()