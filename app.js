"use strict";


let score = 0;
let attempts = 4;
let myNumber = 25;
let userGuess = null;

let userName = prompt('What is your name?');
if(userName){
  alert('Bonjour, ' + userName + '!');
  console.log('What is your name? ' + userName);
}



let answerOne = prompt('Am I over 18?').toUpperCase();


if(answerOne === 'Y' || answerOne === 'YES'){
  score++;
  alert('You are correct!');
} else if(answerOne === 'N' || answerOne === 'NO'){
  alert('Sorry, your anwser is incorrect!');
}




let answerTwo = prompt('Do I live in a state where is mostly hot?').toUpperCase();


if(answerTwo === 'Y' || answerTwo === 'YES'){
  score++;
  alert('You are correct!');
} else if(answerTwo === 'N' || answerTwo === 'NO'){
  alert('Sorry, your anwser is incorrect!');
}


let answerThree = prompt('Is my favorite color Blue?').toUpperCase();


if(answerThree === 'Y' || answerThree === 'YES'){
  score++;
  alert('You are correct!');
} else if(answerThree === 'N' || answerThree === 'NO'){
  alert('Sorry, your anwser is incorrect!');
}



let answerFour = prompt('Do I have any siblings?').toUpperCase();


if(answerFour === 'Y' || answerFour === 'YES'){
  score++;
  alert('You are correct!');
} else if(answerFour === 'N' || answerFour === 'NO'){
  alert('Sorry, your anwser is incorrect!');
}




let answerFive = prompt('Do I like Baseball?').toUpperCase();


if(answerFive === 'Y' || answerFive === 'YES'){
  score++;
  alert('Sorry, your anwser is incorrect!');
} else if(answerFive === 'N' || answerFive === 'NO'){
  alert('You are correct');
}





// let attempts = 5;
// // let myNumber = 25;
// let score = 0;
// let userGuess = null;
// let myNumber= Math.ceil(Math.random() * 50);
// console.log(myNumber);

// for (let attempts = 5; attempts > 0; attempts--) {
//   userGuess = prompt('Guess the lucky number!');
//   if(userGuess < myNumber){
//     alert('Too Low, keep trying!' + 'You have ' + attempts + ' left');
//   } else if(userGuess > myNumber){
//     alert('Too High, keep trying!' + 'You have ' + attempts + ' left');
//   } else{
//     score++;
//     alert('You got it correct, your score is ' + score);
//     break;
//   }
// }



// let score = 0;
// let attempts = 4;
// let myNumber = 25;
// let userGuess = null;
// let myNumber= Math.ceil(Math.random() * 50);
console.log(myNumber);


while(attempts > 0){
  userGuess = prompt('Guess the lucky number!');
  if(userGuess < myNumber){
    attempts--;
    alert('Too Low, keep trying!' + 'You have ' + attempts + ' left');
  } else if(userGuess > myNumber){
    attempts--;
    alert('Too High, keep trying');
  } else{
    score++;
    alert('You got it correct, your score is ' + score);
    break;
  }
}











