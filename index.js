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

function isValid(str, stack) {

  // if (str.length === 0) {
  //   if(char === '') {
  //     return true;
  //   }
  //   return false;
  // }
  
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char === "(" && i == str.length-1){
      console.log ('missing ) at position:', i)
    }
    if (char === "(") {
      stack.push(char);
    } 

    if (isEmpty(stack) && char === ')'){
      console.log('Damn fool, missing ( at position:', i)
   }

    if (char === ")" && !isEmpty(stack)) {
    stack.pop();
    console.log('also here')
    } 
 
    if(i === str.length - 1 && !isEmpty(stack)){
      console.log('missing a ) at :', i)
    }
  }
};


function sort(stack, tempStack){
  tempStack = tempStack;

  let tempVar = stack.pop();


// 1. 


  while(stack.top !== null){
    if(isEmpty(tempStack)){
      tempStack.push(tempVar)
    }
    tempVar= stack.pop();
    if(peek(tempStack) < tempVar){
      tempStack.push(tempVar);
    } else{
      stack.push(tempVar)
    }
  }
 console.log(stack)  

}









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

  // let stackStr = new stack;
  // isValid('((()))', stackStr);

let tempStack = new stack;

  let newStack = new stack;
  newStack.push('2')
  newStack.push('3')
  newStack.push('4')
  newStack.push('6')
  newStack.push('5')


  sort(newStack, tempStack)
}


main()