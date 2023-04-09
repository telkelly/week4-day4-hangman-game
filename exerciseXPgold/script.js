// guess a hidden word

// Prompt player 1 for a word. The word must have a minimum of 8 letters. Present the word in the console with stars (********).
let word = prompt('Write a word minimum 8 letters'); 

if (word.length < 8) {
  word = prompt("Bro, your word is less then 8 letters, try again");
}
let newWord;
for (let i = 0; i < word.length; i++) {
  hiddenWord = word.replaceAll(word, "*");
  console.log(hiddenWord);
}

console.log(newWord)
// At this point continuously prompt player 2 for a letter.
// If the letter is in the word chosen by player 1, display the word in stars again but with the correct letter (*****t**).
// If the letter appears in the word multiple times, make sure it is seen in all the correct places when showing the stars with the correct guesses (***t**t*).
// If player 2 guesses incorrectly 10 times display a message in the console saying YOU LOSE.
// Show a list of all the guesses after each turn. In your code prevent player 2 from guessing the same letter twice.
// If player 1 wins, display a message that says CONGRATS YOU WIN.