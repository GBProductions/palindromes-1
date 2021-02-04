//Business Logic//

function checkPalindrome(string) {
    const len = string.length;
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
  }

//User Logic//

$(document).ready(function(){
    $("form#w0rds").submit(function(event) {
        event.preventDefault();
        let string = $("input#userWord").val();

        // call the function
        const value = checkPalindrome(string);
        $(".return").text(value);
    });
});