function countLetters(string) {
  var newString = string.replace(/\s+/g, ''); //removes the spaces. 
  return newString;
}

console.log(countLetters('salut les amis'));