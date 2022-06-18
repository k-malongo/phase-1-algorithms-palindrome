function isPalindrome(word) {
  // Write your algorithm here
  // write a funtion that checks if a word is a palindrome 
  //check if the first  letter is equal to the last letter
// find the length of a string

var len = Math.floor(word.length / 2);
  for (var i = 0; i < len; i++)
    if (word[i] !== word[word.length - i - 1])
      return false;
  return true;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  The algorithm checks the length of the string first before it check if the fisrt letter is equal to the last letter
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log (require.main)
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
