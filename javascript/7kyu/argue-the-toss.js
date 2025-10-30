// Codewars kata: "Argue the toss"
// Level: 7 kyu
// Link: https://www.codewars.com/kata/5758a91bbd1fdd2033000947/javascript
// Date completed: 2025-10-30

// Description: Return a descriptive sentence based on how many arguments are passed.

/* Example:
    anArgument("apple") ➞ 'You gave me 1 argument and it is "apple".'
    anArgument("apple", "banana") ➞ 'You gave me 2 arguments and they are "apple" and "banana".'
    anArgument("apple", "banana", "cherry") ➞ 'You gave me 3 arguments and they are "apple", "banana" and "cherry".'
    anArgument() ➞ "You didn't give me any arguments."
*/

/* Notes:
   - Uses rest parameters to handle any number of arguments
   - Handles singular/plural forms correctly
   - Constructs a grammatically natural list with commas and "and"
*/

function anArgument(...args) {
  const argsLength = args.length;
  if (argsLength === 0) {
    return "You didn't give me any arguments.";
  }
  
  const singularOrPlural = argsLength === 1 ? 'argument and it is' : 'arguments and they are';
  
  const quotedArgs = args.map(arg => `"${arg}"`);

  let argsString = "";
  if (quotedArgs.length === 1) {
    argsString = quotedArgs[0];
  } else if (quotedArgs.length === 2) {
    argsString = `${quotedArgs[0]} and ${quotedArgs[1]}`;
  } else {
    const allButLast = quotedArgs.slice(0, -1).join(", ");
    const last = quotedArgs[quotedArgs.length - 1];
    argsString = `${allButLast} and ${last}`;
  }

  return `You gave me ${argsLength} ${singularOrPlural} ${argsString}.`;
}

/* OR
   Alternative concise solution from other Codewars users:
   
function anArgument(...args) {
  const n = args.length;
  if (!n) return 'You didn\'t give me any arguments.';
  if (n === 1) return `You gave me 1 argument and it is "${args[0]}".`;
  return `You gave me ${n} arguments and they are "${args.slice(0, n - 1).join('", "')}" and "${args[n - 1]}".`;
}
*/

/* OR using switch statement for readability:

function anArgument(...args) {
  const count = args.length;

  if (count === 0) {
    return "You didn't give me any arguments.";
  }

  const quoted = args.map(arg => `"${arg}"`);
  let list = "";
  let noun = "";

  switch (count) {
    case 1:
      list = quoted[0];
      noun = "argument and it is";
      break;
    case 2:
      list = `${quoted[0]} and ${quoted[1]}`;
      noun = "arguments and they are";
      break;
    default:
      const allButLast = quoted.slice(0, -1).join(", ");
      const last = quoted[count - 1];
      list = `${allButLast} and ${last}`;
      noun = "arguments and they are";
      break;
  }

  return `You gave me ${count} ${noun} ${list}.`;
}
*/
