function countLetters(string) {
  var newString = string.replace(/\s+/g, ''); //removes the spaces. 
  var count = {};
  for(let i =0; i < newString.length; i++) { //For loop to iterate each character
    count[newString[i]] = (count[newString[i]] || 0) + 1; // check if the parameter exists or not . Assign 0 or adds 1
  }
  return count;
}

console.log(countLetters('salut les amis'));