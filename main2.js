document.querySelectorAll("#Everything")
var answer = "car";
answer = answer.toLowerCase().split('');
var lettersGuessed = [];
var status = "still playing";
//this above has our variables 
var getGame = function () {
   let puzzle = ''

   answer.forEach(function(letter){
       if (lettersGuessed.includes(letter) || letter === ' ') {
           puzzle += letter
       } else {
           puzzle += '_'
       }
   })
   return puzzle
}

var makeGuess = function (guess) {

   guess = guess.toLowerCase()
   var ifCorrect = !lettersGuessed.includes(guess)

   if (status !== 'still playing') {
       return
   }

   if (ifCorrect) {
       lettersGuessed.push(guess)
   }

}
//the functions above will basically allow the user to only enter letters that are
//related to the secret word. Letters that are pressed that are in not
//the secret word will not show up and not be entered.

var puzzleEl = document.querySelector('#puzzle')
var guessesEl = document.querySelector('#guesses')
//those are targetting our id's with the query selector

puzzleEl.textContent = getGame()

window.addEventListener('keypress', function (i) {
   var guess = (i).key;
   makeGuess(guess)
   puzzleEl.textContent = getGame()
})
//The function above is listening for keypresses on the keyboard