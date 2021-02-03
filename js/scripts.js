$(document).ready(function(){
    $("form#w0rds").submit(function(event) {
        event.preventDefault();
        let word = $("input#userWord").val();
        console.log(word);
    });
});







function checkPalindrome(str) {
  const len = string.length;
  for (let i = 0; i < len / 2; i++) {
      if (string[i] !== string[len - 1 - i]) {
          return 'It is not a palindrome';
      }
  }
  return 'It is a palindrome';
}

// take input
const string = userWord('Enter a string: ');

// call the function
const value = checkPalindrome(string);

console.log(value);