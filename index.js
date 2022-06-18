function isPalindrome(word) {
  // Write your algorithm here
  // write a funtion that checks if a word is a palindrome 
  //check if the first two letters is equal to the last two letters
// find the length of a string
// for( var i = word.length; i > 0; i-- )
// {
//     if( word[i] = word.charAt(word.length)-1 )
//     {
//         return true;
//     }else{
//         return false
//     }
// }
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
